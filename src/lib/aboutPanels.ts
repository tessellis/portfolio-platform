export interface PanelPhoto {
  /** Real photo path. Omit for a placeholder frame. */
  src?: string;
  alt: string;
  /** Shown inside the frame when src is omitted. */
  placeholderLabel?: string;
  /** Optional cutout figure layered on top of this photo (transparent PNG). */
  cutoutSrc?: string;
  cutoutAlt?: string;
  cutoutWidth?: number;
  cutoutHeight?: number;
}

export interface AboutPanelData {
  heading: string;
  paragraph: string;
  photoLeft: PanelPhoto;
  photoRight: PanelPhoto;
  stickers: {
    starNearLeftPolaroid: string;
    starOrange: string;
    flowerBottomLeft: string;
    starPink: string;
    starRed: string;
    starWhiteRight1: string;
    starWhiteRight2: string;
  };
}

const stickerBase = '/images/stickers';

export const aboutPanels: AboutPanelData[] = [
  {
    heading: 'Code & Craft',
    paragraph:
      'Placeholder: how coding first clicked, the path through graduation, and building a career out of making things work — and look good doing it.',
    photoLeft: {
      alt: 'Graduation photo — placeholder',
      placeholderLabel: 'Graduation photo',
    },
    photoRight: {
      alt: 'Coding / workspace photo — placeholder',
      placeholderLabel: 'Coding photo',
    },
    stickers: {
      starNearLeftPolaroid: `${stickerBase}/star-cream-blue.png`,
      starOrange: `${stickerBase}/star-pink-washi.png`,
      flowerBottomLeft: `${stickerBase}/flower-lavender-black.png`,
      starPink: `${stickerBase}/sparkle-orange.png`,
      starRed: `${stickerBase}/star-green-washi.png`,
      starWhiteRight1: `${stickerBase}/star-cream-blue.png`,
      starWhiteRight2: `${stickerBase}/sparkle-orange.png`,
    },
  },
  {
    heading: 'Roots',
    paragraph:
      "Born in New Mexico, raised in Alamos — a tiny pueblo on the skirts of the Madre Occidental mountain range in Sonora. I've spent my life traveling,",
    photoLeft: {
      src: '/images/about/papel-picado.jpg',
      alt: 'Colorful papel picado banners at a market',
      cutoutSrc: '/images/about/dress-cutout.png',
      cutoutAlt: 'Tess as a child in traditional Mexican dress',
      cutoutWidth: 595,
      cutoutHeight: 1018,
    },
    photoRight: {
      src: '/images/about/desert-sunset.jpg',
      alt: 'High desert sagebrush at sunset',
      cutoutSrc: '/images/about/beach-cutout.png',
      cutoutAlt: 'Tess as a toddler on a beach at sunset',
      cutoutWidth: 692,
      cutoutHeight: 811,
    },
    stickers: {
      starNearLeftPolaroid: `${stickerBase}/star-cream-blue.png`,
      starOrange: `${stickerBase}/star-orange-black.png`,
      flowerBottomLeft: `${stickerBase}/flower-lavender-black.png`,
      starPink: `${stickerBase}/splash-cream-pink.png`,
      starRed: `${stickerBase}/star-green-washi.png`,
      starWhiteRight1: `${stickerBase}/star-pink-washi.png`,
      starWhiteRight2: `${stickerBase}/sparkle-orange.png`,
    },
  },
  {
    heading: 'Beyond the Screen',
    paragraph:
      'Placeholder: hobbies, music, and the things that fill the time away from a keyboard — what actually makes up a life outside of code.',
    photoLeft: {
      alt: 'Hobby photo — placeholder',
      placeholderLabel: 'Hobby photo',
    },
    photoRight: {
      alt: 'Music / interests photo — placeholder',
      placeholderLabel: 'Interests photo',
    },
    stickers: {
      starNearLeftPolaroid: `${stickerBase}/star-orange-black.png`,
      starOrange: `${stickerBase}/star-green-washi.png`,
      flowerBottomLeft: `${stickerBase}/flower-lavender-black.png`,
      starPink: `${stickerBase}/star-pink-washi.png`,
      starRed: `${stickerBase}/splash-cream-pink.png`,
      starWhiteRight1: `${stickerBase}/star-cream-blue.png`,
      starWhiteRight2: `${stickerBase}/sparkle-orange.png`,
    },
  },
];