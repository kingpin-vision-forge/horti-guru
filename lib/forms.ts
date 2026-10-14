import type { Dict } from "@/content/dictionaries/en";
import { cropIds, cropNames } from "@/content/crops";
import type { Field, FormText } from "@/components/ui/WhatsAppForm";
import type { Locale } from "@/lib/i18n";

export function formText(f: Dict["forms"], title: string): FormText {
  return {
    submit: f.submit,
    required: f.required,
    phoneInvalid: f.phoneInvalid,
    note: f.note,
    messageTitle: title,
    notConfigured: f.notConfigured,
  };
}

export function cropField(lang: Locale, f: Dict["forms"], required = false): Field {
  return {
    name: "crop",
    label: f.crop,
    type: "select",
    options: [...cropIds.map((id) => cropNames[id][lang]), f.otherCrop],
    required,
  };
}
