"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Palette, Terminal, Users, BarChart, FileText, Figma, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["HTML / CSS / Bootstrap", "JavaScript / React.js / Next.js", "C# / .NET / Unity", "Git / DevOps / Visual Studio"],
  },
  {
    title: "CMS & E-commerce",
    icon: Globe,
    skills: ["WordPress", "Shopify", "Content Management", "Product Merchandising"],
  },
  {
    title: "UX / UI Design",
    icon: Palette,
    skills: ["Photoshop", "Figma", "Adobe XD", "User Research", "Usability Testing"],
  },
  {
    title: "Digital Marketing",
    icon: BarChart,
    skills: ["Google Analytics", "Google Ads", "SEO", "Performance Analysis"],
  },
  {
    title: "Wireframing & Prototyping",
    icon: FileText,
    skills: ["Wireframing", "Prototyping", "User Flows", "Information Architecture"],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: ["Hungarian - Native", "English - C1", "Italian - B1", "Danish - B1"],
  },
];

const education = [
  {
    degree: "Digital Concept Development",
    school: "Business Academy Aarhus",
    period: "2022 - 2024",
    description: "Bachelor's top-up programme expanding knowledge in UX design, concept development, and game development using Unity, C#, and Blender.",
  },
  {
    degree: "Multimedia Design",
    school: "Business Academy Aarhus",
    period: "2020 - 2022",
    description: "Focus on UX/UI design and frontend development, covering the full process from user research to implementation.",
  },
  {
    degree: "Marketing Management",
    school: "Business Academy Aarhus",
    period: "2018 - 2019",
    description: "Foundation in developing and analyzing businesses, with focus on marketing strategies and business development.",
  },
];

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 radial-gradient opacity-20" />

      <div className="container px-6 max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20 text-center mx-auto"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient-subtle">
            Skills & Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A blend of technical development, UX design, and digital marketing expertise honed through education and professional experience.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Education
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gradient-subtle">
            Academic Background
          </h3>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
              </div>
              <p className="text-primary text-sm font-medium mb-2">{edu.school}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
