import { queryHome } from "@features/home/queries/queryHome.ts";
import { sanityClient } from "@helpers/sanityClient";
import type { Post } from "@interfaces/Post";

const sanityPosts = await sanityClient.fetch<Post[]>(queryHome);
const news = sanityPosts
  .filter((post) => post.typePost !== "Article")
  .slice(1, 100);

export async function GET() {
  const siteUrl = "http://www.crypto-mundi.com";

  const result = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${news
    .map((post) => {
      const pubDate = new Date(post?._createdAt).toISOString();
      return `
<url>
  <loc>${siteUrl}/posts/${post?.slug}</loc>
  <news:news>
    <news:publication>
      <news:name>${post?.title}</news:name>
      <news:language>fr</news:language>
    </news:publication>
    <news:publication_date>${pubDate}</news:publication_date>
    <news:title>${post?.seoTitle}</news:title>
  </news:news>
</url>
      `;
    })
    .join("\n")}
</urlset>
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
