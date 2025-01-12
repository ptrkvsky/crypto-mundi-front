/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

//PUBLIC_SANITY_PROJECT_ID="g8dp9xkw"
PUBLIC_SANITY_DATASET = "production";
PUBLIC_SANITY_API_VERSION = "v1";
PUBLIC_SANITY_GRAPHQL_URL =
  "https://g8dp9g8ds9xkwxkw.api.sanity.io/v2023-08-01/graphql/production/default";
PUBLIC_WEBSITE_READ = "string";
interface ImportMetaEnv {
  readonly PUBLIC_DOMAIN: string;
  readonly PUBLIC_POKEAPI: string;
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly PUBLIC_SANITY_API_VERSION: string;
  readonly PUBLIC_SANITY_GRAPHQL_URL: string;
  readonly PUBLIC_WEBSITE_READ: string;
  readonly PUBLIC_PUBLIC_DOMAIN: string;
  // more env variables...
}
