# Contributing to ROT47 Cipher Tool

Thanks for taking the time to contribute! 🎉 This document explains how to set
up the project, the available scripts, and how to submit high-quality pull
requests.

By participating, you agree to abide by our
[Code of Conduct](./CODE_OF_CONDUCT.md).

## Getting Started

You will need [Node.js](https://nodejs.org/) `>= 18`; Node 20 is recommended
(see [.nvmrc](./.nvmrc)).

1. [Fork](https://github.com/DoctorLai/rot47-converter/fork) and clone the repository:
   ```bash
   git clone https://github.com/<your-username>/rot47-converter.git
   cd rot47-converter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Available Scripts

| Script               | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `npm run dev`        | Start the Vite development server.                     |
| `npm run build`      | Build the production bundle into `dist/`.              |
| `npm run preview`    | Preview the production build locally.                  |
| `npm test`           | Run the test suite once.                               |
| `npm run coverage`   | Run tests with coverage (enforces the 80% threshold).  |
| `npm run lint`       | Lint the source with ESLint.                           |
| `npm run lint:fix`   | Lint and auto-fix where possible.                      |
| `npm run format`     | Check formatting with Prettier.                        |
| `npm run format:fix` | Auto-format the source with Prettier.                  |
| `npm run check`      | Run format, lint, coverage, and build — the full gate. |

## Before You Open a Pull Request

Please run the full check locally and make sure it passes:

```bash
npm run check
```

- Add or update tests for any behavior you change.
- Keep changes focused; unrelated refactors belong in separate PRs.
- Update the [CHANGELOG](./CHANGELOG.md) under the `Unreleased` section.

## Adding or Improving a Translation

The UI is localized via JSON files in [`src/lang/`](./src/lang). Each file is
named with its language code (e.g. `de.json`, `zh-CN.json`) and maps translation
keys to localized strings.

To add a language:

1. Copy [`src/lang/en.json`](./src/lang/en.json) to `src/lang/<code>.json`.
2. Translate each value. Keep the leading emoji in labels like `apply` and
   `darkMode`, and keep the `languageName` in the language's own script.
3. That's it — the language is picked up automatically and appears in the
   selector (sorted by display name). No code changes are required.

Notes:

- Any key you omit falls back to English, so partial translations are welcome.
- The long `description` key is optional; only add it if you are confident in
  the technical wording.
- Right-to-left languages are handled automatically when their code is listed
  in `RTL_LANGUAGES` in [`src/i18n.js`](./src/i18n.js).

## Commit Messages

We encourage [Conventional Commits](https://www.conventionalcommits.org/)
(e.g. `feat: add copy button`, `fix: correct RTL direction`,
`docs: update README`). This keeps history readable and helps with changelog
generation.

## Reporting Bugs & Requesting Features

Use the [issue templates](https://github.com/DoctorLai/rot47-converter/issues/new/choose)
for bug reports and feature requests. For questions, see [SUPPORT.md](./SUPPORT.md).
