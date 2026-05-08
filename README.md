# SitRep Systems Website

Static GitHub Pages site for SitRep Systems.

## Local Preview

No build step is required. Open `index.html` directly in a browser, or run a small static server from the repo root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

GitHub Pages can serve the files directly from the repository. Keep `CNAME` in the repository root so the custom domain remains `www.sitrepsystems.com`.

## Notes

- Plain HTML, CSS, and vanilla JavaScript only.
- No npm install or bundler is required.
- Theme preference is stored in `localStorage`.
- Motion respects `prefers-reduced-motion`.
- Company identifiers such as NAICS, UEI, CAGE, contract vehicles, LinkedIn, and the final capability statement PDF are intentionally left for owner confirmation.
