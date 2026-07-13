# Security Policy

## Supported Versions

The ROT47 Cipher Tool is a single-page app continuously deployed from the
`main` branch. The latest deployed version is the only actively supported one.

| Version         | Supported          |
| --------------- | ------------------ |
| Latest (`main`) | :white_check_mark: |
| Older builds    | :x:                |

## Reporting a Vulnerability

The tool runs entirely in your browser and does not collect or transmit any
data. Even so, if you discover a security vulnerability, please report it
responsibly:

- **Preferred:** open a private report through
  [GitHub Security Advisories](https://github.com/DoctorLai/rot47-converter/security/advisories/new).
- Alternatively, reach out via [justyy.com](https://justyy.com).

Please **do not** open a public issue for security vulnerabilities.

When reporting, please include:

- A description of the vulnerability and its potential impact.
- Steps to reproduce it.
- Any relevant logs, screenshots, or a proof of concept.

We aim to acknowledge reports within 5 business days and to share a resolution
timeline after triage.

## Scope

ROT47 is **not** a secure encryption algorithm — it is a reversible
obfuscation cipher intended for casual use (for example, hiding spoilers or
puzzle answers). It must not be used to protect sensitive information. Reports
about ROT47's inherent reversibility are therefore out of scope.
