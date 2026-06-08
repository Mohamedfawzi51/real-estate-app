"use client";

import { useTranslations } from "next-intl";
import { Banknote, ChevronDown, Home, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/demo-toast";
import {
  fieldLabelClass,
  inputClass,
  inputIconClass,
  selectClass,
  textareaClass,
} from "@/lib/form-styles";

const PROPERTY_TYPES = ["villa", "apartment", "penthouse", "land"] as const;

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-w-0 space-y-2">
      <span className={fieldLabelClass}>{label}</span>
      {children}
    </div>
  );
}

export function SellForm() {
  const t = useTranslations("pages.sell");
  const { showToast } = useToast();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        showToast(t("success"));
      }}
      className="w-full min-w-0 space-y-md"
    >
      <Field label={t("propertyTitle")}>
        <div className="relative w-full min-w-0">
          <Home className={inputIconClass} />
          <input
            type="text"
            required
            placeholder={t("propertyTitle")}
            className={`${inputClass} ps-11`}
          />
        </div>
      </Field>

      <Field label={t("propertyType")}>
        <div className="relative w-full min-w-0">
          <select required defaultValue="" className={`${selectClass} appearance-none pe-10`}>
            <option value="" disabled>
              {t("propertyType")}
            </option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {t(`propertyTypes.${type}`)}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-outline" />
        </div>
      </Field>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <Field label={t("location")}>
          <div className="relative w-full min-w-0">
            <MapPin className={inputIconClass} />
            <input
              type="text"
              required
              placeholder={t("location")}
              className={`${inputClass} ps-11`}
            />
          </div>
        </Field>
        <Field label={t("price")}>
          <div className="relative w-full min-w-0">
            <Banknote className={inputIconClass} />
            <input
              type="text"
              required
              placeholder="AED"
              className={`${inputClass} ps-11`}
            />
          </div>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <Field label={t("email")}>
          <div className="relative w-full min-w-0">
            <Mail className={inputIconClass} />
            <input
              type="email"
              required
              placeholder={t("email")}
              className={`${inputClass} ps-11`}
            />
          </div>
        </Field>
        <Field label={t("phone")}>
          <div className="relative w-full min-w-0">
            <Phone className={inputIconClass} />
            <input
              type="tel"
              required
              placeholder={t("phone")}
              className={`${inputClass} ps-11`}
            />
          </div>
        </Field>
      </div>

      <Field label={t("details")}>
        <textarea
          rows={4}
          required
          placeholder={t("details")}
          className={textareaClass}
        />
      </Field>

      <Button type="submit" className="w-full rounded-xl py-3 font-headline-md">
        {t("cta")}
      </Button>
    </form>
  );
}
