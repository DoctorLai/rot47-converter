# ROT47 Cipher Tool

[![CI](https://github.com/DoctorLai/rot47-converter/actions/workflows/ci.yaml/badge.svg)](https://github.com/DoctorLai/rot47-converter/actions/workflows/ci.yaml)
[![Test Coverage](https://github.com/DoctorLai/rot47-converter/actions/workflows/coverage.yaml/badge.svg)](https://github.com/DoctorLai/rot47-converter/actions/workflows/coverage.yaml)
[![Deploy to GitHub Pages](https://github.com/DoctorLai/rot47-converter/actions/workflows/deploy.yaml/badge.svg)](https://github.com/DoctorLai/rot47-converter/actions/workflows/deploy.yaml)
[![JavaScript](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/DoctorLai/rot47-converter/main/.github/badges/javascript.json)](https://github.com/DoctorLai/rot47-converter/search?l=javascript)
[![Top Language](https://img.shields.io/github/languages/top/DoctorLai/rot47-converter)](https://github.com/DoctorLai/rot47-converter)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18%20%7C%20recommended%2020-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?logo=prettier&logoColor=white)](https://prettier.io/)
[![License: MIT](https://img.shields.io/github/license/DoctorLai/rot47-converter)](./LICENSE)
[![Repo Size](https://img.shields.io/github/repo-size/DoctorLai/rot47-converter)](https://github.com/DoctorLai/rot47-converter)
[![Last Commit](https://img.shields.io/github/last-commit/DoctorLai/rot47-converter)](https://github.com/DoctorLai/rot47-converter/commits/main)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/DoctorLai/rot47-converter)](https://github.com/DoctorLai/rot47-converter/commits/main)
[![Open Issues](https://img.shields.io/github/issues/DoctorLai/rot47-converter)](https://github.com/DoctorLai/rot47-converter/issues)
[![Open PRs](https://img.shields.io/github/issues-pr/DoctorLai/rot47-converter)](https://github.com/DoctorLai/rot47-converter/pulls)
[![Forks](https://img.shields.io/github/forks/DoctorLai/rot47-converter?style=flat)](https://github.com/DoctorLai/rot47-converter/network/members)
[![Stars](https://img.shields.io/github/stars/DoctorLai/rot47-converter?style=flat)](https://github.com/DoctorLai/rot47-converter/stargazers)
[![Watchers](https://img.shields.io/github/watchers/DoctorLai/rot47-converter?style=flat)](https://github.com/DoctorLai/rot47-converter/watchers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/DoctorLai/rot47-converter)

A simple web-based tool to encode and decode text using the [ROT47 cipher](https://en.wikipedia.org/wiki/ROT47). This app is built with React + Vite and runs entirely in the browser. Type or paste your text, pick your language, and convert it with a click — nothing ever leaves your device.

> **Note:** ROT47 is a reversible obfuscation cipher, **not** secure encryption. Don't use it to protect sensitive data.

## Features

- **ROT47 Cipher**: Encode or decode any text using the ROT47 algorithm (it's its own inverse).
- **25 Languages**: Localized controls, including Simplified & Traditional Chinese, with automatic browser-language detection and RTL support for Arabic, Persian, and Hebrew.
- **Dark Mode**: Toggle between light and dark modes; your choice is remembered.
- **Copy to Clipboard**: One-click copy with visual feedback.
- **Live Character Count**: See the length of your text as you type.
- **Keyboard Friendly**: `Tab` inserts spaces; `Ctrl`/`Cmd` + `Enter` applies ROT47.
- **Privacy First**: Runs 100% in the browser — no servers, no tracking. See [PRIVACY.md](./PRIVACY.md).
- **Deploy Easily**: `npm run deploy`, or push to `main` and let GitHub Actions publish it.

## Live Demo

The live demo is deployed to: [GitHub Page: ROT47 Cipher Tool](https://doctorlai.github.io/rot47-converter/)

![image](https://github.com/user-attachments/assets/6d2593cd-4623-44f5-9f92-8bed2a508643)

Please note: this is the open source version of this online tool: [ROT47 Online Cipher](https://rot47.net/)

## Installation

To run the tool locally you'll need [Node.js](https://nodejs.org/) `>= 18`; Node 20 is recommended (see [.nvmrc](./.nvmrc)).

1. Clone the repository:

```bash
git clone https://github.com/DoctorLai/rot47-converter.git
cd rot47-converter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Visit [http://localhost:5173/rot47-converter/](http://localhost:5173/rot47-converter/) to use the tool locally.

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
| `npm run deploy`     | Build and publish to GitHub Pages via `gh-pages`.      |

Before opening a pull request, run:

```bash
npm run check
```

## Usage

1. **Enter your text** in the text area (or keep the demo text).
2. **Click "🔁 Apply ROT47"** — or press `Ctrl`/`Cmd` + `Enter` — to encode or decode.
3. The result replaces the current content in the same box.
4. **Click "📋 Copy"** to copy the result, or **"🧹 Clear"** to start over.

Use the **language selector** to switch the interface language and the
**🌙 / 🌞 toggle** to switch between dark and light mode. Both preferences are
remembered across visits.

## Localization

The controls are available in **25 languages**. Translations live as JSON files
in [`src/lang/`](./src/lang) and are loaded automatically. The long explanatory
description falls back to English when a translation omits it. Adding a new
language is as simple as dropping in a new file. See
[CONTRIBUTING.md](./CONTRIBUTING.md#adding-or-improving-a-translation) for details.

<details>
<summary>Supported languages</summary>

English, Español, Português, Français, Deutsch, Italiano, Nederlands, Svenska,
Polski, Русский, Українська, Ελληνικά, Türkçe, 简体中文, 繁體中文, 日本語,
한국어, Tiếng Việt, Bahasa Indonesia, ไทย, हिन्दी, বাংলা, العربية, فارسی, עברית.

</details>

## Deployment

The app is deployed to GitHub Pages. There are two options:

- **GitHub Actions (recommended):** every push to `main` triggers
  [`deploy.yaml`](./.github/workflows/deploy.yaml), which builds and publishes the
  site. Enable it once under **Settings → Pages → Build and deployment → Source:
  GitHub Actions**.
- **Manual:** run `npm run deploy` to build and publish to the `gh-pages` branch.

On the deployed site, the build date and commit hash are shown in the footer.

## Contributing

Contributions are welcome! Please read the
[Contributing Guide](./CONTRIBUTING.md) and our
[Code of Conduct](./CODE_OF_CONDUCT.md) before getting started. A quick summary:

1. Fork the repository and create a feature branch.
2. Make your changes and add tests.
3. Run `npm run check` to make sure everything passes.
4. Open a pull request using the provided template.

## Documentation & Community

- 📘 [AI-generated wiki (DeepWiki)](https://deepwiki.com/DoctorLai/rot47-converter)
- 🛟 [Support](./SUPPORT.md)
- 🔒 [Security Policy](./SECURITY.md)
- 🕵️ [Privacy Policy](./PRIVACY.md)
- 📝 [Changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- Built with ❤️ by [@justyy](https://github.com/doctorlai)
- Initial boilerplate contributed by ChatGPT-4o and o4-mini.
- If you found this tool useful, consider buying me a [coffee](https://www.buymeacoffee.com/y0BtG5R) ☕
