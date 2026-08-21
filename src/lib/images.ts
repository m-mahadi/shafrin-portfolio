// Image fills exported from the Paper file. Keys match the `heroImage`
// value used in the project content collection.
import type { ImageMetadata } from 'astro';

import safeAir from '../assets/images/23WBGJ1ZWYDMYEP2N911KWCD94.jpg';
import forbiddenVoice from '../assets/images/1HDHSKDZ8RKZH6KH5B1TAS0XWT.jpg';
import konakholaPortrait from '../assets/images/2S6TFXRKFT0ER92BGQ2KJX4PX8.jpg';
import konakholaWide from '../assets/images/0634G3QTKDCK7ZXW9RAFH8AQ57.jpg';
import illusoryPerception from '../assets/images/4K0T8R8ZTJ3M86PFG9QHBRMD98.jpg';
import earthquake from '../assets/images/328YJC3XKVH3JRNVRCH4Z6641D.jpg';

export const images: Record<string, ImageMetadata> = {
  'safe-air': safeAir,
  'forbidden-voice': forbiddenVoice,
  'konakhola-portrait': konakholaPortrait,
  'konakhola-wide': konakholaWide,
  'illusory-perception': illusoryPerception,
  'earthquake-puran-dhaka': earthquake,
};

export function image(key: string | undefined): ImageMetadata | undefined {
  return key ? images[key] : undefined;
}
