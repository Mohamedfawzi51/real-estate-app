"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;
const SheetTitle = DialogPrimitive.Title;
const SheetDescription = DialogPrimitive.Description;

const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-[100] bg-primary/50 backdrop-blur-sm transition-opacity duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    title?: string;
    description?: string;
  }
>(({ className, children, title = "Menu", description = "Navigation", ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-y-0 z-[101] flex h-full w-[min(100vw,320px)] flex-col border-outline-variant bg-surface shadow-2xl transition-transform duration-300 ease-out outline-none",
        "end-0 border-s data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
        "rtl:end-auto rtl:start-0 rtl:border-e rtl:border-s-0 rtl:data-[state=closed]:-translate-x-full rtl:data-[state=open]:translate-x-0",
        className
      )}
      {...props}
    >
      <SheetTitle className="sr-only">{title}</SheetTitle>
      <SheetDescription className="sr-only">{description}</SheetDescription>
      {children}
      <SheetClose className="absolute top-4 end-4 rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary">
        <X className="size-5" />
        <span className="sr-only">Close</span>
      </SheetClose>
    </DialogPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetPortal,
  SheetOverlay,
  SheetTitle,
  SheetDescription,
};
