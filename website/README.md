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
NEXT_PUBLIC_BASE_PATH=/Awesome-Physical-AI pnpm --dir website build
NEXT_PUBLIC_BASE_PATH=/Awesome-Physical-AI node scripts/package-static.mjs
```

The last command stages the public static export in root `dist/`. Move any previous generated `dist/` aside before restaging. It does not include the archived draft, bibliography source, internal docs, or dependency tree. The preserved manuscript snapshot is included deliberately under `/Awesome-Physical-AI/paper/physical-agi.pdf`. Omit `NEXT_PUBLIC_BASE_PATH` for root-domain development or hosting.

The installed Vinext beta.5 needs `assetPrefix`, not framework `basePath`, for this single-page static export. The packaging script flattens its prefixed `_next` directory because Pages already mounts the artifact at the project path; it then checks every HTML asset link and navigation anchor. Revisit this workaround before adding client-side routes.

Dependency lifecycle scripts for esbuild, sharp, and workerd are disabled explicitly; the static build uses installed platform binaries. Do not bypass a package-security or minimum-release-age check.

## Publication

The primary website is [GitHub Pages](https://hai-chao-zhang.github.io/Awesome-Physical-AI/). The repository is public. Its Pages publishing source is **GitHub Actions**: `.github/workflows/validate.yml` validates the collection, builds the static site for `/Awesome-Physical-AI`, checks asset links, and deploys only the public `dist/` artifact after a successful push to `main` or a manual run. Pull requests are validated but never deployed. The `github-pages` environment restricts deployment to `main`.

The account's existing user-site custom domain (`www.zhanghaichao.xyz`) is inherited by project sites: GitHub redirects the `github.io` URL to the same path on that domain. This migration does not change the personal homepage's domain configuration.

The root `.openai/hosting.json` still identifies the original Sites project at `https://physical-agi.haichaozhang.chatgpt.site/`. It is retained for provenance and rollback; this migration does not delete, redeploy, redirect, or change access to that site. Do not create a replacement Site or change its audience during GitHub Pages maintenance. No paper acceptance or arXiv URL is implied by either publication.
