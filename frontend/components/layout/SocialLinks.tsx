"use client";

import { Github, Linkedin, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  size?: number;
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.83 4.83 0 01-1-.11z" />
    </svg>
  );
}

function GitLabIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
    </svg>
  );
}

const socialItems = [
  { key: "tiktok", icon: TikTokIcon, label: "TikTok" },
  { key: "facebook", icon: Facebook, label: "Facebook" },
  { key: "github", icon: Github, label: "GitHub" },
  { key: "gitlab", icon: GitLabIcon, label: "GitLab" },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
] as const;

export function SocialLinks({ className, size = 20 }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialItems.map(({ key, icon: Icon, label }) => (
        <a
          key={key}
          href="#"
          aria-label={label}
          className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
