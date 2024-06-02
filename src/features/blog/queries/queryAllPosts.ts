export const queryAllPosts = `*[_type == "post"]{
  _id,
  seoTitle,
  seoDescription,
  summary,
  "seoImageUrl": seoImage.asset->url,
  readingTime,
  "mainImageUrl": mainImage.asset->url,
  title,
  "slug": slug.current,
  _updatedAt,
  _createdAt,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "reference": reference->{
          title,
          slug
        }
      }
    },
    _type == "blockDiscover" => {
      discover {
        reference-> {
          title,
          slug
        }
      }
    },
    _type == "blockHighlight" => {
      text
    },
    _type == "blockYoutube" => {
      url
    },
    _type == "blockKeyTakeaways" => {
      text
    }
  }
}
`;
