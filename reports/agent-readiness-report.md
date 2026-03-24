# Agent readiness report

**File:** `reports/agent-readiness-report.md` (canonical snapshot for this repo.)

Terminal capture from `npx @kodus/agent-readiness .` in `/home/enno/Projects/chatbot` (latest run in session, **Level 2 — Guided**, overall **69%**).

```
enno@lenovo:~/Projects/chatbot$ npx @kodus/agent-readiness .

+------------------------------------------+
|                                          |
|          KODUS AGENT READINESS           |
|   chatbot  /home/enno/Projects/chatbot   |
|                                          |
|              Project: node               |
|                                          |
+------------------------------------------+

+--------------------------------------------+
|                                            |
|             LEVEL 2  -  Guided             |
|      3 more criteria to reach Level 3      |
|                                            |
|  Overall Score  ##############------  69%  |
|                                            |
+--------------------------------------------+

  +- PILLAR SUMMARY - - - - - - - - - - - - - - - - - - - -

+------------------------------+------------------------+--------+------------+
| Pillar                       | Score                  | %      | Pass/Total |
+------------------------------+------------------------+--------+------------+
| 🎨  Style & Linting          | ###########-------     | 60%    | 3/5        |
+------------------------------+------------------------+--------+------------+
| 🧪  Testing                  | ###########-------     | 60%    | 3/5        |
+------------------------------+------------------------+--------+------------+
| 📚  Documentation            | ###############---     | 83%    | 5/6        |
+------------------------------+------------------------+--------+------------+
| 🔧  Developer Environment    | ##############----     | 80%    | 4/5        |
+------------------------------+------------------------+--------+------------+
| ⚙️  CI/CD                    | ###############---     | 83%    | 5/6        |
+------------------------------+------------------------+--------+------------+
| 💚  Code Health              | ######------------     | 33%    | 1/3        |
+------------------------------+------------------------+--------+------------+
| 🔒  Security                 | ###########-------     | 60%    | 3/5        |
+------------------------------+------------------------+--------+------------+

  +- DETAILED BREAKDOWN - - - - - - - - - - - - - - - - - - -

  🎨  Style & Linting  ---  3/6 passing

    *  Linter configuration found: biome.jsonc
    *  Biome formatter configuration found in biome.jsonc
    x  No type checker with strict mode found.
       Enable TypeScript strict mode, or add mypy/pyright for Python projects.
    x  No pre-commit hooks found.
       Add Husky, Lefthook, or pre-commit to run checks before commits.
    *  .editorconfig found
    o  Requires --ai flag  (requires --ai)

  --------------------------------------------------------

  🧪  Testing  ---  3/6 passing

    x  No test framework configuration found.
       Set up Jest, Vitest, pytest, Go testing, JUnit, Kotest, cargo test, xUnit/NUnit, RSpec, PHPUnit, or XCTest to enable automated testing.
    *  Found 5 test file(s)
    *  "test" script found in package.json
    x  No coverage configuration found.
       Configure test coverage reporting in your test framework, CI pipeline, JaCoCo, Kover, Coverlet, SimpleCov, or PHPUnit coverage.
    *  E2E / integration testing found: playwright.config.ts
    o  Requires --ai flag  (requires --ai)

  --------------------------------------------------------

  📚  Documentation  ---  5/8 passing

    *  README.md found with 3551 characters
    *  Contributing guide found: CONTRIBUTING.md
    x  No API documentation found.
       Add OpenAPI/Swagger specs, JSDoc/TypeDoc config, or a docs/api directory.
    *  CODEOWNERS found: .github/CODEOWNERS
    *  AI context file found: .cursor/rules
    *  Architecture documentation found: docs/architecture.md
    o  Requires --ai flag  (requires --ai)
    o  Requires --ai flag  (requires --ai)

  --------------------------------------------------------

  🔧  Developer Environment  ---  4/5 passing

    *  Lock file found: pnpm-lock.yaml
    x  No container configuration found.
       Add a Dockerfile, docker-compose, or .devcontainer for reproducible environments.
    *  Environment documentation found: .env.example
    *  "dev" script found in package.json
    *  Version pinning found: .nvmrc

  --------------------------------------------------------

  ⚙️  CI/CD  ---  5/6 passing

    *  CI configuration found: .github/workflows/lint.yml
    *  CI runs tests in .github/workflows/playwright.yml
    x  CI configuration found but no linter execution detected.
       Add a lint step to your CI pipeline to enforce code quality.
    *  "build" script found in package.json
    *  Deploy configuration found: vercel.json
    *  Branch protection mentioned in CONTRIBUTING.md

  --------------------------------------------------------

  💚  Code Health  ---  1/3 passing

    *  pnpm-lock.yaml was modified 0 day(s) ago
    x  No dead code detection tool found.
       Add knip, deadcode detection, or eslint-plugin-unused-exports to find unused code.
    x  No bundle analysis configuration found.
       Add webpack-bundle-analyzer, @next/bundle-analyzer, or size-limit to monitor bundle size.

  --------------------------------------------------------

  🔒  Security  ---  3/5 passing

    *  License file found: LICENSE
    x  No security scanning configured in CI.
       Add CodeQL, Snyk, Trivy, Semgrep, OWASP dependency-check, cargo-audit, brakeman, bundler-audit, or SecurityCodeScan to your CI pipeline for vulnerability scanning.
    x  No secrets detection tool configured.
       Add gitleaks, detect-secrets, or trufflehog to prevent secrets from being committed.
    *  Security policy found: SECURITY.md
    *  Dependency update automation found: .github/dependabot.yml

  --------------------------------------------------------

  +- TOP RECOMMENDATIONS - - - - - - - - - - - - - - - - - - -

  1. Type checker configured   MED   [Style & Linting]
     Enable strict type checking (e.g. strict mode in tsconfig.json, mypy, or pyright)
     Strict types help agents catch errors at compile time instead of at runtime, dramatically improving code reliability

  2. Pre-commit hooks configured   MED   [Style & Linting]
     Set up pre-commit hooks with Husky, Lefthook, or pre-commit to run checks before every commit
     Pre-commit hooks provide a fast feedback loop so agents discover issues before pushing code

  3. API documentation   MED   [Documentation]
     Add API documentation using OpenAPI/Swagger specs, JSDoc, TypeDoc, or a dedicated docs folder
     API docs let agents understand available endpoints, data shapes, and contracts without reading every source file

  4. CI runs linters   MED   [CI/CD]
     Address the failing "ci-runs-linters" criterion to improve agent readiness
     Meeting this criterion improves the codebase's readiness for autonomous AI agents

  5. Containerization   HIGH   [Developer Environment]
     Add a Dockerfile, docker-compose.yml, or .devcontainer configuration for reproducible environments
     Containerization gives agents a fully reproducible environment, eliminating setup discrepancies

  6. Coverage configured   MED   [Testing]
     Address the failing "coverage-config" criterion to improve agent readiness
     Meeting this criterion improves the codebase's readiness for autonomous AI agents

  7. Dead code detection configured   MED   [Code Health]
     Address the failing "dead-code-detection" criterion to improve agent readiness
     Meeting this criterion improves the codebase's readiness for autonomous AI agents

  8. Secrets detection configured   MED   [Security]
     Set up secrets detection using Gitleaks, detect-secrets, or GitGuardian
     Secrets detection prevents agents from accidentally committing API keys, tokens, or credentials

  9. Security scanning in CI   HIGH   [Security]
     Configure security scanning with CodeQL, Snyk, Trivy, or Semgrep in your CI pipeline
     Security scanning catches vulnerabilities agents might introduce before they reach production

  10. Test framework configured   MED   [Testing]
     Configure a test framework such as Jest, Vitest, pytest, or Go testing with a config file
     A configured test framework lets agents write and run tests to verify their changes automatically


!  Run with --ai for deeper analysis with LLM-powered checks

  Powered by Kodus  |  https://kodus.io
```

The local dashboard URL from that run is only valid while the Kodus process is listening; re-run the command for a fresh report.
