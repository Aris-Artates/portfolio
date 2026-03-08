import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SocialLinks } from "@/components/layout/SocialLinks";
import {
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  MapPin,
} from "lucide-react";

const education = [
  {
    school: "AMA University",
    degree: "BS Computer Science, Major in Data Science",
    period: "2021 - 2025",
    detail: 'Thesis: "AI-Powered Text Reader and Pharmacy Locator: Enhancing Accessibility for Elders"',
  },
  {
    school: "Saint Paul School of Professional Studies",
    degree: "Accountancy and Business Management",
    period: "2019 - 2021",
    detail: null,
  },
  {
    school: "English Access Microscholarship Program",
    degree: "Valedictorian",
    period: "2017 - 2019",
    detail: null,
  },
];

const experience = [
  {
    role: "IT Specialist",
    company: "CDA Region 8, Tacloban City",
    period: "Aug 2023 - Sep 2024",
    bullets: [
      "Developed an Inventory Management System with QR code tracking",
      "Coordinated server setup, installation and maintenance",
      "Provided end-user support across office devices and systems",
    ],
  },
  {
    role: "Video Editor (Freelancer)",
    company: "Remote",
    period: "Aug 2021 - May 2025",
    bullets: [
      "Edited videos in DaVinci Resolve with motion graphics and color grading",
      "Worked with international clients including a Singapore-based content creator",
    ],
  },
];

const certifications = [
  { name: "Data Visualization Microspecialization Pathway", issuer: "SPARTA", date: "Oct 2023" },
  { name: "Data Visualization Using Tableau and Python", issuer: "SPARTA", date: "Sep 2023" },
  { name: "SQL for Business Users", issuer: "SPARTA", date: "Aug 2023" },
  { name: "Storytelling Using Data", issuer: "SPARTA", date: "Sep 2023" },
  { name: "Essential Excel Skills for Data Preparation", issuer: "SPARTA", date: "Jul 2023" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco", date: "Apr 2023" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Dec 2023" },
];

const skills = {
  "Programming & Data": ["Python", "SQL", "TypeScript", "Data Visualization", "EDA", "Data Cleaning"],
  "Tools & Platforms": ["Git", "GitHub", "Tableau", "Power BI", "Jupyter", "Excel", "Google Sheets"],
  "Creative & Media": ["DaVinci Resolve", "Motion Graphics", "Color Grading", "Audio Design", "Thumbnail Design"],
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading title="About Me" />

      {/* Bio */}
      <GlassCard hover={false} className="mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0c0c1d] flex items-center justify-center">
                <span className="text-2xl font-bold text-gradient">AA</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Aris L. Artates Jr.</h2>
            <p className="text-gray-300 mb-3">Computer Science Graduate & IT Specialist</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> Leyte, Philippines
              </span>
              <span className="flex items-center gap-1">
                <Mail size={14} /> arisartates00@gmail.com
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I am a BS Computer Science graduate with a major in Data Science from AMA University.
              I have hands-on experience as an IT Specialist building inventory management systems
              and as a freelance video editor working with international clients. I am passionate about
              building automated systems, data-driven applications, and creating compelling visual content.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Education */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-[#667eea]" />
          <h2 className="text-xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((edu) => (
            <GlassCard key={edu.school}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-white">{edu.school}</h3>
                  <p className="text-gray-300 text-sm">{edu.degree}</p>
                  {edu.detail && (
                    <p className="text-gray-500 text-sm mt-1">{edu.detail}</p>
                  )}
                </div>
                <span className="text-sm text-gray-500 flex-shrink-0">{edu.period}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="text-[#f093fb]" />
          <h2 className="text-xl font-bold text-white">Experience</h2>
        </div>
        <div className="space-y-4">
          {experience.map((exp) => (
            <GlassCard key={exp.role}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-white">{exp.role}</h3>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 flex-shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-[#667eea] mt-1.5">&#8226;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Award className="text-[#4facfe]" />
          <h2 className="text-xl font-bold text-white">Certifications</h2>
        </div>
        <GlassCard hover={false}>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
              >
                <div>
                  <p className="text-gray-200 text-sm">{cert.name}</p>
                  <p className="text-gray-500 text-xs">{cert.issuer}</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">{cert.date}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <GlassCard key={category}>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} color="#667eea">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="text-center">
        <SocialLinks className="justify-center" size={22} />
      </div>
    </div>
  );
}
