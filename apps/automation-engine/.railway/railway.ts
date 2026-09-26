// Railway settings for the automation stack (spec #148): the CIB seven engine
// and the Worker. Apply with `railway config plan` / `railway config apply`
// from apps/automation-engine; see the README there.
//
// Secret values never live here: preserve() keeps what the setup wizard set.
// Per-environment connection values (DB_URL, DB_USERNAME) are preserved too.
//
// Restart policy: Railway's default (ON_FAILURE, 10 retries) is the one we
// want. Railway does not store a value equal to the default, so declaring it
// here shows as a change on every plan; it is left out on purpose. The same
// holds for the builder: each app has a Dockerfile at its root, which Railway
// uses on its own.

import { defineRailway, preserve, project, service } from "railway/iac";

export default defineRailway(() => {
  const engine = service("automation-engine", {
    healthcheck: "/engine-rest/engine",
    healthcheckTimeout: 300,
    replicas: { "us-west2": 1 },
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
    env: {
      ENGINE_REST_URL: "http://automation-engine.railway.internal:8080/engine-rest",
      ENGINE_WORKER_USER: "worker",
      ENGINE_WORKER_PASSWORD: preserve(),
    },
  });

  return project("jv-automation", { resources: [engine, worker] });
});
