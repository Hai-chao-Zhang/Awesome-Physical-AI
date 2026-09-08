# Academic companion website

The site uses the generated Vinext/React starter and its pnpm lockfile. Content comes from `../data/`; no live connector or API key is required. It is a static, reading-oriented academic project page.

## Local development

Requires Node 22.13+ and pnpm (the local validation environment uses Node 24.19.0 and pnpm 11.19.0; CI tests Node 22).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

From the repository root:

```sh
node scripts/generate.mjs
node scripts/check.mjs
pnpm --dir website exec tsc --noEmit
pnpm --dir website build
node scripts/package-static.mjs
```

The last command stages the public static export in root `dist/`. It does not include the archived draft, bibliography source, internal docs, or dependency tree. The current working manuscript PDF is included deliberately under `/paper/physical-agi.pdf`.

Dependency lifecycle scripts for esbuild, sharp, and workerd are disabled explicitly; the static build uses installed platform binaries. Do not bypass a package-security or minimum-release-age check.

## Publication

The root `.openai/hosting.json` identifies the existing Sites project. Do not create another Site during maintenance. Build, validate, save, and deploy that project using the Sites workflow. Current access is owner-only; changing it to public is a separate, explicit publication decision.

The GitHub repository remains private. No GitHub Pages workflow is enabled and no paper acceptance or arXiv URL is implied. Preserve any subsequently configured audience or domain unless explicitly asked to change it.
