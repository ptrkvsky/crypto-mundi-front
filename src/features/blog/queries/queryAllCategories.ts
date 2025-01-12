export const queryAllCategories = `*[_type == "category"]{
    _id,
    title,
    description,
    "slug": slug.current
  }`;
