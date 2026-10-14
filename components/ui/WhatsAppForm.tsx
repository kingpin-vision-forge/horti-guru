"use client";

import { useId, useState } from "react";
import { whatsappMessageHref } from "@/lib/whatsapp";

export type Field =
  | { name: string; label: string; type: "text" | "tel" | "number"; required?: boolean; hint?: string }
  | { name: string; label: string; type: "textarea"; required?: boolean; hint?: string }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean; hint?: string };

export type FormText = {
  submit: string;
  required: string;
  phoneInvalid: string;
  /** Shown above the button: the form opens WhatsApp with the message filled in. */
  note: string;
  /** First line of the WhatsApp message. */
  messageTitle: string;
  notConfigured: string;
};

/**
 * A short form that hands off to WhatsApp with the answers prefilled.
 * Labels sit above fields; errors are tied to fields with aria-describedby.
 */
export function WhatsAppForm({ fields, t, whatsappReady }: { fields: Field[]; t: FormText; whatsappReady: boolean }) {
  const id = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [blocked, setBlocked] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = (values[f.name] ?? "").trim();
      if (f.required && !v) next[f.name] = t.required;
      else if (f.type === "tel" && v && v.replace(/\D/g, "").length < 10) next[f.name] = t.phoneInvalid;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const first = fields.find((f) => errors[f.name] || (f.required && !(values[f.name] ?? "").trim()));
      if (first) document.getElementById(`${id}-${first.name}`)?.focus();
      return;
    }
    if (!whatsappReady) {
      setBlocked(true);
      return;
    }
    const link = whatsappMessageHref(
      t.messageTitle,
      fields.map((f) => [f.label, values[f.name]]),
    );
    window.open(link, "_blank", "noopener");
  };

  const control =
    "mt-2 block w-full rounded-lg border bg-white px-4 text-base text-ink transition-colors duration-150 focus:outline-2 focus:outline-offset-2 focus:outline-turmeric";

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-6">
      {fields.map((f) => {
        const fid = `${id}-${f.name}`;
        const err = errors[f.name];
        const describedBy = [err ? `${fid}-err` : "", f.hint ? `${fid}-hint` : ""].filter(Boolean).join(" ") || undefined;
        const border = err ? "border-[#B42318]" : "border-line";
        const common = {
          id: fid,
          name: f.name,
          value: values[f.name] ?? "",
          "aria-invalid": err ? true : undefined,
          "aria-describedby": describedBy,
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            setValues((v) => ({ ...v, [f.name]: e.target.value }));
            if (err) setErrors((x) => ({ ...x, [f.name]: "" }));
          },
        };
        return (
          <div key={f.name}>
            <label htmlFor={fid} className="font-semibold">
              {f.label}
              {f.required && <span aria-hidden="true"> *</span>}
            </label>
            {f.hint && (
              <p id={`${fid}-hint`} className="mt-1 text-sm text-slate">
                {f.hint}
              </p>
            )}
            {f.type === "textarea" ? (
              <textarea {...common} rows={4} className={`${control} ${border} py-3`} />
            ) : f.type === "select" ? (
              <select {...common} className={`${control} ${border} h-12`}>
                <option value="" />
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                {...common}
                type={f.type === "number" ? "text" : f.type}
                inputMode={f.type === "number" ? "decimal" : f.type === "tel" ? "tel" : undefined}
                autoComplete={f.type === "tel" ? "tel" : f.name === "name" ? "name" : undefined}
                className={`${control} ${border} h-12`}
              />
            )}
            {err && (
              <p id={`${fid}-err`} className="swap mt-2 text-sm font-semibold text-[#B42318]">
                {err}
              </p>
            )}
          </div>
        );
      })}
      <p className="text-sm text-slate">{t.note}</p>
      {blocked && (
        <p role="status" className="swap rounded-lg bg-mist p-4 text-sm">
          {t.notConfigured}
        </p>
      )}
      <button type="submit" className="btn btn-primary w-full sm:w-auto sm:justify-self-start">
        {t.submit}
      </button>
    </form>
  );
}
