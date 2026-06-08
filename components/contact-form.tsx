"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/demo-toast";

export function ContactForm() {
  const t = useTranslations("pages.contact");
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(t("success"));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-md">
      <Input placeholder={t("name")} required />
      <Input type="email" placeholder={t("email")} required />
      <Textarea rows={5} placeholder={t("message")} required />
      <Button type="submit" className="w-full">
        {t("send")}
      </Button>
    </form>
  );
}
