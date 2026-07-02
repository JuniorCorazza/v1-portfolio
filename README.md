# juniorcorazza.com

Personal portfolio for Junior Corazza — a dark, terminal-themed single-page app
with two views: a **Home** page and a git-log-style **Experience** page.

Built with Vite, React, TypeScript and Tailwind CSS. Deployed to AWS S3 +
CloudFront.

## Development

```bash
yarn install
yarn dev        # http://localhost:5173
yarn build      # type-check + production build to dist/
yarn preview    # serve the production build
yarn lint
```

Requires Node 24.

## Project structure

```
src/
  data/content.ts     # all copy — services, work, products, stack, timeline
  components/         # StatusBar, Nav, Terminal, Tag, SectionLabel, Reveal, Footer, Layout
  sections/          # Home sections: Hero, Services, SelectedWork, Products, Stack, About, Contact
  pages/             # Home, Experience
  App.tsx            # HashRouter + routes
  index.css          # Tailwind entry, fonts, theme variable
```

Content is data-driven: edit `src/data/content.ts` to change copy, add work
items, or wire up product links — no component changes needed.

## Theming

The whole site's accent colour is a single variable. Change `--accent-rgb` in
[`src/index.css`](src/index.css) and every accent/green element — labels,
buttons, links, terminal `$` prompts and status dots — updates at once:

```css
:root {
  --accent-rgb: 111 207 127; /* terminal green (default) */
}
```

## Routing

Uses `HashRouter` (`/#/`, `/#/experience`) so deep links and refreshes work on
static S3/CloudFront hosting without a server-side SPA fallback.

## Deploy

Pushes to `main` deploy automatically via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) using AWS OIDC
— no static credentials. To deploy manually with local AWS credentials:

```bash
yarn deploy     # build + s3 sync + CloudFront invalidation
```
