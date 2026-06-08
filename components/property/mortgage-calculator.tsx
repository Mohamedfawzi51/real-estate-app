"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/demo-toast";
import { BASE_MONTHLY_PAYMENT, PROPERTY_PRICE } from "@/lib/property-data";

export function MortgageCalculator() {
  const t = useTranslations("propertyDetail.mortgage");
  const { showToast } = useToast();
  const [downPayment, setDownPayment] = useState(20);

  const monthly = Math.round(
    BASE_MONTHLY_PAYMENT * (1 + downPayment / 100)
  ).toLocaleString();

  return (
    <div className="rounded-xl bg-primary-container p-xl text-on-primary">
      <h2 className="font-headline-md text-headline-md mb-md">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 gap-xl md:grid-cols-2">
        <div className="space-y-md">
          <div>
            <label className="font-label-caps text-label-caps mb-xs block text-on-primary-container">
              {t("priceLabel")}
            </label>
            <Input
              readOnly
              defaultValue={PROPERTY_PRICE.toLocaleString()}
              className="border-none bg-white/10 font-data-numeric text-white"
            />
          </div>
          <div>
            <label className="font-label-caps text-label-caps mb-xs block text-on-primary-container">
              {t("downPaymentLabel")} ({downPayment}%)
            </label>
            <input
              type="range"
              min={0}
              max={50}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <label className="font-label-caps text-label-caps mb-xs block text-on-primary-container">
              {t("termLabel")}
            </label>
            <Select defaultValue="25">
              <SelectTrigger className="border-none bg-white/10 font-data-numeric text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="25">{t("terms.0")}</SelectItem>
                <SelectItem value="20">{t("terms.1")}</SelectItem>
                <SelectItem value="15">{t("terms.2")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-white/10 px-md md:border-s">
          <span className="font-label-caps text-label-caps mb-xs text-on-primary-container">
            {t("monthlyLabel")}
          </span>
          <div className="font-data-numeric text-[40px] font-bold text-secondary">
            {monthly} {t("monthlySuffix")}
          </div>
          <Button
            variant="secondary"
            className="mt-md w-full font-bold"
            onClick={() => showToast(t("cta"))}
          >
            {t("cta")}
          </Button>
        </div>
      </div>
    </div>
  );
}
