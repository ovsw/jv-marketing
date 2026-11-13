// Client for the webclient's Modeler API (`/webapp/services/v1/modeler`) and the
// file moves between it and the promoted-flows folder (`processes/`). Used by
// `pnpm modeler:push|pull`; the promote command (#154) reuses pullFromModeler.
//
// The Modeler accepts the same Basic login as the engine REST API. It stores one
// current XML per diagram. An upload with overwrite replaces the diagram whose
// name equals the name of the file's first process (BPMN) or first decision
// (DMN); the diagram's key is that element's id.

import { execFile } from "node:child_process";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { promisify } from "node:util";
import { basicAuthorization, type EngineClient, type EngineLogin } from "./engine-rest.ts";

export type DiagramSummary = { id: string; name: string; processkey: string; type: string; updated: string };
export type Deployment = {
  id: string;
  deployedProcessDefinitions: Record<string, unknown> | null;
  deployedDecisionDefinitions: Record<string, unknown> | null;
};

export type ModelerClient = ReturnType<typeof createModelerClient>;

export function createModelerClient(login: EngineLogin) {
  const base = `${login.url.replace(/\/$/, "")}/webapp/services/v1/modeler`;
  const authorization = basicAuthorization(login);

  async function request(method: string, path: string, body?: FormData): Promise<Response> {
    const response = await fetch(`${base}${path}`, { method, headers: { authorization }, body });
    if (!response.ok) {
      throw new Error(`Modeler ${method} ${path} returned ${response.status}: ${(await response.text()).slice(0, 500)}`);
    }
    return response;
  }

  return {
    list: async () => (await request("GET", "/processes?firstResult=0&maxResults=1000")).json() as Promise<DiagramSummary[]>,
    xml: async (id: string) => (await request("GET", `/process/${id}/data`)).text(),
    upload: async (fileName: string, xml: string) => {
      const form = new FormData();
      form.set("file", new Blob([xml], { type: "application/xml" }), fileName);
      return (await request("POST", "/process/create?overwrite=true", form)).json() as Promise<DiagramSummary>;
    },
    deploy: async (id: string) => (await request("POST", `/deployment/create/${id}`)).json() as Promise<Deployment>,
  };
}

export type FlowFile = { path: string; fileName: string; key: string; name: string; xml: string };

// The element the Modeler reads the diagram's key and name from.
function keyElement(fileName: string, xml: string): { key: string; name: string } {
  const tag = fileName.endsWith(".dmn") ? /<decision\b[^>]*>/ : /<bpmn:process\b[^>]*>/;
  const element = xml.match(tag)?.[0];
  const key = element?.match(/\bid="([^"]+)"/)?.[1];
  const name = element?.match(/\bname="([^"]+)"/)?.[1];
  if (!key || !name) throw new Error(`${fileName}: the first ${fileName.endsWith(".dmn") ? "decision" : "process"} needs an id and a name`);
  return { key, name };
}

export async function readFlowFiles(dir: string): Promise<FlowFile[]> {
  const fileNames = (await readdir(dir)).filter((name) => name.endsWith(".bpmn") || name.endsWith(".dmn")).sort();
  return Promise.all(
    fileNames.map(async (fileName) => {
      const path = join(dir, fileName);
      const xml = await readFile(path, "utf8");
      return { path, fileName, xml, ...keyElement(fileName, xml) };
    }),
  );
}

function diagramFor(file: FlowFile, diagrams: DiagramSummary[]): DiagramSummary | undefined {
  const matches = diagrams.filter((diagram) => diagram.processkey === file.key || diagram.name === file.name);
  if (matches.length > 1) {
    throw new Error(`${file.fileName}: ${matches.length} Modeler diagrams match key "${file.key}" or name "${file.name}". Delete the extra ones in the Modeler.`);
  }
  const [match] = matches;
  if (match && match.processkey !== file.key) {
    throw new Error(`${file.fileName}: Modeler diagram "${match.name}" has key "${match.processkey}", the file has "${file.key}". Rename one of them.`);
  }
  return match;
}

async function committedXml(path: string): Promise<string | undefined> {
  const repoPath = relative((await promisify(execFile)("git", ["rev-parse", "--show-toplevel"])).stdout.trim(), path);
  return promisify(execFile)("git", ["show", `HEAD:${repoPath}`], { maxBuffer: 16 * 1024 * 1024 })
    .then((result) => result.stdout)
    .catch(() => undefined);
}

// The XML of the latest deployed version, or undefined when none is deployed.
async function deployedXml(engine: EngineClient, file: FlowFile): Promise<string | undefined> {
  const path = file.fileName.endsWith(".dmn") ? `/decision-definition/key/${file.key}/xml` : `/process-definition/key/${file.key}/xml`;
  const definition = await engine.get<{ bpmn20Xml?: string; dmnXml?: string }>(path).catch(() => undefined);
  return definition?.bpmn20Xml ?? definition?.dmnXml;
}

export type PushResult = { file: FlowFile; deployment?: Deployment };

// Uploads each file and deploys the ones that differ from the latest deployed
// version (the Modeler's deploy call always makes a new version). Refuses to
// overwrite a Modeler diagram whose XML is neither the file on disk nor the
// committed file: that diagram has edits that were never pulled.
export async function pushToModeler(client: ModelerClient, engine: EngineClient, dir: string, options: { force?: boolean } = {}): Promise<PushResult[]> {
  const files = await readFlowFiles(dir);
  const diagrams = await client.list();
  const plan = await Promise.all(files.map(async (file) => ({ file, diagram: diagramFor(file, diagrams) })));

  if (!options.force) {
    for (const { file, diagram } of plan) {
      if (!diagram) continue;
      const current = await client.xml(diagram.id);
      if (current !== file.xml && current !== (await committedXml(file.path))) {
        throw new Error(`${file.fileName}: the Modeler copy has edits that are not in the repo. Run "pnpm modeler:pull" first, or push with --force to discard them.`);
      }
    }
  }

  // Decisions first, so that the processes that call them find them.
  const ordered = [...plan].sort((a, b) => Number(a.file.fileName.endsWith(".bpmn")) - Number(b.file.fileName.endsWith(".bpmn")));
  const results: PushResult[] = [];
  for (const { file } of ordered) {
    const diagram = await client.upload(file.fileName, file.xml);
    const changed = (await deployedXml(engine, file)) !== file.xml;
    results.push({ file, deployment: changed ? await client.deploy(diagram.id) : undefined });
  }
  return results;
}

export type PullResult = { written: FlowFile[]; unchanged: FlowFile[]; notInModeler: FlowFile[]; notInRepo: DiagramSummary[] };

// Writes the Modeler's current XML over each file in the folder. Diagrams that
// have no file in the folder are reported, not written.
export async function pullFromModeler(client: ModelerClient, dir: string): Promise<PullResult> {
  const files = await readFlowFiles(dir);
  const diagrams = await client.list();
  const result: PullResult = { written: [], unchanged: [], notInModeler: [], notInRepo: [] };
  const matched = new Set<string>();

  for (const file of files) {
    const diagram = diagramFor(file, diagrams);
    if (!diagram) {
      result.notInModeler.push(file);
      continue;
    }
    matched.add(diagram.id);
    const xml = await client.xml(diagram.id);
    if (xml === file.xml) {
      result.unchanged.push(file);
    } else {
      await writeFile(file.path, xml);
      result.written.push(file);
    }
  }
  result.notInRepo = diagrams.filter((diagram) => !matched.has(diagram.id));
  return result;
}
