"use client";

import { useEffect, type ReactNode } from "react";
import { Icon } from "./Icon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  labelledBy?: string;
  closeLabel?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, labelledBy, closeLabel = "Close", children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
    >
      <button
        aria-label={closeLabel}
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(20,18,26,0.55)] backdrop-blur-sm animate-[fadeIn_180ms_var(--ease)]"
      />
      <div
        className="relative w-full max-w-[760px] max-h-[92vh] overflow-y-auto bg-bg-card border border-brand-border rounded-t-[28px] md:rounded-[var(--r-xl)] shadow-[var(--shadow-lg)] animate-[modalIn_240ms_var(--ease)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-4 right-4 z-10 w-10 h-10 inline-flex items-center justify-center rounded-full bg-bg-card border border-brand-border text-ink hover:bg-bg-raised transition"
        >
          <Icon name="x" size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
