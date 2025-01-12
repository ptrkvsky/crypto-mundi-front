import { queryAllCategories } from "@features/blog/queries/queryAllCategories";
import { sanityClient } from "@helpers/sanityClient";
import type { Category } from "@interfaces/Category";

// Fonction pour exécuter la requête
export async function fetchAllCategories() {
  return sanityClient.fetch<Category[]>(queryAllCategories);
}
