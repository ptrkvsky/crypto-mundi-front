export const queryHome = `query IndexPageQuery {
  allPost(where: { isHome: {eq: true},  publishedAt: {neq: null} }, sort: {publishedAt: DESC}) {
    _id
    seoTitle
    seoImage {
      asset {
        url
      }
    }
    readingTime
    _createdAt
    thumbnail { 
    	asset{
        url
      }
    }
    title
    slug {
      current
    }
  }
}
`;
