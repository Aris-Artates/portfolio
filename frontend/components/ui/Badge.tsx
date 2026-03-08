import { cn } from "@/lib/utils";
import { COMMIT_TYPE_COLORS } from "@/lib/constants";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  variant?: "default" | "commit-type";
  commitType?: string;
  className?: string;
}

export function Badge({
  children,
  color,
  variant = "default",
  commitType,
  className,
}: BadgeProps) {
  const bgColor =
    variant === "commit-type" && commitType
      ? COMMIT_TYPE_COLORS[commitType] || "#94a3b8"
      : color || "#667eea";

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        className
      )}
      style={{
        backgroundColor: `${bgColor}20`,
        color: bgColor,
        border: `1px solid ${bgColor}40`,
      }}
    >
      {children}
    </span>
  );
}
