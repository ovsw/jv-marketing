import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { onTestFinished, test } from "vitest";

const script = fileURLToPath(new URL("./copy-worktree-env.mjs", import.meta.url));
const website = "apps/phx-website/.env.local";
const studio = "apps/phx-studio/.env";
const crm = "apps/crm/.env.local";

function fixture(sourceFiles, destinationFiles = {}) {
  const root = mkdtempSync(resolve(tmpdir(), "worktree-env-"));
  onTestFinished(() => rmSync(root, { recursive: true, force: true }));
  const source = resolve(root, "source checkout");
  const destination = resolve(root, "destination worktree");
  for (const [directory, files] of [[source, sourceFiles], [destination, destinationFiles]]) {
    mkdirSync(directory, { recursive: true });
    for (const [path, content] of Object.entries(files)) {
      mkdirSync(dirname(resolve(directory, path)), { recursive: true });
      writeFileSync(resolve(directory, path), content);
    }
  }
  return {
    run: () => spawnSync(process.execPath, [script], {
      cwd: destination,
      env: { ...process.env, T3CODE_PROJECT_ROOT: source },
      encoding: "utf8",
    }),
    read: (path) => readFileSync(resolve(destination, path), "utf8"),
    directory: (path) => mkdirSync(resolve(destination, path), { recursive: true }),
  };
}

test("T3 setup copies ignored env files left in the pre-monorepo directories", () => {
  const setup = fixture({ "frontend/.env.local": "website", "studio/.env": "studio" });
  const result = setup.run();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(setup.read(website), "website");
  assert.equal(setup.read(studio), "studio");
});

test("T3 setup prefers current paths and includes CRM and Studio local overrides", () => {
  const setup = fixture({
    [website]: "current website", [studio]: "current studio", [crm]: "crm",
    "frontend/.env.local": "old website", "studio/.env": "old studio",
    "apps/phx-studio/.env.local": "local studio",
  });
  const result = setup.run();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(setup.read(website), "current website");
  assert.equal(setup.read(studio), "current studio");
  assert.equal(setup.read(crm), "crm");
  assert.equal(setup.read("apps/phx-studio/.env.local"), "local studio");
});

test("rerunning setup keeps existing destination env files even without source copies", () => {
  const setup = fixture({}, { [website]: "custom website", [studio]: "custom studio" });
  const result = setup.run();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(setup.read(website), "custom website");
  assert.equal(setup.read(studio), "custom studio");
});

test("setup does not replace destination config with source config", () => {
  const setup = fixture(
    { [website]: "source website", [studio]: "source studio", [crm]: "source crm" },
    { [website]: "custom website", [studio]: "custom studio", [crm]: "custom crm" },
  );
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const result = setup.run();
    assert.equal(result.status, 0, result.stderr);
    assert.equal(setup.read(website), "custom website");
    assert.equal(setup.read(studio), "custom studio");
    assert.equal(setup.read(crm), "custom crm");
  }
});

test("missing required env files fail before copying any files", () => {
  const setup = fixture({ [website]: "website" });
  const result = setup.run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Missing source file/);
  assert.throws(() => setup.read(website), { code: "ENOENT" });
});

test("a destination directory fails before any env files are copied", () => {
  const setup = fixture({ [website]: "website", [studio]: "studio" });
  setup.directory(studio);
  const result = setup.run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Existing destination is not a regular file/);
  assert.throws(() => setup.read(website), { code: "ENOENT" });
});

test("PHX setup succeeds when the source has no CRM configuration", () => {
  const setup = fixture({ [website]: "website", [studio]: "studio" });
  const result = setup.run();
  assert.equal(result.status, 0, result.stderr);
  assert.throws(() => setup.read(crm), { code: "ENOENT" });
});
