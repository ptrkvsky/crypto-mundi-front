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
  name: "Crypto Mundi", // Change this to your website's name.
  short_name: "Crypto Mundi", // Change this to your website's short name.
  description:
    "Restez informé avec les dernières actualités sur les crypto-monnaies. Analyses, tendances et nouvelles sur Bitcoin, Ethereum et plus encore sur Crypto Mundi.", // Change this to your websites description.
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
