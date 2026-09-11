# PHXHomeLoan.com launch checklist

Initial readiness snapshot: 2026-09-11, before launch authorization. This historical checklist records the starting state. See [launch status](launch-status.md) and [QA evidence](launch-qa-evidence.md) for the executed plan, user scope corrections, and verified live result. Email setup and restoration of the old connect page were explicitly excluded from launch.

## Observed state

- Local `main`, this worktree, and fetched `origin/main` point to `66aa587` (PR #90). Both worktrees were clean before this document was added. All listed local branches point to that commit. There are no open PRs. No local code integration was found to be pending.
- Vercel has successfully deployed that commit. The project is `ovi-savescus-projects/phxhomeloancom-2026`, with root directory `frontend/`, Node 24, Next.js, and production branch `main`.
- Only `phxhomeloancom-2026.vercel.app` is attached to the Vercel project. Neither public domain is attached yet.
- The Vercel home, Apply, and Contact pages return 200. Their HTML has `noindex, nofollow` and canonical URLs under `http://phxhomeloancom-2026.vercel.app`. Its sitemap and robots sitemap reference also use that temporary HTTP address.
- Local frontend and Studio use Sanity project `hv0545v9`, dataset `development`. The deployed site loads assets from that dataset; CI also selects it. This is where the reviewed content work has been recorded. A dataset named `production` must not be assumed to contain the same content.
- The latest [release gate](https://github.com/ovsw/phxhomeloancom-2026/actions/runs/33837241507) failed during pnpm installation with an npm registry 504 response. This does not establish a code defect. The corresponding PR gate passed, and Vercel deployed the merge successfully. A green gate for the release commit is still required.
- GoDaddy shows custom nameservers `paloma.ns.cloudflare.com` and `tosana.ns.cloudflare.com`. Google's DNS resolver returns the same pair. Cloudflare shows the zone as active. Other resolver caches may still expire later.
- The public apex serves the old Netlify site. `www` redirects to the apex. The imported web records remain DNS-only: apex A records `99.83.231.61` and `75.2.60.5`, and `www` CNAME to `phxhomeloan.com`.
- The new zone contains nine records. `connect` has A records `104.21.85.121` and `172.67.205.153`. Chrome shows **Error 1000: DNS points to prohibited IP**. A command-line request instead received Cloudflare error 1010; the browser confirms the visitor-facing DNS failure.
- The imported zone has an MX record at `mail.phxhomeloan.com`, but none at the apex. It has SPF records at `mail` and the apex, and a DMARC record. No DKIM record appears in the nine-record table. This inventory does not establish which mail services are required.
- Google's DS query returned no DS answer. No stale parent DS record was observed in that check.

## 1. Repair and verify services affected by the nameserver move

- [ ] Recover the real origin hostname or IP for `connect.phxhomeloan.com` from its hosting provider or previous administrator. Replace the copied proxy IPs with the provider's supported DNS records. Do not guess the origin or enable proxying as a substitute.
- [ ] Verify the connect landing page and its conversion flow in a browser. The [Basecamp launch task](https://app.basecamp.com/6230954/buckets/47793039/todos/10272713955) explicitly identifies this service as one to preserve.
- [ ] Confirm whether any `@phxhomeloan.com` mailbox receives mail. If so, obtain and restore its actual MX and verification records. The `mail` subdomain MX does not route mail addressed to the apex domain.
- [ ] Compare the new zone with mail and other service providers' required records, including DKIM selectors and verification TXT/CNAME records. Automatic discovery is not a complete zone export.
- [ ] Verify needed inbound and outbound mail with an authorized test. Preserve unrelated service records during the website switch.
- [ ] Export the new zone and record the current web targets before further DNS changes.

## 2. Prepare the release and content

- [ ] Verify and finish [#73: Apply handoff](https://github.com/ovsw/phxhomeloancom-2026/issues/73). PR #90 is already merged; first check which acceptance criteria it satisfies. The deployed Apply page already links to Luminate's application. Do not rebuild the short page from older issue wording.
- [ ] Complete [#79: cross-site QA](https://github.com/ovsw/phxhomeloancom-2026/issues/79), using the [factual source ledger](editorial/issue-72-factual-source-ledger.md). Cover product pages, Apply, authority and award content, mobile layout, keyboard access, FAQs, metadata, and links. The current CI browser smoke test covers the footer, not this full acceptance pass.
- [ ] Check internal links across the loan pages and supporting posts. [The Basecamp internal-link task](https://app.basecamp.com/6230954/buckets/47793039/todos/10024741508) remains open.
- [ ] Compare old site URLs with new routes and Sanity redirects, including legacy assistance, construction, and award URLs. Preserve useful URLs, use deliberate permanent redirects, and verify intentional 404/410 responses. Do not redirect every removed URL to the homepage.
- [ ] Back up the approved Sanity dataset. Check published records and overriding drafts. Confirm the exact dataset used by both the production frontend and hosted Studio.
- [ ] Either launch with the existing reviewed `development` dataset or perform a separate backed-up migration to a production dataset. A rename or empty-dataset switch is not required to use the public domain. If the existing dataset is shared, future experimental content changes can affect the live site.
- [ ] Rerun the failed release checks and require all lanes to pass for the chosen release commit. Recheck the production build after production environment changes.

The automation Tech Demo issues (#40 and #53–59) are separate scope; no dependency on them was found for this website launch. New videos remain a Basecamp improvement task. Confirm any specific video requirement during final content acceptance rather than blocking launch on every planned video.

## 3. Set production configuration

Recommended canonical origin: `https://phxhomeloan.com`, preserving the old site's apex convention. Redirect `www` to it, preserving paths and query strings.

- [ ] Add `phxhomeloan.com` and `www.phxhomeloan.com` to the existing Vercel project. Complete any ownership verification and record the exact DNS targets Vercel supplies.
- [ ] Set **Production** `NEXT_PUBLIC_SITE_URL=https://phxhomeloan.com` and `NEXT_PUBLIC_SITE_ENV=production`.
- [ ] Keep preview deployments non-indexable. Current Vercel environment entries are shared between Production and Preview; split their scope where values differ.
- [ ] Confirm `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_STUDIO_URL`, API version, `SANITY_API_READ_TOKEN`, and `OG_IMAGE_SECRET` for production. Keep the real OG secret server-only; do not use the CI placeholder.
- [ ] Confirm `YOUTUBE_API_KEY` if video structured data is required. The code omits video schema when the key is absent.
- [ ] Add the exact live frontend and hosted Studio origins to Sanity CORS as required by preview and live content. Set hosted Studio `SANITY_STUDIO_PREVIEW_URL=https://phxhomeloan.com`, then build and deploy Studio with the chosen dataset.
- [ ] Redeploy the frontend after environment changes. Public environment values and redirects are used during the build; changing DNS alone does not update them. Sanity redirect changes need a fresh build.
- [ ] Verify social images, canonicals, sitemap, indexability, and Studio Presentation against the final configuration.

## 4. Verify contact and application paths

- [ ] Verify contact-form delivery to the intended inbox and the `/contact/thanks/` success page with an authorized test message. Confirm validation and failure feedback.
- [ ] Verify access to the Formspark form `a0or7TBtU`, its recipient, and service limits. The contact action sends to Formspark; it does not use the Resend variables shown in the old env example.
- [ ] Verify Microsoft Bookings opens the correct advisor calendar, and telephone/email links use the correct destinations.
- [ ] Verify Apply opens `https://applynow.goluminate.com/homehub/signup/jimmy.vercellino@goluminate.com` with the intended safe new-tab behavior. Do not submit a real mortgage application as a test.
- [ ] If newsletter signup is exposed, configure and test `RESEND_API_KEY` and `RESEND_AUDIENCE_ID`. Neither key was listed in Vercel's current environment inventory. The newsletter API requires both; this is separate from the contact form.
- [ ] Confirm privacy, lender disclosures, NMLS information, and any required analytics/conversion tracking. Test only the services actually used at launch.

## 5. Switch website traffic

- [ ] Proceed only after the preceding release and service checks pass.
- [ ] Replace the old apex web records and update `www` with the exact Vercel-provided records. Do not mix old Netlify and new Vercel targets. Leave unrelated mail and connect records intact.
- [ ] Keep web records DNS-only for the initial Vercel launch, matching their current mode. This avoids adding another proxy/cache layer during the switch. If Cloudflare proxying is later enabled, verify Full (strict) TLS and compatible cache behavior; do not cache draft or personalized responses.
- [ ] Verify valid HTTPS, apex/www redirects, and HTTP-to-HTTPS behavior on both hosts.
- [ ] Confirm the final release serves the homepage, product pages, Apply, Contact, blog, images, and legacy redirects through the public domain.
- [ ] Confirm public indexable pages have no unintended `noindex`, and sitemap/canonical URLs use only the chosen HTTPS origin. Intentional noindex pages should remain excluded.
- [ ] Verify Search Console ownership and submit the final sitemap. Monitor page errors, contact delivery, redirects, and search coverage after launch.

## Rollback

- Keep the old Netlify site available through the launch window.
- Record the Vercel release URL and deployment ID before launch. For a code regression, restore the previous known-good Vercel deployment.
- If the new website cannot serve traffic, restore the recorded apex A records and `www` CNAME in the new Cloudflare zone, provided the old Netlify site remains available. DNS cache expiry means rollback is not immediate everywhere.
- Do not roll back nameservers to an account you cannot control. A website rollback does not repair the separate connect or mail configuration.
- Keep a dataset export before content migration; a Vercel code rollback does not undo Sanity content changes.

## Documentation corrections to include in launch preparation

- README still describes `.github/workflows/deploy-studio.yml` and `master`/`develop`. The checked-in workflow directory contains only `release-gate.yml`, targeting `main`; establish and document the actual Studio deployment process.
- Align README and env examples with Formspark contact handling and the separate optional Resend newsletter configuration.

## Scope of this check

Inspected Git/worktree state, open GitHub issues and PRs, CI results, Vercel project/domain/environment-key inventory, source configuration, Basecamp open tasks, public HTTP responses, DNS responses, and GoDaddy/Cloudflare browser pages. No production settings, DNS records, CMS records, tasks, or messages were changed. No form was submitted. Full cross-site QA, mail delivery, provider ownership, Sanity CORS, and the final production configuration remain unverified. No fresh build or test suite was run for this document-only assessment.
