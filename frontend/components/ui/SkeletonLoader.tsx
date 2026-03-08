import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  variant?: "card" | "text" | "chart" | "circle";
  className?: string;
}

export function SkeletonLoader({ variant = "text", className }: SkeletonLoaderProps) {
  const variants = {
    card: "h-48 rounded-2xl",
    text: "h-4 rounded-md w-3/4",
    chart: "h-64 rounded-2xl",
    circle: "h-12 w-12 rounded-full",
  };

  return (
    <div
      className={cn(
        "bg-white/5 skeleton-pulse",
        variants[variant],
        className
      )}
    />
  );
}
