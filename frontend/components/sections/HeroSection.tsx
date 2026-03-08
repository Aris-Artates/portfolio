"use client";

import { MapPin } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c1d]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Profile image placeholder */}
        <div className="mb-8 inline-flex">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] p-[3px]">
            <div className="w-full h-full rounded-full bg-[#0c0c1d] flex items-center justify-center">
              <span className="text-4xl font-bold text-gradient">AA</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-gradient">Aris Artates</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Computer Science Graduate & IT Specialist
        </p>

        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <MapPin size={16} />
          <span>Leyte, Philippines</span>
        </div>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building automated systems and data-driven applications.
          Passionate about turning data into insights and code into solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <GradientButton href="/projects">View Projects</GradientButton>
          <GradientButton href="/dashboard" variant="secondary">
            Activity Dashboard
          </GradientButton>
        </div>

        <SocialLinks className="justify-center" size={22} />
      </div>
    </section>
  );
}
