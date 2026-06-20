# Security Policy

## Supported Versions

NativeUI ships as copy-paste source code via `nativeui-cli`, not a
traditional versioned dependency. Security fixes are applied to:

| Version                                     | Supported                        |
| ------------------------------------------- | -------------------------------- |
| `nativeui-cli` latest                       | ✅ Yes                           |
| `nativeui-cli` < latest minor               | ⚠️ Best effort                   |
| Components already copied into your project | ❌ Not automatically — see below |

Because components are copied directly into your codebase, **a fix to the
registry does not retroactively patch code already in your project.** Run
`nativeui-cli diff <component>` to check whether a security fix has shipped
for a component you've already installed, and re-add it if so.

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**
Public issues are visible to everyone immediately, including before a fix
is available.

Instead, report it privately using one of these methods:

1. **GitHub Security Advisories (preferred):** go to the
   [Security tab](../../security/advisories/new) of this repository and
   click "Report a vulnerability."
2. **Email:** send details to **contact@kishanagarwal.dev**. If possible,
   encrypt sensitive details using our PGP key (link/fingerprint here, if
   you set one up).

### What to include

To help us triage and fix quickly, please include:

- A description of the vulnerability and its potential impact
- Steps to reproduce, or a minimal proof-of-concept
- The affected component(s), CLI command, or registry file
- Which version of `nativeui-cli` and/or which component version you tested
- Whether the issue affects the CLI tool itself, the registry/build
  pipeline, or a specific component's runtime behavior

### What to expect

| Stage                                         | Timeline                                       |
| --------------------------------------------- | ---------------------------------------------- |
| Acknowledgment of your report                 | Within 3 business days                         |
| Initial assessment (severity, affected scope) | Within 7 business days                         |
| Fix or mitigation plan communicated to you    | Within 14 business days, severity-dependent    |
| Public disclosure                             | Coordinated with you, after a fix is available |

We'll keep you updated throughout and credit you in the advisory and
release notes, unless you'd prefer to remain anonymous.

## Scope

In scope:

- `nativeui-cli` (the CLI tool itself — supply chain, install scripts,
  file-write behavior, path traversal, etc.)
- Component source in `registry/components/` (XSS-equivalent issues,
  unsafe `dangerouslySetInnerHTML`-style patterns, insecure defaults,
  injection issues in form components, etc.)
- The registry build/publish pipeline
- `nativeui.qzz.io` (the documentation site itself, if it has a
  vulnerability — not its hosting provider)

Out of scope:

- Vulnerabilities in your own app code that merely _uses_ a NativeUI
  component as intended
- Vulnerabilities in upstream dependencies (Expo, React Native, Reanimated)
  — please report those to the respective projects, though we'd appreciate
  a heads-up if a NativeUI component's usage pattern makes an upstream
  issue more exploitable
- Issues requiring physical access to a user's device
- Social engineering attacks against maintainers or contributors

## Disclosure Policy

We follow coordinated disclosure. Please give us a reasonable window to
investigate and ship a fix before disclosing publicly. If a fix isn't ready
within 90 days, we'll work with you on a disclosure timeline regardless.

Thank you for helping keep NativeUI and its users safe.
