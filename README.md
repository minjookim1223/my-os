# [jaymkim.com](https://jaymkim.com)

Personal portfolio site of **Jay Kim** — a macOS-style desktop in the browser.

Built with React (Create React App), SCSS, and a custom webpack loader that
generates the education/work timeline from data files in `timeline/`.

## Structure

- `main` branch — source code. Pushing to it triggers GitHub Actions to build
  and deploy the static output to the `gh-pages` branch, which GitHub Pages serves.
- `timeline/current.bio` — bio, links, and skills.
- `timeline/YYYY/MM/*.edu|.work|.proj` — timeline entries (with a matching
  `.png`/`.jpg` logo), where `YYYY/MM` is the start date.
- `src/data/donations.js` — PayPal donation menu items.

## Development

Requires Node 14 (node-sass 4.x is incompatible with newer Node).
On Windows, run the npm scripts from Git Bash — they use POSIX shell syntax.

```sh
npm install
npm start
```

Normally you don't need to build locally: pushing to the `main` branch
triggers the GitHub Actions workflow that builds and deploys the site.
