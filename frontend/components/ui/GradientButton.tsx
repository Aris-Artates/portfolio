import Link from "next/link";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function GradientButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: GradientButtonProps) {
  const gradientClass =
    variant === "primary"
      ? "bg-gradient-to-r from-[#667eea] to-[#764ba2]"
      : "bg-gradient-to-r from-[#f093fb] to-[#f5576c]";

  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "px-6 py-3 rounded-xl font-medium text-white",
    gradientClass,
    "transition-all duration-300",
    "hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5",
    "active:translate-y-0",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
