import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    /** Fixed index, 01–14, running straight down /portfolio. */
    number: z.string().regex(/^\d{2}$/),
    title: z.string(),
    titleBn: z.string().optional(),
    subtitle: z.string().optional(),
    course: z.string(),
    courseCode: z.string(),
    semester: z.string(),
    chapter: z.enum(['I', 'II', 'III', 'IV', 'V']),
    /** "MSJ 2202 · Mass Communication · Fall 2023", as drawn on the cards. */
    cardMeta: z.string(),
    /** "Wearable Art · 2023", as drawn in the home index. */
    listFormat: z.string(),
    format: z.string(),
    role: z.string(),
    /** Card blurb from the design. */
    summary: z.string(),
    /** Shorter blurb used only by the three home features. */
    homeSummary: z.string().optional(),
    /** Long-form copy from the portfolio report. */
    description: z.string(),
    justification: z.string(),
    outcomesLead: z.string(),
    outcomes: z.array(z.string()).default([]),
    method: z.string().optional(),
    site: z.string().optional(),
    /** Image key used on the /portfolio plate. */
    plateImage: z.string().optional(),
    /** Image key used on the project page hero. */
    heroImage: z.string().optional(),
    heroCaption: z.string().optional(),
    imageAlt: z.string().optional(),
    /** File name under public/pdf. Absent until Shafrin supplies the file. */
    pdf: z.string().optional(),
    pdfPages: z.number().optional(),
    pdfBytes: z.number().optional(),
  }),
});

export const collections = { projects };
