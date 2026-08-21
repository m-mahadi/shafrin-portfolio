// Build-time PDF inspection so the viewer chrome (page count, thumbnail rail,
// file size) is correct in the HTML before any JavaScript runs.
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export interface PdfInfo {
  /** Public URL of the file, e.g. /pdf/konakhola.pdf */
  href: string;
  /** File name shown in the ink toolbar. */
  name: string;
  pages: number;
  bytes: number;
  /** "4.1 MB" */
  size: string;
}

const publicDir = fileURLToPath(new URL('../../public', import.meta.url));
const cache = new Map<string, PdfInfo | null>();

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/**
 * Resolve a PDF referenced from a content file. Returns null when the file has
 * not been supplied yet, which is what puts the viewer into its "PDF slot"
 * state rather than inventing a document.
 */
export async function inspectPdf(file: string | undefined): Promise<PdfInfo | null> {
  if (!file) return null;
  if (cache.has(file)) return cache.get(file) ?? null;

  const name = path.basename(file);
  const absolute = path.join(publicDir, 'pdf', name);

  let info: PdfInfo | null = null;
  try {
    const stats = await stat(absolute);
    const data = new Uint8Array(await readFile(absolute));
    // The legacy build is the one that runs outside a browser.
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const doc = await pdfjs.getDocument({ data, useSystemFonts: false }).promise;
    info = {
      href: `/pdf/${name}`,
      name,
      pages: doc.numPages,
      bytes: stats.size,
      size: formatBytes(stats.size),
    };
    await doc.destroy();
  } catch {
    info = null;
  }

  cache.set(file, info);
  return info;
}
