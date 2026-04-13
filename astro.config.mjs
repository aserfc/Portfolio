// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const runningInGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserPagesRepository = repositoryName === `${repositoryOwner}.github.io`;
const astroEntrypoints = {
  'astro/entrypoints/prerender': fileURLToPath(new URL('./node_modules/astro/dist/entrypoints/prerender.js', import.meta.url)),
  'astro/entrypoints/legacy': fileURLToPath(new URL('./node_modules/astro/dist/entrypoints/legacy.js', import.meta.url)),
};

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE ?? (repositoryOwner ? `https://${repositoryOwner}.github.io` : 'https://aserfc.github.io'),
  base: process.env.BASE_PATH ?? (runningInGitHubActions && repositoryName && !isUserPagesRepository ? `/${repositoryName}` : '/'),
  trailingSlash: 'always',
  vite: {
    resolve: {
      alias: astroEntrypoints,
    },
  },
});
