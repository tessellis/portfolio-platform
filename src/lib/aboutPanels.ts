export interface CutoutPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
}

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
  /** Size/position for this specific cutout — independent per panel. */
  cutoutPosition?: CutoutPosition;
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
      src: '/images/about/id-card.jpg',
      alt: 'Tess holding her Oregon State University College of Engineering ID card',
    },
    photoRight: {
      src: '/images/about/grad-crowd.jpg',
      alt: 'Rows of graduates in caps and gowns',
      cutoutSrc: '/images/about/grad-cutout.png',
      cutoutAlt: 'Tess at graduation, wearing honor cords',
      cutoutWidth: 868,
      cutoutHeight: 1200,
      cutoutPosition: {
        bottom: '-20%',
        right: '-19%',
        width: '64%',
      },
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
      cutoutPosition: {
        top: '-1%',
        left: '3%',
        width: '25%',
      },
    },
    photoRight: {
      src: '/images/about/desert-sunset.jpg',
      alt: 'High desert sagebrush at sunset',
      cutoutSrc: '/images/about/beach-cutout.png',
      cutoutAlt: 'Tess as a toddler on a beach at sunset',
      cutoutWidth: 692,
      cutoutHeight: 811,
      cutoutPosition: {
        bottom: '-6.5%',
        right: '12%',
        width: '26%',
      },
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