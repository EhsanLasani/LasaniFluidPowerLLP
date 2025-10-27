## Development workflow

```bash
npm install
npm run dev
```

In development a floating **Theme preview** panel is rendered (bottom right). Use it to switch between:

- `carbon-g10` (default)
- `carbon-g90`
- `carbon-g100`
- `material-light`
- `material-dark`

The picker updates `data-theme` on `<html>` and persists the choice in `localStorage` (`lasani.theme`) so you can refresh without losing the selection.

## Preparing a production theme

Only one theme should ship to production. Once you settle on a preset, run:

```bash
npm run theme:activate -- <theme>
```

For example, to keep the Carbon g90 tokens:

```bash
npm run theme:activate -- carbon-g90
```

This command rewrites `app/globals.css` in-place with only the requested theme tokens and shared base styles. If you prefer writing to a different file, add `--out=relative/path.css`.

Re-run `npm run dev` after pruning to confirm the appearance before deploying.
