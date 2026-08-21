import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All fourteen, in the fixed 01–14 order. */
export async function allProjects(): Promise<Project[]> {
  const entries = await getCollection('projects');
  return entries.sort((a, b) => a.data.number.localeCompare(b.data.number));
}

export async function byNumber(number: string): Promise<Project | undefined> {
  return (await allProjects()).find((p) => p.data.number === number);
}

export async function neighbours(number: string) {
  const list = await allProjects();
  const index = list.findIndex((p) => p.data.number === number);
  return {
    previous: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
  };
}

export async function inChapter(numeral: string): Promise<Project[]> {
  return (await allProjects()).filter((p) => p.data.chapter === numeral);
}

export function href(project: Project) {
  return `/portfolio/${project.data.slug}`;
}

/** Bengali strings must render in Noto Serif Bengali. */
export function isBengali(text: string) {
  return /[ঀ-৿]/.test(text);
}
