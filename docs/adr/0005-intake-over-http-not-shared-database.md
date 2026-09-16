---
status: accepted
---

# Websites submit Assessments over HTTP, never by writing the CRM database

On 2026-09-16 the owner decided that a Web Property's server sends an
Assessment submission to one HTTP route on the CRM app, authenticated by a
long-lived bearer secret per caller. Each secret carries an environment, test
or live, so preview deployments can never create live submissions. The
request schema and a typed client function live in a shared workspace
package, so the website calls a function and the type checker spans both
apps.

## Considered options

- **Import the intake module and write to the CRM database directly.** No
  route, no secret, no HTTP contract. Rejected because the public website's
  deployment would hold write credentials to the customer database and the
  worker secret, every CRM migration would have to deploy in lockstep with
  both websites, and two apps would own the same tables' invariants.
- **HMAC request signing or short-lived machine tokens.** Rejected as extra
  moving parts for a private link over TLS between two apps in one repo.

## Consequences

- The CRM alone owns the database, migrations, the durable write, and queue
  dispatch. The website can only submit.
- The CRM requires email, first name, and last name on every submission.
  Phone is optional but required when consent includes SMS.
- Browser calls to the route are not supported: no CORS, no public keys.
