# Architecture overview

This app is a **Next.js App Router** project. UI lives under `app/`; shared components under `components/`; server utilities and AI/database code under `lib/`.

**Data:** PostgreSQL via Drizzle ORM (`lib/db/`). Migrations run as part of `pnpm build` (see `package.json`).

**Auth:** Auth.js (`next-auth`) wires session handling for protected routes and chat ownership where applicable.

**AI:** The Vercel AI SDK (`ai`, `@ai-sdk/react`) powers streaming chat. Model and provider routing are configured in `lib/ai/` (see `README.md` for gateway vs direct provider setup).

**Tests:** End-to-end checks use Playwright (`playwright.config.ts`, `tests/`). A dev server is started automatically for those runs.

For day-to-day workflow and CI expectations, see `CONTRIBUTING.md`.
