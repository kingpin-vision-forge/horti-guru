import Image from "next/image";
import type { Photo as PhotoData } from "@/content/images";
import type { Locale } from "@/lib/i18n";

type Props = {
  photo: PhotoData;
  lang: Locale;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** A photograph on a mist ground. Missing photos keep their space and show their token. */
export function Photo({ photo, lang, sizes, priority, className = "" }: Props) {
  return (
    <div className={`img-frame ${className}`}>
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt[lang]}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover"
        />
      ) : (
        <div role="img" aria-label={photo.alt[lang]} className="flex h-full w-full items-end p-3">
          <span className="text-xs text-slate">[{photo.token}]</span>
        </div>
      )}
    </div>
  );
}
