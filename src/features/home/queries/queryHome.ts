export const queryHome = `*[_type == "post" && isHome == true && publishedAt != null] | order(publishedAt desc) {
  _id,
  seoTitle,
  "seoImageUrl": seoImage.asset->url,
  readingTime,
  _createdAt,
  "thumbnailUrl": thumbnail.asset->url,
  title,
  "slug": slug.current,
  summary,
  "typePost": type->title
}
`;
