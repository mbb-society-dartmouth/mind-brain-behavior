# Mind Brain Behavior

Website for the Mind Brain Behavior Society at Dartmouth, built with [Astro](https://astro.build).

## Project Structure

```text
/
├── public/              # static assets, served as-is
├── src/
│   └── pages/           # each file here becomes a route
│       └── index.astro
├── astro.config.mjs
└── package.json
```

Astro turns every `.astro` or `.md` file in `src/pages/` into a route based on its filename. Components go in `src/components/`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally before deploying   |

Requires Node 22.12 or newer.
