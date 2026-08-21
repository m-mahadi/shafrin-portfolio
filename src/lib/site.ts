// Site-wide constants read from the Paper artboards.
// Her phone number is deliberately absent from this project; only the ULAB
// address is publishable.

export const site = {
  name: 'Shafrin Akter Chowdhury',
  tagline: 'Portfolio',
  email: 'shafrin.akter.msj@ulab.edu.bd',
  personalEmail: 'shafrinakter7046@gmail.com',
  phone: '+8801968488517',
  phoneLabel: '+880 1968 488517',
  linkedin: 'https://www.linkedin.com/in/shafrin-akter-chowdhury-b8a81a32a',
  resume: '/pdf/shafrin-akter-chowdhury-resume.pdf',
  blog: 'https://shafrinakter.blogspot.com',
  blogLabel: 'shafrinakter.blogspot.com',
  location: 'Keraniganj, Dhaka, Bangladesh',
  department: 'Media Studies & Journalism, ULAB',
  colophon: 'Portfolio Report · MSJ4299 · Summer 2026',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/extra-curricular', label: 'Extra Curricular' },
  { href: '/internship', label: 'Internship' },
  { href: '/contact', label: 'Contact' },
] as const;

// The mobile sheet on artboard 03 labels Internship in full.
export const menuNav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/extra-curricular', label: 'Extra Curricular' },
  { href: '/internship', label: 'Internship Report' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerNav = [
  [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/extra-curricular', label: 'Extra Curricular' },
  ],
  [
    { href: '/internship', label: 'Internship Report', short: 'Internship' },
    { href: '/contact', label: 'Contact' },
    { href: site.blog, label: 'Blog ↗', external: true },
  ],
] as const;

// `countShort` is the form artboard 05 draws at 390.
export const chapters = [
  { numeral: 'I', name: 'Air, waste and the image', count: 'Four projects', countShort: 'Four' },
  { numeral: 'II', name: 'Mind, silence, stigma', count: 'Two projects', countShort: 'Two' },
  { numeral: 'III', name: 'Care and neglect', count: 'Two projects', countShort: 'Two' },
  { numeral: 'IV', name: 'Field and community', count: 'Two projects', countShort: 'Two' },
  { numeral: 'V', name: 'Risk and information', count: 'Four projects', countShort: 'Four' },
] as const;

export type ChapterNumeral = (typeof chapters)[number]['numeral'];

export function chapterOf(numeral: string) {
  return chapters.find((c) => c.numeral === numeral) ?? chapters[0];
}
