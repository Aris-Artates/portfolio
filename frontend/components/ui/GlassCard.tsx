"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10",
        "bg-white/5 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.36)]",
        "p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}
