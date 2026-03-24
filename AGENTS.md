# AGENTS Guide

## Project Overview

This repository contains a Next.js chatbot application template built on the App Router and AI SDK.  
It supports multi-model AI routing, chat persistence, authentication, and local/end-to-end development workflows.

## Tech Stack

- Framework: Next.js 16 + React 19 + TypeScript
- AI: `ai` SDK (`@ai-sdk/react`, provider integrations)
- Auth: `next-auth` (Auth.js)
- Database: Drizzle ORM + Drizzle Kit + Postgres (`postgres`)
- UI: Tailwind CSS + Radix UI + shadcn-style component setup
- Testing: Playwright (`@playwright/test`)
- Lint/format: Ultracite + Biome
- Package manager: `pnpm`

## Coding Standards

- Follow repository rules in `.cursor/rules/ultracite.mdc`.
- Prefer strict TypeScript and avoid `any` unless unavoidable.
- Use existing code patterns before introducing new abstractions.
- Keep components/hooks focused and colocate logic with the feature.
- Do not hardcode secrets; use environment variables from `.env.local`.
- For style/lint fixes, prefer project scripts over manual formatting.

## Test and Lint Commands

- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev`
- Build app: `pnpm build`
- Start production build: `pnpm start`
- Check lint/format rules: `pnpm check`
- Typecheck (TypeScript): `pnpm typecheck`
- Auto-fix lint/format issues: `pnpm fix`
- Run e2e tests: `pnpm test`

### Database Commands

- Generate migrations: `pnpm db:generate`
- Apply migrations: `pnpm db:migrate`
- Push schema: `pnpm db:push`
- Pull schema: `pnpm db:pull`
- Validate schema: `pnpm db:check`
- Open Drizzle Studio: `pnpm db:studio`

## Agent Do and Don't

- Do make minimal, targeted changes that match existing patterns.
- Do run relevant checks/tests after substantive code edits.
- Do update docs when behavior, commands, or setup changes.
- Do call out assumptions and potential risks in responses.
- Do avoid touching unrelated files in a dirty working tree.

- Don't commit secrets or modify `.env.local` values in commits.
- Don't introduce new dependencies unless required and justified.
- Don't refactor broadly when a scoped fix is sufficient.
- Don't bypass lint/type/test failures without explanation.
- Don't use destructive git commands (for example hard reset) unless explicitly requested.
