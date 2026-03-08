import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Briefcase } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A snapshot of my background and journey"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2]">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
                <p className="text-gray-300 font-medium">
                  BS Computer Science, Major in Data Science
                </p>
                <p className="text-gray-400 text-sm">AMA University &bull; 2021 - 2025</p>
                <p className="text-gray-400 text-sm mt-2">
                  Thesis: AI-Powered Text Reader and Pharmacy Locator for Elders
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#f093fb] to-[#f5576c]">
                <Briefcase size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300 font-medium">IT Specialist &bull; CDA Region 8</p>
                <p className="text-gray-400 text-sm">
                  Built an Inventory Management System with QR code tracking
                </p>
                <p className="text-gray-300 font-medium mt-3">
                  Video Editor &bull; Freelancer
                </p>
                <p className="text-gray-400 text-sm">
                  DaVinci Resolve, international clients, motion graphics
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="text-center mt-10">
          <GradientButton href="/about">Learn More</GradientButton>
        </div>
      </div>
    </section>
  );
}
