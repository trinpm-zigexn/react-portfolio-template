# React Portfolio — CLAUDE.md

## Project Overview

React portfolio website built with Vite + React 18. The project includes a portfolio search feature and is deployed through GitHub Actions.

## Key Directories

* `src/components/` — React UI components
* `src/hooks/` — custom hooks including `usePortfolioSearch`
* `src/test/` — Vitest test suite
* `public/data/` — portfolio data and content
* `.github/workflows/` — CI/CD pipelines

## Commands

```bash
npm run dev
npm run test -- --run
npm run lint
npm run build
```

## Architecture

* Portfolio search logic is implemented in `src/hooks/usePortfolioSearch.js`
* Portfolio content is loaded from the data files under `public/data/`
* Search supports keyword matching, tag matching, category filtering, and case-insensitive queries

## Testing

* Framework: Vitest
* Test file: `src/test/portfolioSearch.test.js`
* Coverage:

  * Empty search behavior
  * Keyword search
  * Tag search
  * Category filtering
  * Case-insensitive matching
  * Whitespace trimming

All tests must pass before merging changes.

## CI / Harness (Level 6)

* Automated tests executed with Vitest
* ESLint validates code quality
* GitHub Actions runs lint and tests on every push and pull request
* Deployment must not proceed if tests fail

## Rules for Claude

* Do not break portfolio search functionality
* Do not remove or bypass automated tests
* Run lint and tests before suggesting code changes
* Keep search behavior deterministic and testable
* Preserve responsive layout and accessibility
