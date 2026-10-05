# juniorcorazza.com

Personal portfolio for Junior Corazza — a dark, terminal-themed single-page app
with two views: a **Home** page and a git-log-style **Experience** page.

Built with Vite, React, TypeScript and Tailwind CSS. Deployed to Cloudflare
Pages.

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
any static hosting without a server-side SPA fallback. (Cloudflare Pages also
serves `index.html` for unknown paths, so a future move to `BrowserRouter` is
possible.)

## Deploy

Pushes to `main` deploy automatically via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) to the
Cloudflare Pages project `juniorcorazza` (repo secret `CLOUDFLARE_API_TOKEN`,
repo variable `CLOUDFLARE_ACCOUNT_ID`). To deploy manually with local
wrangler auth:

```bash
yarn deploy     # build + wrangler pages deploy
```
