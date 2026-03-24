# Agent readiness report

Terminal capture from `npx @kodus/agent-readiness .` in `/home/enno/Projects/chatbot`.

```
enno@lenovo:~/Projects/chatbot$ npx @kodus/agent-readiness .
Command 'npx' not found, but can be installed with:
sudo apt install npm
enno@lenovo:~/Projects/chatbot$ nvom current
Command 'nvom' not found, did you mean:
  command 'nvim' from snap nvim (v0.11.6)
  command 'nvim' from deb neovim (0.7.2-8)
  command 'nom' from deb nom (0.1.5-4)
See 'snap info <snapname>' for additional versions.
enno@lenovo:~/Projects/chatbot$ nvm current
none
enno@lenovo:~/Projects/chatbot$ nvm use 24
Now using node v24.13.1 (npm v11.8.0)
enno@lenovo:~/Projects/chatbot$ npx @kodus/agent-readiness .
Need to install the following packages:
@kodus/agent-readiness@0.1.3
Ok to proceed? (y) y

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
|          LEVEL 1  -  Foundational          |
|      1 more criteria to reach Level 2      |
|                                            |
|  Overall Score  #########-----------  46%  |
|                                            |
+--------------------------------------------+

  +- PILLAR SUMMARY - - - - - - - - - - - - - - - - - - - -

+------------------------------+------------------------+--------+------------+
| Pillar                       | Score                  | %      | Pass/Total |
+------------------------------+------------------------+--------+------------+
| 🎨  Style & Linting          | #######-----------     | 40%    | 2/5        |
+------------------------------+------------------------+--------+------------+
| 🧪  Testing                  | ###########-------     | 60%    | 3/5        |
+------------------------------+------------------------+--------+------------+
| 📚  Documentation            | ######------------     | 33%    | 2/6        |
+------------------------------+------------------------+--------+------------+
| 🔧  Developer Environment    | ###########-------     | 60%    | 3/5        |
+------------------------------+------------------------+--------+------------+
| ⚙️  CI/CD                    | ############------     | 67%    | 4/6        |
+------------------------------+------------------------+--------+------------+
| 💚  Code Health              | ######------------     | 33%    | 1/3        |
+------------------------------+------------------------+--------+------------+
| 🔒  Security                 | ####--------------     | 20%    | 1/5        |
+------------------------------+------------------------+--------+------------+

  +- DETAILED BREAKDOWN - - - - - - - - - - - - - - - - - - -

  🎨  Style & Linting  ---  2/6 passing

    *  Linter configuration found: biome.jsonc
    *  Biome formatter configuration found in biome.jsonc
    x  No type checker with strict mode found.
       Enable TypeScript strict mode, or add mypy/pyright for Python projects.
    x  No pre-commit hooks found.
       Add Husky, Lefthook, or pre-commit to run checks before commits.
    x  No .editorconfig found.
       Add an .editorconfig to standardize indentation and file encoding across editors.
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

  📚  Documentation  ---  2/8 passing

    *  README.md found with 3551 characters
    x  No contributing guide found.
       Add a CONTRIBUTING.md to document how to contribute to the project.
    x  No API documentation found.
       Add OpenAPI/Swagger specs, JSDoc/TypeDoc config, or a docs/api directory.
    x  No CODEOWNERS file found.
       Add a CODEOWNERS file to assign ownership of different parts of the codebase.
    *  AI context file found: .cursor/rules
    x  No architecture documentation found.
       Add docs/architecture, docs/adr, or ARCHITECTURE.md to document high-level design decisions.
    o  Requires --ai flag  (requires --ai)
    o  Requires --ai flag  (requires --ai)

  --------------------------------------------------------

  🔧  Developer Environment  ---  3/5 passing

    *  Lock file found: pnpm-lock.yaml
    x  No container configuration found.
       Add a Dockerfile, docker-compose, or .devcontainer for reproducible environments.
    *  Environment documentation found: .env.example
    *  "dev" script found in package.json
    x  No runtime version pinning found.
       Add .nvmrc, .python-version, .tool-versions, or .mise.toml to pin runtime versions.

  --------------------------------------------------------

  ⚙️  CI/CD  ---  4/6 passing

    *  CI configuration found: .github/workflows/lint.yml
    *  CI runs tests in .github/workflows/playwright.yml
    x  CI configuration found but no linter execution detected.
       Add a lint step to your CI pipeline to enforce code quality.
    *  "build" script found in package.json
    *  Deploy configuration found: vercel.json
    x  No branch protection rules documented or configured.
       Document branch protection rules in CONTRIBUTING.md or configure via .github/settings.yml.

  --------------------------------------------------------

  💚  Code Health  ---  1/3 passing

    *  pnpm-lock.yaml was modified 0 day(s) ago
    x  No dead code detection tool found.
       Add knip, deadcode detection, or eslint-plugin-unused-exports to find unused code.
    x  No bundle analysis configuration found.
       Add webpack-bundle-analyzer, @next/bundle-analyzer, or size-limit to monitor bundle size.

  --------------------------------------------------------

  🔒  Security  ---  1/5 passing

    *  License file found: LICENSE
    x  No security scanning configured in CI.
       Add CodeQL, Snyk, Trivy, Semgrep, OWASP dependency-check, cargo-audit, brakeman, bundler-audit, or SecurityCodeScan to your CI pipeline for vulnerability scanning.
    x  No secrets detection tool configured.
       Add gitleaks, detect-secrets, or trufflehog to prevent secrets from being committed.
    x  No security policy found.
       Add a SECURITY.md to document how to report security vulnerabilities.
    x  No dependency update automation found.
       Add Dependabot, Renovate, or Gradle versions plugin to automatically keep dependencies up to date.

  --------------------------------------------------------

  +- TOP RECOMMENDATIONS - - - - - - - - - - - - - - - - - - -

  1. Contributing guide   LOW   [Documentation]
     Add a CONTRIBUTING.md with development workflow, coding standards, and PR guidelines
     Contributing guidelines teach agents the team's workflow so their PRs match expectations from the start

  2. Runtime version pinned   LOW   [Developer Environment]
     Pin the runtime version with .nvmrc, .node-version, .python-version, .tool-versions, or .mise.toml
     Pinned runtime versions prevent agents from hitting version incompatibilities during execution

  3. Test framework configured   MED   [Testing]
     Configure a test framework such as Jest, Vitest, pytest, or Go testing with a config file
     A configured test framework lets agents write and run tests to verify their changes automatically

  4. CODEOWNERS defined   LOW   [Documentation]
     Create a CODEOWNERS file to define ownership for different parts of the codebase
     CODEOWNERS helps agents understand who to tag for reviews and which areas have strict oversight

  5. Security policy   LOW   [Security]
     Create a SECURITY.md file describing how to report vulnerabilities
     A security policy gives agents guidance on handling security-sensitive changes appropriately

  6. Type checker configured   MED   [Style & Linting]
     Enable strict type checking (e.g. strict mode in tsconfig.json, mypy, or pyright)
     Strict types help agents catch errors at compile time instead of at runtime, dramatically improving code reliability

  7. Pre-commit hooks configured   MED   [Style & Linting]
     Set up pre-commit hooks with Husky, Lefthook, or pre-commit to run checks before every commit
     Pre-commit hooks provide a fast feedback loop so agents discover issues before pushing code

  8. API documentation   MED   [Documentation]
     Add API documentation using OpenAPI/Swagger specs, JSDoc, TypeDoc, or a dedicated docs folder
     API docs let agents understand available endpoints, data shapes, and contracts without reading every source file

  9. CI runs linters   MED   [CI/CD]
     Address the failing "ci-runs-linters" criterion to improve agent readiness
     Meeting this criterion improves the codebase's readiness for autonomous AI agents

  10. Dependency update automation   MED   [Security]
     Address the failing "dep-update-automation" criterion to improve agent readiness
     Meeting this criterion improves the codebase's readiness for autonomous AI agents


!  Run with --ai for deeper analysis with LLM-powered checks

  Powered by Kodus  |  https://kodus.io


  Dashboard: http://localhost:45571
  Press Ctrl+C to stop the server.
```

Note: If you re-run the tool, update this file or append a dated section so the report stays current. The dashboard URL was valid only while that run’s server was active.
