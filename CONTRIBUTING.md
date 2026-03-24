# Contributing

## Prerequisites

- **Node.js** — use the version in [`.nvmrc`](./.nvmrc) (e.g. `nvm use`).
- **pnpm** — version pinned in [`package.json`](./package.json) (`packageManager` field). Install via [Corepack](https://nodejs.org/api/corepack.html) or the pnpm docs.

## Local setup

1. Copy environment variables from `.env.example` to `.env.local` and fill in values (never commit secrets).
2. `pnpm install`
3. `pnpm db:migrate` (or follow `README.md` for your database)
4. `pnpm dev` — app at [http://localhost:3000](http://localhost:3000)

## Branching and reviews

Use short-lived branches and open pull requests against the default branch. Request review from code owners when [`.github/CODEOWNERS`](./.github/CODEOWNERS) is configured for your team.

**Branch protection (recommended for shared repos):** require status checks to pass (lint + tests), require at least one approval where appropriate, and restrict who can push to the default branch. Configure these in the GitHub repository settings; optionally document team-specific rules here.

## Coding standards

- TypeScript and React patterns should match the existing codebase.
- Run **`pnpm check`** before pushing; use **`pnpm fix`** to apply auto-fixes where possible.
- Follow accessibility and style rules described in [`.cursor/rules/ultracite.mdc`](./.cursor/rules/ultracite.mdc) (Ultracite / Biome).

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build (includes DB migrate step) |
| `pnpm check` | Lint / format check (Ultracite) |
| `pnpm typecheck` | TypeScript `tsc --noEmit` |
| `pnpm fix` | Auto-fix lint / format |
| `pnpm test` | Playwright E2E tests |

Database helpers: `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:studio`, etc. (see `package.json`).

## Agent and automation contributors

If you use AI agents or automation: keep changes minimal, run `pnpm check` and `pnpm test` when you touch behavior or dependencies, and do not commit `.env.local` or API keys. See [`AGENTS.md`](./AGENTS.md) for project-specific agent guidance.
