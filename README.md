# zuuxo lab

A browser-native experimental playground built for GitHub Pages.

## Included experiments

1. Particle Field — Canvas particle physics
2. SVG Morph — procedural vector morphing
3. Procedural Grid — interactive warped grid
4. Type Field — reactive typography
5. Orbit Engine — Three.js / WebGL scene
6. Signal Rain — generative data streams
7. Depth Lines — layered SVG depth illusion
8. Cursor Physics — spring-chain simulation

## Run locally

No build step is required. Because one experiment imports Three.js as an ES module, use any small static server rather than opening files directly.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages

Upload the contents of this repository to the root of a GitHub repository, then enable:

- Settings → Pages
- Deploy from a branch
- `main`
- `/(root)`

The site uses relative paths, so it works both on a project Pages URL such as `https://username.github.io/zuuxo-lab/` and on a user site.

## Note

The Orbit Engine experiment loads Three.js from jsDelivr. The other experiments have no external runtime dependency.
