# macpro.kr boards

The notice board is public. All purchase inquiries are private; list endpoints return only receipt, date and status. The home page embeds `BoardSummary`, a reusable latest-post component, after the purchase process. It refreshes on focus and every 30 seconds while visible.

## Infrastructure

- Neon project: `ancient-waterfall-97601019` (`macpro-board`, Singapore)
- Production branch: `br-round-night-b3qk1cdj`, database `macpro`
- Isolated QA branch: `br-raspy-hat-b31bdktf`
- Neon Auth: managed Better Auth, production trusted domains `https://www.macpro.kr` and `https://macpro.kr`
- Schema: `001-boards.sql`, already applied to production and inherited by QA.

## Vercel configuration

The deployed application requires these **server-only** variables:

| Variable | Value source |
| --- | --- |
| DATABASE_URL | Neon Console → production branch → Connect → pooled connection for macpro |
| NEON_AUTH_BASE_URL | Neon Console → production branch → Auth → URL |
| NEON_AUTH_COOKIE_SECRET | New cryptographically random secret, at least 32 characters |
| BOARD_SECRET | A different random secret, at least 32 characters |
| BOARD_ADMIN_EMAILS | `chlpjy@naver.com`; comma-separated if explicitly granting additional administrators |

Production Auth URL: `https://ep-polished-truth-b3y7ehhc.neonauth.c-4.ap-southeast-1.aws.neon.tech/macpro/auth`

Use distinct QA/preview credentials and the QA branch for preview deployments. Do not expose production inquiry data to a preview. Secrets must not be committed. For local work use ignored `.env.local`; preserve existing values when pulling.

## Administrator activation

Visit `/admin/login`, select initial account registration, and register the configured administrator email with a password chosen by the owner. Request the email verification OTP and verify it, then sign in. The server requires BOTH an authenticated, verified email AND membership in `BOARD_ADMIN_EMAILS`. Registering a different account never grants board access. A reset OTP flow is available on the same page. Email delivery and verification require the owner's mailbox and were not exercised for the production administrator.

Managed Auth currently uses shared SMTP for OTP. For production email delivery configure custom SMTP in Neon Console according to Neon's production checklist. Never change `emailVerified` directly on the production administrator to bypass ownership verification.

## Notice management

`/admin` supports title, plain-text body, arbitrary valid display date, a nonnegative integer view count, pinning and publication. Unchecking publication hides a notice from public lists, details and the home summary. Visits increment the count once per browser per UTC day, only after opening the detail page. Opening a notice can therefore add one to a manually set count. Saves invalidate relevant paths; summary endpoints are uncached.

## Inquiry management and abuse prevention

Visitors receive a random receipt and set a password (8+ characters). Passwords are salted scrypt hashes; raw passwords are not stored. Unlocks issue a signed HttpOnly grant scoped to that one receipt for 30 minutes. Private responses are `private, no-store`. Administrator replies update status automatically. Page metadata for inquiries/admin and API response headers prevent indexing of private contents.

A server-stored, browser-bound maths challenge expires after ten minutes and is consumed once. A hidden honeypot, 5 submissions/hour/IP, 10 password attempts/15 minutes/receipt/IP plus a global unlock limit, and same-origin mutation checks supplement it. In Vercel, abuse limits use Vercel's trusted forwarded IP; missing IPs share a conservative bucket. The IP is HMAC-hashed, never stored in raw form. A simple maths challenge cannot guarantee all bot submissions are blocked.

Both administrator and public lists paginate 20 items. No uploads are included; photographs are sent through the existing Kakao consultation link.

## Validation and pending rollout

Run `npm run build` (Next.js 16 / webpack) and `npx tsc --noEmit`. Functional QA must target the isolated QA branch. Do not merge or publish until Vercel production/preview environment variables are configured. The current Vercel connector lacks access to the `han-2272` team; GitHub feature-branch code can be reviewed independently.
