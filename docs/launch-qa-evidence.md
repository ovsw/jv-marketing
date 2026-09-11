# Launch QA evidence

Checked 2026-09-11 against `https://phxhomeloancom-2026.vercel.app` before domain cutover.

## Passed

- Unit suite: 68 files, 448 tests passed.
- Homepage and 20 linked internal routes returned HTTP 200.
- `/`, `/apply/`, `/contact/`, `/construction-to-permanent-loan/`, and `/how-to-apply-for-a-mortgage/` rendered in isolated Chromium without page errors.
- These five pages had no horizontal overflow at widths 390, 768, and 1440 pixels. Footer state was `ready` at each width.
- One desktop homepage image was inspected. Header, hero, images, and primary actions rendered correctly.
- Apply handoff uses `https://applynow.goluminate.com/homehub/signup/jimmy.vercellino@goluminate.com` with `target="_blank"` and `rel="noopener noreferrer"`.
- Apply education link returns HTTP 200.
- `/refinancing` resolves to `/refinance-home-loan/`; `/contact-me` resolves to `/contact/`.

## Fix before final verification

Published `development` dataset singleton `footer` holds these broken resource destinations as relative strings in `destination.external`. Use existing internal document references instead:

| Link key | HTTP 404 destination | Existing document ID | Working destination |
| --- | --- | --- | --- |
| conventional-loan | /conventional-loan/ | convenionalLoan | /phoenix-conventional-loan/ |
| fha-loan | /fha-loan/ | fhaLoan | /phoenix-fha-loan/ |
| jumbo-loan | /jumbo-loan/ | jumboLoan | /phoenix-jumbo-loan/ |
| mortgage-refinancing | /mortgage-refinancing/ | refinancing | /refinance-home-loan/ |
| mortgage-insurance | /what-is-mortgage-insurance-pmi/ | whatIsMortgageInsurance | /private-mortgage-insurance-pmi/ |

`footer.compliance.legalLinks` also points to `/terms` and `/privacy`, both HTTP 404. The published dataset slug search returned no terms or privacy page. The old live homepage HTML had no such links. Use approved legal destinations or remove these dead placeholders. Do not invent legal text.

Homepage metadata currently has `noindex, nofollow` and canonical `http://phxhomeloancom-2026.vercel.app/`. Parent agent owns the production environment correction.

## Limits

- Built-in footer smoke tests could not start because their configured Chrome binary `/opt/google/chrome/chrome` is not installed. The isolated checks above used installed `/usr/bin/chromium` and made no source changes.
- Lender Apply endpoint and `https://www.goluminate.com` returned HTTP 403 from this container. The Apply endpoint also failed in isolated Chromium. Shared user browser verification is needed to distinguish provider network blocking from a failed destination.
- No forms were submitted, and no messages were sent. Contact delivery remains unverified.
- No external data or settings were changed by this verification task.
- Recheck live domain, metadata, footer destinations, and conversion handoff after cutover.

## Product footer repair — completed

Confirmed both main-worktree configuration sources before writing: `frontend/.env.local` and `studio/.env` identify project `hv0545v9`, dataset `development`. Read the README Sanity sections and existing destination schema. The raw published footer was backed up to `/work/dev/phx/launch-backups/2026-09-11/footer-before-product-links.json` with mode 0600 in a mode 0700 directory. No draft footer was present.

A revision-guarded patch replaced only the five destination objects listed above with existing internal page references. Exact changed paths:

- `columns[_key=="resources"].links[_key=="conventional-loan"].destination`
- `columns[_key=="resources"].links[_key=="fha-loan"].destination`
- `columns[_key=="resources"].links[_key=="jumbo-loan"].destination`
- `columns[_key=="resources"].links[_key=="mortgage-refinancing"].destination`
- `columns[_key=="resources"].links[_key=="mortgage-insurance"].destination`

Before revision: `C4CeEnkfFkvlfFiLi0n0lU`. Mutation and independent readback revision: `ZnNF83LgjFSIfXhrAkynO9`. Full document comparison confirmed all other user fields were preserved. Draft remained absent. Readback verified at 2026-09-11T04:25:35Z. Private mutation evidence is in `footer-product-links-result.json` next to the backup.

Legal links were not changed. Final deployment verification remains required.

## Legal footer repair — completed

Parent agent verified the official lender homepage redirects from `www.goluminate.com` to `www.luminate.bank` and links to a readable policy at `https://www.luminate.bank/privacy-policy`.

A second private raw backup, `footer-before-legal-links.json`, preserves the published footer immediately before this repair. With revision guard `ZnNF83LgjFSIfXhrAkynO9`, changed only:

- `compliance.legalLinks[_key=="privacy"].label` to `Luminate Bank Privacy Policy`.
- `compliance.legalLinks[_key=="privacy"].destination.external` to `https://www.luminate.bank/privacy-policy`.
- Removed `compliance.legalLinks[_key=="terms"]`, which pointed to a nonexistent placeholder.

Mutation and independent readback revision: `g5ufq8nEg961JMp9LUNddT`. Full document comparison passed; no other user fields changed. No draft footer was present. Verified at 2026-09-11T04:26:16Z. Evidence: private `footer-legal-links-result.json` beside the backups.

## Production cutover verification — 2026-09-11 04:32 UTC

Parent reported production deployment `dpl_Hxr2fPnXnsChLHSyVygHNPauZ7Uh` ready. Checked HTTPS using `curl --resolve phxhomeloan.com:443:216.150.1.1` to bypass the local stale DNS cache while retaining certificate and hostname verification.

- HTTP 200: homepage, Apply, Contact, conventional/FHA/jumbo loan pages, refinance page, PMI page, Apply education page, robots.txt, and sitemap.xml.
- Homepage canonical: `https://phxhomeloan.com/`; robots metadata: `index, follow`.
- robots.txt permits crawling and lists `https://phxhomeloan.com/sitemap.xml`.
- Sitemap uses the production HTTPS origin.
- Rendered footer contains all five corrected product destinations and the official lender privacy policy. Dead Terms link is absent.
- Homepage signed OG image URL redirects to the image and returns HTTP 200, `image/png`, 618882 bytes when followed.
- `www.phxhomeloan.com` at the Vercel endpoint returns HTTP 308 to `https://phxhomeloan.com/` with a valid HTTPS connection.
- One ordinary DNS request still reached `99.83.231.61` and returned old content. This is a propagation limitation in the local resolver, not a failed Vercel-hosted public origin.

Apply provider decision remains with the user/parent agent. The existing application URL was not changed. Contact form delivery was not tested; email setup is outside this launch task.

## Final normal-DNS browser check — passed

A fresh isolated Chromium session loaded normal `https://phxhomeloan.com/` and `/apply/` without DNS overrides. Both returned HTTP 200 and rendered the new website. At 390 × 844 pixels, neither page had horizontal overflow or runtime page errors; both footers were `ready`.

Both pages had correct production canonical URLs and `index, follow` metadata. Both rendered all five corrected product links and the lender privacy policy; no Terms placeholder remained. Apply retained its current external destination with `_blank` and `noopener noreferrer`.

This supersedes the earlier local DNS-cache limitation: the new site is now reachable through normal DNS in a fresh browser session.
