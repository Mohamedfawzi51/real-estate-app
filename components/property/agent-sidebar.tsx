"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { BadgeCheck, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/demo-toast";
import { agentImage } from "@/lib/property-data";

export function AgentSidebar() {
  const t = useTranslations("propertyDetail.agent");
  const { showToast } = useToast();

  return (
    <aside className="relative">
      <div className="sticky top-24 space-y-md">
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-xl shadow-sm">
          <div className="mb-xl flex items-center gap-md">
            <Image
              src={agentImage}
              alt={t("name")}
              width={80}
              height={80}
              className="size-20 rounded-full border-2 border-secondary object-cover"
            />
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">
                {t("name")}
              </h3>
              <p className="font-label-caps text-label-caps text-secondary">
                {t("title")}
              </p>
            </div>
          </div>

          <div className="mb-xl space-y-sm">
            <Button
              className="w-full py-md font-label-caps text-label-caps"
              onClick={() => showToast(t("callNow"))}
            >
              <Phone className="size-5" />
              {t("callNow")}
            </Button>
            <Button
              variant="outline"
              className="w-full border-2 border-secondary py-md text-secondary hover:bg-secondary/5 font-label-caps text-label-caps"
              onClick={() => showToast(t("whatsapp"))}
            >
              <MessageCircle className="size-5" />
              {t("whatsapp")}
            </Button>
          </div>

          <form
            className="space-y-md border-t border-outline-variant pt-xl"
            onSubmit={(e) => {
              e.preventDefault();
              showToast(t("submit"));
            }}
          >
            <h4 className="font-label-caps text-label-caps mb-md text-primary">
              {t("formTitle")}
            </h4>
            <Input placeholder={t("namePlaceholder")} />
            <Input type="email" placeholder={t("emailPlaceholder")} />
            <Input type="tel" placeholder={t("phonePlaceholder")} />
            <Textarea
              rows={3}
              placeholder={t("messagePlaceholder")}
            />
            <Button type="submit" className="w-full py-md font-bold">
              {t("submit")}
            </Button>
          </form>
        </div>

        <div className="flex items-center gap-md rounded-xl bg-secondary-container p-md text-on-secondary-container">
          <BadgeCheck className="size-8 shrink-0 fill-current" />
          <div>
            <div className="font-label-caps font-bold">{t("verifiedTitle")}</div>
            <div className="text-[10px]">{t("verifiedDesc")}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
