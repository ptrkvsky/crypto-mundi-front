import { sanityClient } from "@helpers/sanityClient";

export async function fetchPostsByCategory(categorySlug: string) {
  const query = `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc){
      title,
      slug,
      publishedAt,
      summary,
      readingTime,
      _createdAt,
      "thumbnailUrl": thumbnail.asset->url,
      category->{title, slug}
    }`;
  const params = { categorySlug };

  return sanityClient.fetch(query, params);
}
