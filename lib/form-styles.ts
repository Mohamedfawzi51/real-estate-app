/** Plain Tailwind classes for auth & sell forms (no shadcn Input/Select). */

/** Auth page inputs — matches original HTML design */
export const authInputClass =
  "w-full min-w-0 border border-outline-variant bg-surface-container-low py-md pe-md ps-12 rounded-xl transition-all focus:border-primary focus:ring-0";

export const authInputIconClass =
  "pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-outline";

export const authOtpInputClass =
  "h-16 w-14 rounded-xl border border-outline-variant bg-surface-container-low text-center text-2xl font-bold transition-all focus:border-secondary focus:ring-1 focus:ring-secondary";

export const authFieldLabelClass =
  "font-label-caps text-label-caps text-on-surface-variant";

export const authSubmitClass =
  "mt-md w-full rounded-xl bg-primary py-md font-headline-md text-on-primary transition-all hover:bg-primary/90 active:scale-95";

export const authSocialBtnClass =
  "flex items-center justify-center gap-sm rounded-xl border border-outline-variant py-md transition-all hover:bg-surface-container-low";

/** Sell page inputs */
export const inputClass =
  "box-border block w-full min-w-0 rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-base text-on-surface shadow-sm transition-all placeholder:text-on-surface-variant/60 hover:border-outline focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

export const inputIconClass =
  "pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-outline";

export const textareaClass =
  "box-border block w-full min-w-0 min-h-[120px] resize-y rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-base text-on-surface shadow-sm transition-all placeholder:text-on-surface-variant/60 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

export const selectClass =
  "box-border block w-full min-w-0 rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-base text-on-surface shadow-sm transition-all focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";

export const fieldLabelClass =
  "font-label-caps text-label-caps text-on-surface-variant";
