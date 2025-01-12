export const queryAllCategories = `*[_type == "category"]{
  _id,
  title,
  slug {
    current
  }
}
`;
