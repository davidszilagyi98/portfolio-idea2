"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Linear",
    period: "2023 — Present",
    description: "Leading performance optimization initiatives and building core product features. Reduced initial load time by 40% and improved Core Web Vitals scores.",
    highlights: [
      "Architected real-time collaboration features",
      "Led design system evolution",
      "Mentored 4 junior engineers",
    ],
    current: true,
  },
  {
    role: "Frontend Engineer",
    company: "Vercel",
    period: "2021 — 2023",
    description: "Contributed to Next.js documentation site and internal tooling. Built interactive demos and improved developer onboarding experience.",
    highlights: [
      "Shipped 50+ documentation improvements",
      "Built internal analytics dashboard",
      "Contributed to Next.js core",
    ],
    current: false,
  },
  {
    role: "Software Engineer",
    company: "Stripe",
    period: "2019 — 2021",
    description: "Built and maintained checkout experiences and payment flows. Focused on accessibility and internationalization.",
    highlights: [
      "Improved checkout conversion by 15%",
      "Implemented 20+ locale support",
      "WCAG 2.1 AA compliance lead",
    ],
    current: false,
  },
  {
    role: "Junior Developer",
    company: "Agency",
    period: "2017 — 2019",
    description: "Started my journey building web applications for clients across various industries. Gained full-stack experience with React and Node.js.",
    highlights: [
      "Delivered 30+ client projects",
      "Full-stack JavaScript development",
      "Agile team collaboration",
    ],
    current: false,
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-transparent" />

      <div className="container px-6 max-w-4xl mx-auto relative">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient-subtle">
            Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A track record of delivering impactful products at world-class companies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent origin-top"
          />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative grid md:grid-cols-[100px_1fr] gap-8 md:gap-16"
              >
                {/* Period */}
                <div className="hidden md:block text-right">
                  <span className="text-sm text-muted-foreground">{exp.period.split(" — ")[0]}</span>
                </div>

                {/* Timeline node */}
                <div className="absolute left-0 md:left-[120px] top-2 -translate-x-1/2">
                  <div className={`w-2.5 h-2.5 rounded-full ${exp.current ? "bg-primary glow" : "bg-muted-foreground/30"}`}>
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="pl-8 md:pl-0">
                  {/* Mobile period */}
                  <span className="md:hidden text-xs text-muted-foreground mb-2 block">
                    {exp.period}
                  </span>

                  <div className="glass-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium mt-0.5">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-1">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
