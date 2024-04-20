import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'g8dp9xkw',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2023-03-20", // insert the current date to access the latest version of the API
  }), react()]
});
