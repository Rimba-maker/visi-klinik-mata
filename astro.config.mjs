import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo under /visi-klinik-mata/, localhost serves from /.
// GITHUB_ACTIONS is only set on the CI runner, so dev and local builds never get the prefix.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig(isGitHubPages ? { site: 'https://rimba-maker.github.io', base: '/visi-klinik-mata' } : {});
