import { GlassCard } from "@/components/ui/GlassCard";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <GlassCard hover={false} className="text-center relative overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] via-[#f093fb] to-[#4facfe] opacity-10" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gradient mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Interested in collaborating or have a project in mind?
              Feel free to reach out.
            </p>

            <a
              href="mailto:arisartates00@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 mb-6"
            >
              <Mail size={18} />
              arisartates00@gmail.com
            </a>

            <div className="pt-6 border-t border-white/10">
              <SocialLinks className="justify-center" size={22} />
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
