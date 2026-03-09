/**
 * PostCSS configuration for Next.js.
 *
 * Next.js expects PostCSS plugins to be provided as strings (or a map of
 * plugin-name -> options). Providing a plugin as an imported function will
 * fail the build with "postcss-shape" errors.
 *
 * Tailwind v4 uses the "@tailwindcss/postcss" plugin to expand
 * `@import "tailwindcss";` and generate utility classes.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
