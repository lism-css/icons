/** @type {import('lint-staged').Config} */
export default {
  '*.{js,mjs,cjs,jsx,ts,tsx}': ['pnpm exec eslint --fix', 'pnpm exec prettier --write'],
  '*.astro': ['pnpm exec eslint --fix', 'pnpm exec prettier --write'],
  '*.{md,mdx,json,yaml,yml}': ['pnpm exec prettier --write'],
};
