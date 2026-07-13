# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-07-13

### Added

- Internationalization (i18n) supporting 25 languages, including Simplified
  Chinese (`zh-CN`) and Traditional Chinese (`zh-TW`), with a language selector
  that persists the choice and auto-detects the browser language.
- Right-to-left (RTL) layout support for Arabic, Persian, and Hebrew.
- Copy-to-clipboard button with visual feedback.
- Live character count under the text area.
- Version (build date + commit) shown in the footer on the deployed site.
- `Ctrl`/`Cmd` + `Enter` keyboard shortcut to apply ROT47.
- ESLint (flat config) plus `npm run lint` and an all-in-one `npm run check`.
- GitHub Actions workflows: GitHub Pages deployment and a dynamic
  JavaScript-percentage badge.
- Community health files: `SECURITY.md`, `CONTRIBUTING.md`, `SUPPORT.md`,
  `PRIVACY.md`, `CODE_OF_CONDUCT.md`, a pull request template, Dependabot
  configuration, `.gitattributes`, and `.nvmrc`.
- Additional status badges in the README.

### Changed

- Links are now rendered in yellow in dark mode for better contrast.
- Raised test-coverage thresholds to 80% across the board.
- CI now runs on Node 20 and includes a lint step.

### Fixed

- Corrected the package name to `rot47-converter` and fixed the `homepage`.
- Removed a broken Vitest `setupFiles` path from `vite.config.js`.

### Removed

- Unused dependencies: `js-yaml`, `crypto`, `crypto-browserify`, `jest`,
  `babel-jest`, `@babel/core`, `@babel/preset-env`, `@babel/preset-react`, and
  the associated `babel.config.js`.

## [1.0.0]

### Added

- Initial ROT47 encoder/decoder with a single text area and convert button.
- Dark/light mode toggle with persistence.
- Tab-key support that inserts spaces in the text area.

[Unreleased]: https://github.com/DoctorLai/rot47-converter/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/DoctorLai/rot47-converter/releases/tag/v1.1.0
[1.0.0]: https://github.com/DoctorLai/rot47-converter/releases/tag/v1.0.0
