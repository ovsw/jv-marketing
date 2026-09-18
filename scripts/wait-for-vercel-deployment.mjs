// Resolve the Vercel deployment URL for a commit from the GitHub Deployments
// API (populated by the Vercel GitHub integration) and wait until it succeeds.
// Prints the URL on stdout so a workflow step can capture it.
//
// Env: GITHUB_REPOSITORY, GITHUB_TOKEN, DEPLOY_SHA, DEPLOY_ENVIRONMENT,
// DEPLOY_STATUS_CONTEXT
// (the exact GitHub environment, e.g. "Production – phxhomeloancom-2026"),
// optional DEPLOY_TIMEOUT_MS (default 10 min).

import { spawnSync } from "node:child_process";

const { GITHUB_REPOSITORY, GITHUB_TOKEN, DEPLOY_SHA, DEPLOY_ENVIRONMENT, DEPLOY_STATUS_CONTEXT } =
  process.env;
const timeoutMs = Number(process.env.DEPLOY_TIMEOUT_MS ?? 10 * 60 * 1000);
const pollMs = 10_000;

for (const [name, value] of Object.entries({
  GITHUB_REPOSITORY,
  GITHUB_TOKEN,
  DEPLOY_SHA,
  DEPLOY_ENVIRONMENT,
  DEPLOY_STATUS_CONTEXT,
})) {
  if (!value) throw new Error(`Missing ${name}`);
}

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  "X-GitHub-Api-Version": "2022-11-28",
};

async function github(path) {
  const response = await fetch(`https://api.github.com/repos/${GITHUB_REPOSITORY}${path}`, { headers });
  if (!response.ok) throw new Error(`GitHub API ${path} -> ${response.status}`);
  return response.json();
}

async function findDeployment() {
  const query = new URLSearchParams({ sha: DEPLOY_SHA, environment: DEPLOY_ENVIRONMENT, per_page: "5" });
  const deployments = await github(`/deployments?${query}`);
  for (const deployment of deployments) {
    const statuses = await github(`/deployments/${deployment.id}/statuses?per_page=1`);
    const latest = statuses[0];
    if (!latest) continue;
    if (latest.state === "success") return { url: latest.environment_url || latest.target_url };
    if (["failure", "error"].includes(latest.state)) {
      throw new Error(`Vercel ${DEPLOY_ENVIRONMENT} deployment for ${DEPLOY_SHA} ended with state "${latest.state}"`);
    }
  }
  return null;
}

async function ignoredBuild() {
  const combined = await github(`/commits/${DEPLOY_SHA}/status`);
  const status = combined.statuses.find(({ context }) => context === DEPLOY_STATUS_CONTEXT);
  return status?.state === "success" && /Ignored Build Step/i.test(status.description ?? "");
}

function isAncestor(sha) {
  return spawnSync("git", ["merge-base", "--is-ancestor", sha, DEPLOY_SHA]).status === 0;
}

async function findSuccessfulAncestorDeployment() {
  const query = new URLSearchParams({ environment: DEPLOY_ENVIRONMENT, per_page: "25" });
  const deployments = await github(`/deployments?${query}`);
  for (const deployment of deployments) {
    if (!isAncestor(deployment.sha)) continue;
    const statuses = await github(`/deployments/${deployment.id}/statuses?per_page=1`);
    const latest = statuses[0];
    if (latest?.state === "success") {
      return { url: latest.environment_url || latest.target_url, sha: deployment.sha };
    }
  }
  return null;
}

const deadline = Date.now() + timeoutMs;
for (;;) {
  const found = await findDeployment();
  if (found) {
    console.error(`Vercel ${DEPLOY_ENVIRONMENT} deployment ready: ${found.url}`);
    console.log(found.url);
    break;
  }
  if (await ignoredBuild()) {
    const ancestor = await findSuccessfulAncestorDeployment();
    if (!ancestor) {
      throw new Error(
        `Vercel skipped ${DEPLOY_STATUS_CONTEXT}, but no successful ancestor deployment exists`,
      );
    }
    console.error(
      `Vercel skipped ${DEPLOY_STATUS_CONTEXT}; reusing successful ancestor ${ancestor.sha}`,
    );
    console.log(ancestor.url);
    break;
  }
  if (Date.now() > deadline) {
    throw new Error(`Timed out after ${timeoutMs}ms waiting for Vercel ${DEPLOY_ENVIRONMENT} deployment of ${DEPLOY_SHA}`);
  }
  console.error(`Waiting for Vercel ${DEPLOY_ENVIRONMENT} deployment of ${DEPLOY_SHA.slice(0, 7)}...`);
  await new Promise((r) => setTimeout(r, pollMs));
}
