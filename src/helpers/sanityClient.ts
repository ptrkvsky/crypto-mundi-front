import { createClient } from "@sanity/client";
import config from "src/config";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

export const sanityClient = createClient({
  projectId: config.projectId,
  dataset: config.mode,
  token: import.meta.env.SANITY_SECRET_TOKEN,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: formattedDate, // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
