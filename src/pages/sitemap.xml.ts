import { queryHome } from "@features/home/queries/queryHome.ts";
import { sanityClient } from "@helpers/sanityClient";
import type { Post } from "@interfaces/Post";

const sanityPosts = await sanityClient.fetch<Post[]>(queryHome);
const articles = sanityPosts.filter((post) => post.typePost === "Article");

export async function GET() {
  const siteUrl = "http://www.crypto-mundi.com";

  const result = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  ${articles
    .map((post) => {
      const lastMod = new Date(
        post?._updatedAt || post._createdAt,
      ).toISOString();
      return `
<url>
  <loc>${siteUrl}/posts/${post?.slug}</loc>
  <lastmod>${lastMod}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
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
