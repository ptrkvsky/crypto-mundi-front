import { queryAllPosts } from "@features/blog/queries/queryAllPosts";
import { sanityClient } from "@helpers/sanityClient";
import type { Post } from "@interfaces/Post";

const articles = await sanityClient.fetch<Post[]>(queryAllPosts);

export async function GET() {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const siteName = import.meta.env.PUBLIC_SITE_NAME;

  const result = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${siteName}</title>
  <link>${siteUrl}</link>
  <description>Restez informé avec les dernières actualités sur les crypto-monnaies. Analyses, tendances et nouvelles sur Bitcoin, Ethereum et plus encore sur Crypto Mundi.</description>
  ${articles
    .map((post) => {
      const pubDate = new Date(post._createdAt).toUTCString();
      return `
    <item>
      <title>${post.title}</title>
      <link>${siteUrl}/posts/${post.slug}</link>
      <description>${post.summary}</description>
      <pubDate>${pubDate}</pubDate>
    </item>
      `;
    })
    .join("\n")}
</channel>
</rss>
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
