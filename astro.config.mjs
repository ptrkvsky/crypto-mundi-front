import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { VitePWA } from "vite-plugin-pwa";
import { getCurrentDate } from "./src/helpers/getCurrentDate";
import { manifest } from "./src/config";
// get current date based this format '2023-03-20'

// https://astro.build/config
export default defineConfig({
  site: "https://www.crypto-mundi.com",
  integrations: [
    sanity({
      projectId: "g8dp9xkw",
      dataset: "production",
      useCdn: false,
      // See note on using the CDN
      apiVersion: getCurrentDate(), // insert the current date to access the latest version of the API
    }),
    react(),
  ],
  redirects: {
    "/article/Link/": "/",
  },
  base: "/",
  trailingSlash: "never",
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        strategies: "generateSW",
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // Even though this says `null` by default, I had to set this specifically to `null` to make it work
          navigateFallback: null,
        },
      }),
    ],
  },
});
