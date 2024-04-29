import type { ManifestOptions } from "vite-plugin-pwa";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const version = import.meta.env.PUBLIC_SANITY_API_VERSION;
const dataSet = import.meta.env.PUBLIC_SANITY_DATASET;

const config = {
  url: "https://crypto-mundi.com",
  mode: dataSet,
  projectId,
  sanityGraphqlEndpoint: `https://${projectId}.api.sanity.io/${version}/graphql/${dataSet}/default`,
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: "Johan Petrikovsky développeur React Freelance", // Change this to your website's name.
  short_name: "Site de Johan Petrikovsky", // Change this to your website's short name.
  description:
    "Johan Petrikovsky est un développeur React et Typescript Freelance.", // Change this to your websites description.
  theme_color: "#30E130", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "minimal-ui",
  icons: [
    {
      src: "/favicons/android-chrome-192x192.webp",
      sizes: "192x192",
      type: "image/webp",
    },
    {
      src: "/favicons/android-chrome-512x512.webp",
      sizes: "512x512",
      type: "image/webp",
    },
    {
      src: "/favicons/android-chrome-512x512.webp",
      sizes: "512x512",
      type: "image/webp",
      purpose: "any maskable",
    },
  ],
};

export default config;
