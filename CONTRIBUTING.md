# Contributing to NativeUI

Thanks for considering a contribution. NativeUI is a copy-paste component
registry, not an npm package — that changes how you should think about
contributing here. This guide covers everything you need.

## Before you start

- Check existing [issues](../../issues) and [discussions](../../discussions)
  to avoid duplicate work.
- For a new component, open a
  [Component Request](../../issues/new?template=component_request.yml) first
  and get a 👍 from a maintainer before writing code. This saves you from
  building something that gets rejected for scope or dependency reasons.
- For anything bigger than a small fix, open an issue describing your plan
  before sending a PR.

## Project philosophy — read this first

Every contribution must respect two non-negotiable rules:

1. **No external styling dependencies.** Components are built with
   `StyleSheet.create()` only — no Tailwind, no NativeWind, no styled-components,
   no CSS-in-JS. `react-native-reanimated` and `react-native-gesture-handler`
   are acceptable since they ship as Expo defaults, but anything beyond that
   needs maintainer sign-off first.
2. **Components are copied, not installed.** Code that lands in
   `registry/components/` ends up pasted directly into a user's project.
   That means: no internal-only imports, no assumptions about the consuming
   app's file structure, and minimal magic. Someone should be able to read
   the file once and understand it completely.

If a PR violates either rule, it will be asked to change before merge,
regardless of how good the component is otherwise.

## Development setup

```bash
git clone https://github.com/[YOUR_ORG]/nativeui.git
cd nativeui
npm install

# Build and preview a component in isolation
cd apps/ui-dev
npx expo start

# Run the CLI locally against the registry
cd apps/cli
npm link
nativeui-cli add button
```

You typically won't need to touch `apps/backend` unless you're working on
registry hosting/distribution itself — it's a Cloudflare Worker that serves
component files to the CLI and docs site, and has its own setup (see its
README). Most component and CLI contributions never need it running locally.

`apps/promotional` (the Remotion promo video project) follows a separate
contribution flow and isn't part of the component/CLI workflow below.

## Project structure

```
nativeui/
├── apps/
│   ├── backend/              # Cloudflare Worker — serves registry component files to CLI/docs
│   ├── cli/                  # nativeui-cli source
│   ├── docs/                 # Documentation site (nativeui.qzz.io)
│   ├── promotional/          # Remotion promo video project
│   ├── ui-dev/               # Dev playground — build & iterate on a component in isolation
│   └── showcase/             # Demo app — real usage examples of finished components
├── packages/
│   ├── eslint-config/        # Shared ESLint config
│   └── typescript-config/    # Shared tsconfig
├── registry/                 # Canonical component source + registry.json manifest
└── scripts/                  # Build / release scripts
```

## Adding or modifying a component

1. Build and iterate on the component in `apps/ui-dev/` — this is your
   sandbox to get the implementation right without touching the registry yet.
2. Once it's solid, add the component file to
   `registry/components/ui/your-component.tsx`. This is the canonical source
   that gets copied into users' projects via `nativeui-cli add`.
3. Register it in `registry/registry.json`:
   ```json
   {
     "name": "your-component",
     "type": "components:ui",
     "files": ["your-component.tsx"],
     "dependencies": []
   }
   ```
   Leave `dependencies` empty unless you've gotten sign-off for a new package.
4. Add a real usage example to `apps/showcase/` — this proves the component
   works outside the dev sandbox, in a realistic screen.
5. Add docs with a usage example to `apps/docs/components/your-component.mdx`
   — see an existing page for the expected format (props table, usage
   example, theming notes).
6. Every themeable value (colors, spacing, radius) must pull from
   `lib/theme.ts` tokens — never hardcode a hex value or pixel number that
   should be customizable.

## Code style

- TypeScript strict mode. No `any` unless there's a documented reason.
- Functional components only.
- Props interfaces are named `{ComponentName}Props` and exported.
- Run before committing:
  ```bash
  npm run lint
  npm run typecheck
  npm run format
  ```
- Keep components self-contained. If you need a shared utility, it goes in
  `registry/components/lib/` and gets pulled in as a registry dependency —
  not copy-pasted inline.

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(button): add loading state with spinner
fix(cli): resolve path issue on Windows
docs(theme): clarify dark mode token overrides
chore(deps): bump reanimated to 3.16
```

## Pull request process

1. Fork the repo and create a branch from `main`:
   `feat/component-name` or `fix/short-description`.
2. Make your changes, following the structure above.
3. Fill out the PR template completely — incomplete PRs will be asked to
   update before review starts.
4. Ensure `npm run lint`, `npm run typecheck`, and `npm run test` all pass.
5. Link the issue your PR addresses (`Closes #123`).
6. A maintainer will review within a few days. Expect feedback — it's not
   personal, it's about keeping the registry consistent.
7. Once approved, a maintainer will merge. Please don't merge your own PRs
   even if you have access.

## Testing

- Components: add a render test in `apps/ui-dev/__tests__/` covering the
  component's core behavior.
- CLI: add a test under `apps/cli/__tests__/` covering the new command
  or flag.
- We don't require 100% coverage, but new logic should have at least one
  test demonstrating it works.

## Reporting bugs / requesting features

Use the issue templates — they ask for exactly what we need to act on a
report quickly:

- [🐛 Bug Report](../../issues/new?template=bug_report.yml)
- [✨ Feature Request](../../issues/new?template=feature_request.yml)
- [🧩 New Component Request](../../issues/new?template=component_request.yml)
- [⚡ CLI Issue](../../issues/new?template=cli_issue.yml)
- [📖 Documentation](../../issues/new?template=documentation.yml)

## Security issues

**Do not open a public issue for security vulnerabilities.** See
[SECURITY.md](./SECURITY.md) for the responsible disclosure process.

## Code of Conduct

This project follows our [Code of Conduct](./CODE_OF_CONDUCT.md).
Participation means you agree to uphold it.

## Questions

Open a [Discussion](../../discussions) rather than an issue if you're not
sure something is a bug or you just want to talk through an idea.
