// Railway settings for the automation stack (spec #148): the CIB seven engine
// and the Worker. Apply with `railway config plan` / `railway config apply`
// from the repository root; see apps/automation-engine/README.md.
//
// Secret values never live here: preserve() keeps what the setup wizard set.
// Per-environment connection values (DB_URL, DB_USERNAME) are preserved too.

import { defineRailway, preserve, project, service } from "railway/iac";

export default defineRailway(() => {
  const engine = service("automation-engine", {
    healthcheck: "/engine-rest/engine",
    healthcheckTimeout: 300,
    replicas: { "us-west2": 1 },
    deploy: {
      restartPolicyType: "ON_FAILURE",
      restartPolicyMaxRetries: 10,
    },
    env: {
      PORT: "8080",
      TZ: "UTC",
      AI_AGENT_ENABLED: "false",
      JAVA_OPTS: "-Xmx1g",
      DB_DRIVER: "org.postgresql.Driver",
      DB_URL: preserve(),
      DB_USERNAME: preserve(),
      DB_PASSWORD: preserve(),
      CAMUNDA_BPM_ADMINUSER_ID: preserve(),
      CAMUNDA_BPM_ADMINUSER_PASSWORD: preserve(),
      CIBSEVEN_WEBCLIENT_AUTHENTICATION_JWTSECRET: preserve(),
    },
  });

  const worker = service("automation-worker", {
    replicas: { "us-west2": 1 },
    deploy: {
      restartPolicyType: "ON_FAILURE",
      restartPolicyMaxRetries: 10,
    },
    env: {
      ENGINE_REST_URL: "http://automation-engine.railway.internal:8080/engine-rest",
      ENGINE_WORKER_USER: "worker",
      ENGINE_WORKER_PASSWORD: preserve(),
    },
  });

  return project("vercellino-automation", { resources: [engine, worker] });
});
