"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastContextValue = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    window.setTimeout(() => setMessage(null), 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={cn(
          "pointer-events-none fixed bottom-6 start-1/2 z-[100] -translate-x-1/2 transition-all duration-300",
          message ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        {message && (
          <div className="flex items-center gap-sm rounded-xl border border-outline-variant bg-surface-container-lowest px-md py-sm shadow-xl">
            <CheckCircle2 className="size-5 text-secondary" />
            <span className="font-body-md text-sm">{message}</span>
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return { showToast: () => {} };
  }
  return ctx;
}
