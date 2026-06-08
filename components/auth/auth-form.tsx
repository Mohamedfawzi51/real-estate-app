"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  Briefcase,
  Building2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  MailOpen,
  Quote,
  User,
} from "lucide-react";
import { Link, useRouter } from "@/i18n/navigation";
import {
  authFieldLabelClass,
  authInputClass,
  authInputIconClass,
  authOtpInputClass,
  authSocialBtnClass,
  authSubmitClass,
} from "@/lib/form-styles";
import { useToast } from "@/components/demo-toast";
import { authHeroImage, authTestimonialAvatar } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

type AuthMode = "login" | "signup";
type AuthStep = "form" | "otp";
type Role = "buyer" | "owner" | "agent";

export function AuthPage() {
  const t = useTranslations("auth");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  const [mode, setMode] = useState<AuthMode>("login");
  const [step, setStep] = useState<AuthStep>("form");
  const [role, setRole] = useState<Role>("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [formExiting, setFormExiting] = useState(false);
  const [otpEntering, setOtpEntering] = useState(true);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const m = searchParams.get("mode");
    if (m === "signup") setMode("signup");
    else if (m === "login") setMode("login");
  }, [searchParams]);

  useEffect(() => {
    if (step === "otp") {
      setOtpEntering(true);
      const id = requestAnimationFrame(() => setOtpEntering(false));
      return () => cancelAnimationFrame(id);
    }
  }, [step]);

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setStep("form");
    setFormExiting(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormExiting(true);
    window.setTimeout(() => {
      setStep("otp");
      setFormExiting(false);
    }, 400);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 3) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = () => {
    showToast(t("successToast"));
    router.push("/");
  };

  const roles: { id: Role; icon: React.ComponentType<{ className?: string }> }[] =
    [
      { id: "buyer", icon: User },
      { id: "owner", icon: Building2 },
      { id: "agent", icon: Briefcase },
    ];

  return (
    <main className="flex min-h-screen">
      {/* Left: luxury visual panel */}
      <section className="relative hidden overflow-hidden bg-primary-container lg:flex lg:w-1/2">
        <Image
          src={authHeroImage}
          alt=""
          fill
          className="scale-105 object-cover opacity-80 mix-blend-overlay transition-transform duration-[10000ms] hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-primary-container/30" />
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-margin-desktop">
          <div className="flex items-center gap-sm">
            <div className="flex size-12 items-center justify-center rounded-lg bg-secondary-fixed shadow-lg">
              <Building2 className="size-6 text-on-secondary-fixed" />
            </div>
            <h1 className="font-headline-md text-headline-md tracking-tight text-inverse-on-surface">
              Luxury Estate
            </h1>
          </div>
          <div className="glass-card mb-xl max-w-lg rounded-xl border border-white/20 p-xl">
            <Quote className="mb-md size-10 fill-secondary text-secondary" />
            <p className="font-body-lg text-body-lg mb-md italic leading-relaxed text-on-surface">
              {t("testimonial")}
            </p>
            <div className="flex items-center gap-sm">
              <Image
                src={authTestimonialAvatar}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full border-2 border-secondary object-cover"
              />
              <div>
                <p className="font-label-caps text-label-caps text-primary">
                  {t("testimonialAuthor")}
                </p>
                <p className="font-data-numeric text-data-numeric text-on-surface-variant">
                  {t("testimonialRole")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right: auth form */}
      <section className="flex w-full items-center justify-center bg-surface p-margin-mobile md:p-margin-desktop lg:w-1/2">
        <div className="w-full max-w-md space-y-xl">
          <div className="space-y-md text-center lg:text-start">
            <div className="mb-lg flex justify-center lg:hidden">
              <Link href="/" className="flex items-center gap-xs">
                <Building2 className="size-8 text-secondary" />
                <span className="font-headline-md text-headline-md text-primary">
                  Luxury Estate
                </span>
              </Link>
            </div>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
              {mode === "login" ? t("loginTitle") : t("signupTitle")}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {mode === "login" ? t("loginSubtitle") : t("signupSubtitle")}
            </p>
            <div className="mx-auto mt-xl flex w-full max-w-xs rounded-lg bg-surface-container p-base lg:mx-0">
              <button
                type="button"
                onClick={() => switchMode("login")}
                className={cn(
                  "flex-1 rounded-md py-xs font-label-caps text-label-caps transition-all duration-300",
                  mode === "login"
                    ? "bg-surface text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {t("loginTab")}
              </button>
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className={cn(
                  "flex-1 rounded-md py-xs font-label-caps text-label-caps transition-all duration-300",
                  mode === "signup"
                    ? "bg-surface text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {t("signupTab")}
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            {step === "otp" ? (
              <div
                className={cn(
                  "form-transition space-y-lg",
                  otpEntering && "translate-y-4 opacity-0"
                )}
              >
                <div className="space-y-sm text-center">
                  <MailOpen className="mx-auto size-12 text-secondary" />
                  <h3 className="font-headline-md text-headline-md">
                    {t("otpTitle")}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {t("otpSubtitle")}
                  </p>
                </div>
                <div className="flex justify-center gap-sm" dir="ltr">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        otpRefs.current[i] = el;
                      }}
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className={authOtpInputClass}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={verifyOtp}
                  className={authSubmitClass}
                >
                  {t("verify")}
                </button>
                <p className="text-center font-body-md text-on-surface-variant">
                  {t("resendPrompt")}{" "}
                  <button
                    type="button"
                    className="font-bold text-secondary hover:underline"
                    onClick={() => showToast(t("resendToast"))}
                  >
                    {t("resend")}
                  </button>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={cn(
                  "form-transition space-y-md",
                  formExiting && "translate-y-4 opacity-0"
                )}
              >
                {mode === "signup" && (
                  <div className="space-y-sm">
                    <p className="mb-xs font-label-caps text-label-caps text-on-surface-variant">
                      {t("roleLabel")}
                    </p>
                    <div className="grid grid-cols-3 gap-xs">
                      {roles.map(({ id, icon: Icon }) => (
                        <label key={id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="role"
                            value={id}
                            checked={role === id}
                            onChange={() => setRole(id)}
                            className="peer hidden"
                          />
                          <div className="flex flex-col items-center rounded-xl border border-outline-variant p-sm transition-all peer-checked:border-secondary peer-checked:bg-secondary-container">
                            <Icon className="size-5 text-primary" />
                            <span className="mt-xs font-label-caps text-[10px]">
                              {t(`roles.${id}`)}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-xs">
                  <label
                    htmlFor="auth-email"
                    className={authFieldLabelClass}
                  >
                    {t("email")}
                  </label>
                  <div className="relative">
                    <Mail className={authInputIconClass} />
                    <input
                      id="auth-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      className={authInputClass}
                    />
                  </div>
                </div>

                <div className="space-y-xs">
                  <label
                    htmlFor="auth-password"
                    className={authFieldLabelClass}
                  >
                    {t("password")}
                  </label>
                  <div className="relative">
                    <Lock className={authInputIconClass} />
                    <input
                      id="auth-password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      className={cn(authInputClass, "pe-12")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute end-4 top-1/2 -translate-y-1/2 text-outline transition-colors hover:text-primary"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                    </button>
                  </div>
                </div>

                {mode === "login" && (
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-xs">
                      <input
                        type="checkbox"
                        className="size-5 rounded border-outline-variant text-primary focus:ring-primary"
                      />
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        {t("remember")}
                      </span>
                    </label>
                    <Link
                      href="/contact"
                      className="font-label-caps text-label-caps text-secondary hover:underline"
                    >
                      {t("forgot")}
                    </Link>
                  </div>
                )}

                <button type="submit" className={authSubmitClass}>
                  {mode === "login" ? t("loginTab") : t("signupTab")}
                </button>

                <div className="relative py-md">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-outline-variant" />
                  </div>
                  <div className="relative flex justify-center bg-surface px-md font-label-caps text-label-caps text-on-surface-variant">
                    {t("orContinue")}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-md">
                  <button
                    type="button"
                    className={authSocialBtnClass}
                    onClick={() => showToast(t("socialToast"))}
                  >
                    <GoogleIcon />
                    <span className="font-label-caps text-label-caps">Google</span>
                  </button>
                  <button
                    type="button"
                    className={authSocialBtnClass}
                    onClick={() => showToast(t("socialToast"))}
                  >
                    <AppleIcon />
                    <span className="font-label-caps text-label-caps">Apple</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-md border-t border-outline-variant pt-xl lg:justify-start">
            <Link
              href="/terms"
              className="font-label-caps text-[10px] uppercase text-on-surface-variant hover:text-secondary"
            >
              {t("terms")}
            </Link>
            <Link
              href="/privacy"
              className="font-label-caps text-[10px] uppercase text-on-surface-variant hover:text-secondary"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/faq"
              className="font-label-caps text-[10px] uppercase text-on-surface-variant hover:text-secondary"
            >
              {t("help")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C4.31 16.88 3.51 10.3 6.07 7.03c1.28-1.55 2.84-1.63 4.21-.92.89.47 1.5.51 2.37 0 1.25-.74 3.03-.84 4.38.74-2.84 2.8-2.38 7.9 1.18 9.53-.33.89-.78 1.9-1.16 2.91zM12.03 7.25c-.02-2.23 1.51-4.07 3.5-4.25.2 2.38-1.74 4.54-3.5 4.25z" />
    </svg>
  );
}
