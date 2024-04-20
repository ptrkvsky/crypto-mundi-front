import { buildSanityImage } from "@helpers/buildSanityImage";
import { portableTextToHtml } from "astro-sanity";

const customComponents = {
  types: {
    image: (image: any) => {
      const sanityImage = buildSanityImage(image.value.asset._ref);
      const imgSrc = sanityImage.auto("format").url();

      return `<figure>
          <img loading="lazy" src="${imgSrc}" alt="" />
          
        </figure>`;
    },
  },

  marks: {
    // Ex. 2: rendering a custom `link` annotation
    internalLink: ({ value, text }: any) => {
      const slug = value.slug.current;
      const { title } = value;
      console.log(value);

      return `<a title="${title}" href="${slug}">
          ${text}
        </a>`;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
