# Launch status

Updated: 2026-09-11. Status: complete. The new website is live and verified.

## Goal and authority

The user authorized end-to-end launch of PHXHomeLoan.com, transfer of the Vercel project to the new paid Studio ROVST team (`studio-rovst`), and cleanup of redundant worktrees and branches. The new website must be live and verified. Email setup is a separate task and is not a launch blocker. The user corrected a dictation error: loss of the old `connect.phxhomeloan.com` page is acceptable. It does not block launch; no replacement is required.

Work now takes place in `/work/dev/phx/phxhomeloancom-2026` on `main`. The initial checklist was copied here and byte-verified before cleanup.

## Plan

1. [done] Verify destination team and transfer the existing Vercel project without losing its configuration.
2. [done] Set production origin/indexability, keep preview non-indexable, confirm Sanity dataset and Studio preview.
3. [done] Check key site paths, Apply handoff, contact behavior, and release checks. A read-only verification agent owns `docs/launch-qa-evidence.md`.
4. [done] Attach apex and www domains; save current DNS; change only website records to Vercel.
5. [done] Verify HTTPS, redirects, content, metadata, sitemap, images, and browser behavior on the public domain.
6. [done] Connect loss accepted; email remains out of scope.
7. [done] Record final evidence; preserve useful files and remove redundant local worktrees/branches.

## Decisions

- Preserve the apex canonical origin: `https://phxhomeloan.com`; redirect www to it.
- Keep reviewed Sanity dataset `development` for launch. Do not migrate data merely to change its name.
- Keep existing DNS-only web mode for the initial Vercel cutover.
- Do not send Basecamp messages or test form messages without explicit authorization for those messages.
- Original worktree was removed only after useful files and local state were preserved and verified.

## Evidence and recovery

- Initial release commit: `66aa587499fb9f14aabe8342147a4c2e6df3326d`.
- Existing Vercel project: `prj_40Q4MyIXzjMEYPkymnAESZhIGzJJ`, `phxhomeloancom-2026`, source team `ovi-savescus-projects`.
- User explicitly confirmed destination `studio-rovst` (Studio ROVST). API confirms active Pro plan and OWNER membership. DelGrossos was rejected and has not been changed.
- Original website DNS: apex A `99.83.231.61`, A `75.2.60.5`; www CNAME `phxhomeloan.com`, DNS-only.
- Keep old Netlify hosting available for rollback. Restore web records only if needed; do not revert nameservers to the inaccessible account.
- Nameservers: `paloma.ns.cloudflare.com`, `tosana.ns.cloudflare.com`.
- Initial readiness evidence is in `docs/launch-checklist.md`.

## Pending important information

- None currently. Destination team and connect scope are confirmed.

## Progress log

- Project transfer to Studio ROVST complete; all 11 environment keys retained, Git main link intact.
- Production SITE_URL is https://phxhomeloan.com and SITE_ENV is production; Preview has a separate non-indexable setting.
- Both public domains added to Vercel; www redirects to apex with 308.
- Sanity CORS added for both public origins. Hosted Studio deployed with production preview URL.
- Release gate rerun passed all lanes. 448 unit tests passed.
- Footer product links repaired with internal references; official lender privacy linked; dead placeholder Terms link removed. Revision-guarded backups saved.
- Production build dpl_Hxr2fPnXnsChLHSyVygHNPauZ7Uh READY; both public domains aliased.
- All nine current DNS records saved privately in /work/dev/phx/launch-backups/2026-09-11/dns-before.json.
- Vercel recommends apex A 216.150.1.1 and 216.150.16.1; www CNAME e95ee93ca31627b6.vercel-dns-017.com.
- Application destination question sent: official lender selector now uses Tidalwave, existing link blocked in browser; no application data submitted.

- DNS switch saved in Cloudflare: both apex A records now Vercel targets and www CNAME now Vercel target. Vercel reports misconfigured=false for both. TLS issuance pending; public resolver here still briefly serves old apex.

## Public verification

- Normal public HTTPS requests now reach Vercel. Google and Cloudflare public DNS resolvers both return the new apex targets.
- The shared Chromium browser renders the new homepage (title: Phoenix Mortgage Lender | The Vercellino Team) and new Apply page.
- Key pages, robots, sitemap, corrected footer destinations, and signed social image return successful responses. Public canonical origin is HTTPS phxhomeloan.com and indexability is enabled.
- www sends a 308 redirect to apex and preserves the path/query. HTTPS certificate issuance succeeded for both hosts.
- Main checkout is linked locally to `studio-rovst/phxhomeloancom-2026`.
- Three redundant branches were safely deleted after confirming they point to the release commit.
- Retired worktree env files and initial checklist were privately backed up and byte-verified. Dependency folders contain reinstallable packages, not new source work.

## Remaining follow-up, outside the live-site definition of done

- Keep the existing Apply link for now. The official lender selector points Jimmy to `https://goluminate.tidalwave.ai/signup/itdec0`, but its application was blank in this browser. The existing direct Apply link was blocked by the browser. The user has been asked which destination to use; no destination change was made without that answer.
- Contact UI and code were inspected, but real Formspark delivery was not tested because no test message was authorized. Existing phone, email, and booking paths remain available. New domain mailbox setup is a separate task.
- Full editorial acceptance under GitHub #73/#79 and Search Console follow-up remain separate; the focused launch checks do not claim to close their full acceptance criteria. No GitHub/Basecamp issue was marked complete or messaged.
- Existing connect records remain as found. Restoration is not a launch requirement, per the user's corrected instruction.
- The old checklist is historical evidence, not current deployment status.

- Final normal-DNS isolated Chromium check passed for homepage and Apply: HTTP 200, correct canonicals/indexability, repaired footer, no mobile overflow, no runtime errors.
- Worktree cleanup complete: only /work/dev/phx/phxhomeloancom-2026 on main remains. All four redundant local branches removed. Backups remain outside the repository.
