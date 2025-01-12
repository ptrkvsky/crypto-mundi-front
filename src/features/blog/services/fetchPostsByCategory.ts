import { sanityClient } from "@helpers/sanityClient";

// Fonction pour récupérer les articles
export async function fetchArticlesByCategory(categorySlug: string) {
  const query = `*[_type == "post" && category->slug.current == $categorySlug]{
      title,
      slug,
      category->{title, slug}
    }`;
  const params = { categorySlug };

  return sanityClient.fetch(query, params);
}
