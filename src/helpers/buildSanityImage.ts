import { sanityClient } from "@helpers/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function buildSanityImage(source: string) {
  return builder.image(source);
}
