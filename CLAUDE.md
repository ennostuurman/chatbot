# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000, Turbopack)
pnpm build        # Production build (runs DB migrations first)
pnpm check        # Lint & format check (Biome/Ultracite)
pnpm fix          # Auto-fix lint & format issues
pnpm prepare      # Install git hooks (lefthook)
pnpm typecheck    # TypeScript type checking (tsc --noEmit)
pnpm test         # Run Playwright E2E tests

# Database
pnpm db:generate  # Generate migrations from schema changes
pnpm db:migrate   # Apply pending migrations
pnpm db:studio    # Open Drizzle visual studio
```

Run a single Playwright test file: `pnpm test tests/e2e/<file>.test.ts`

A **lefthook** pre-commit hook runs `pnpm check` automatically before every commit. Use `pnpm fix` to auto-resolve most lint issues before committing.

## Architecture

This is a Next.js (App Router) AI chatbot with multi-model support, persistent chat history, file uploads, and authentication.

### Key Directories

- `app/(auth)/` — Auth routes (login, register, guest)
- `app/(chat)/` — Main chat interface + API routes
  - `app/(chat)/api/chat/` — Core streaming chat endpoint
  - `app/(chat)/actions.ts` — Server Actions (title gen, deletion, visibility)
- `lib/ai/` — AI/LLM layer
  - `models.ts` — Model definitions with capabilities (tools, vision, reasoning)
  - `providers.ts` — Provider routing (Vercel AI Gateway with fallback order)
  - `prompts.ts` — System prompts
  - `tools/` — AI tool definitions (create-document, edit-document, weather, etc.)
  - `entitlements.ts` — Which models are available per user type
- `lib/db/` — Database layer (Drizzle ORM + Neon Postgres)
  - `schema.ts` — Tables: User, Chat, Message_v2, Vote_v2, Document, Suggestion
  - `queries.ts` — All DB queries (always filtered by userId)
- `components/` — React components (shadcn/ui primitives + chat-specific UI)
- `hooks/` — Custom React hooks
- `artifacts/` — Artifact type definitions (text, code, image, sheet)
- `tests/e2e/` — Playwright E2E tests

### Chat API Flow

```
POST /api/chat
├─ Auth.js session check
├─ Rate limiting (IP-based)
├─ Zod message validation
├─ Resumable stream setup
├─ Tool execution (create-document, edit-document, get-weather, ...)
├─ Streaming response via Vercel AI SDK
└─ DB persistence (saveChat, saveMessages)
```

### AI Model Routing

Models have capability flags (tools, vision, reasoning) defined in `lib/ai/models.ts`. The Vercel AI Gateway routes requests with per-model fallback order. In test environments (`PLAYWRIGHT=True`), mock providers from `models.mock.ts` are used.

### Artifacts

AI can create inline artifacts (documents, code, spreadsheets, images) during chat. These are persisted to the `Document` table and rendered in a side panel. ProseMirror handles rich text editing; CodeMirror handles code editing.

### Authentication

Auth.js handles sessions with email/password, OAuth, and guest modes. All chat queries are scoped by `userId` — validate ownership before read/write operations.

## Code Conventions

- **Linter**: Biome via Ultracite. No `any`, no TypeScript enums, use `export type`/`import type` for types, no non-null assertions (`!`), `for...of` over `forEach`.
- **No `<img>`** — use Next.js `<Image>` component.
- **No `console`** — Ultracite flags this.
- **No `var`** — use `const`/`let`.
- **Zod** for runtime validation at API boundaries.
- **Server Components** by default; add `"use client"` only when needed for interactivity.
- **Env vars**: secrets go in `.env.local` (see `.env.example`). `POSTGRES_URL` required for DB.
- **Model IDs** follow `provider/model-name` format (e.g., `openai/gpt-oss-20b`).
