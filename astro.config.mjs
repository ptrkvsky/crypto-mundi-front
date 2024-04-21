import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";
import { getCurrentDate } from "./src/helpers/getCurrentDate";
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
    sitemap(),
  ],
});
