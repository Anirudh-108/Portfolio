# Anirudh Suryawanshi — Developer Portfolio

React + Vite portfolio featuring a modern dark layout, typed hero roles, services, education, filterable projects, and a contact form.

**Live site:** https://Anirudh-108.github.io/Portfolio/

## Stack

- React 19
- Vite 6
- CSS (custom design system)
- Boxicons

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo is configured for GitHub Pages at `/Portfolio/` via GitHub Actions (`.github/workflows/deploy.yml`).

1. Push these changes to `main`.
2. In the GitHub repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and confirm the **Deploy to GitHub Pages** workflow succeeds.
5. Visit https://Anirudh-108.github.io/Portfolio/

You can also run the workflow manually from **Actions → Deploy to GitHub Pages → Run workflow**.

## Project structure

```
src/
  components/   # Navbar, Hero, About, Services, Education, Projects, Contact, Footer
  data/         # Portfolio content
  hooks/        # Scroll / intersection helpers
  utils/        # Helpers (asset base path)
public/img/     # Static images
```

## Customize

Edit `src/data/content.js` for name, links, skills, services, education, and projects.

If you rename the GitHub repository, update `base` in `vite.config.js` to match (`base: '/YourRepoName/'`).
