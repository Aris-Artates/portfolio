"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code, BarChart3, Film } from "lucide-react";

interface SkillBarProps {
  name: string;
  proficiency: number;
  color: string;
}

function SkillBar({ name, proficiency, color }: SkillBarProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-500">{proficiency}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${proficiency}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}

const skillGroups = [
  {
    title: "Programming & Data",
    icon: Code,
    color: "from-[#667eea] to-[#764ba2]",
    barColor: "linear-gradient(90deg, #667eea, #764ba2)",
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "TypeScript", proficiency: 70 },
      { name: "Data Visualization", proficiency: 80 },
      { name: "Exploratory Data Analysis", proficiency: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: BarChart3,
    color: "from-[#4facfe] to-[#00f2fe]",
    barColor: "linear-gradient(90deg, #4facfe, #00f2fe)",
    skills: [
      { name: "Git & GitHub", proficiency: 80 },
      { name: "Tableau", proficiency: 75 },
      { name: "Jupyter Notebooks", proficiency: 75 },
      { name: "Power BI", proficiency: 65 },
      { name: "Excel", proficiency: 85 },
    ],
  },
  {
    title: "Creative & Media",
    icon: Film,
    color: "from-[#f093fb] to-[#f5576c]",
    barColor: "linear-gradient(90deg, #f093fb, #f5576c)",
    skills: [
      { name: "DaVinci Resolve", proficiency: 90 },
      { name: "Motion Graphics", proficiency: 85 },
      { name: "Color Grading", proficiency: 85 },
      { name: "Thumbnail Design", proficiency: 75 },
      { name: "Audio Design", proficiency: 70 },
    ],
  },
];

export function SkillsShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <GlassCard key={group.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${group.color}`}>
                  <group.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  proficiency={skill.proficiency}
                  color={group.barColor}
                />
              ))}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
