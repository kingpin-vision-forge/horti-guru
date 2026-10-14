/**
 * next/image loader. Unsplash photos are resized and converted by Unsplash's
 * own CDN; local files are served as they are (they are already WebP).
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const sep = src.includes("?") ? "&" : "?";
    return `${src}${sep}w=${width}&q=${quality ?? 65}&auto=format&fit=crop`;
  }
  return src;
}
