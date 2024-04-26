import { buildSanityImage } from "@helpers/buildSanityImage";
import { extractYouTubeId } from "@helpers/extractYoutubeId";
import { toHTML } from "@portabletext/to-html";
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
    blockDiscover: (blockDiscover: any) => {
      return `<p class="blockHighlight">
        <span class="guillemet"><img role="presentation" alt="" src="/assets/svg/quote.svg"></span>
          ${blockDiscover.value.text}
        </p>`;
    },
    blockHighlight: (blockHighlight: any) => {
      return `<p class="blockHighlight">
        <span class="guillemet"><img role="presentation" alt="" src="/assets/svg/quote.svg"></span>
          ${blockHighlight.value.text}
        </p>`;
    },

    blockYoutube: (blockYoutube: any) => {
      const videoid = extractYouTubeId(blockYoutube.value.url);

      return `<div class="youtube-container"><iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/PnTEFjpOyuM?si=${videoid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
    },

    blockKeyTakeaways: (blockKeyTakeaways: any) => {
      const keyTakeaways = toHTML(blockKeyTakeaways.value.text);

      return `<div class="key-takeaways">
      <p class="key-takeaways__title">Les points clefs :</p>
      ${keyTakeaways}
      </div>`;
    },
  },

  marks: {
    internalLink: (internalLink: any) => {
      const slugCurrent = internalLink?.value?.slug?.current;
      const slug = internalLink?.value?.slug;
      const { title } = internalLink?.value;

      console.log(slug, title);
      if ((slug || slugCurrent) && title)
        return `<a title="${title}" href="${slug ?? slugCurrent}">
          ${internalLink.text}
        </a>`;
    },
    discover: ({ text, value }: any) => {
      const slug = value?.slug;
      const { title } = value;

      if (slug && title)
        return `<p class="discover">
        <span class="decouvrir">Découvrir :</span>
        <a title="${title}" href="${slug}">
          ${text}
        </a></p>`;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
