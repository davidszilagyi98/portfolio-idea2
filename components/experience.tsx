"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Web & E-commerce Specialist",
    company: "Buildgreener",
    location: "UK",
    period: "2024 Feb — 2026 April",
    description: "Managed and optimized a Shopify-based e-commerce store with 600+ products. Maintained product data, categories, and merchandising to ensure an effective customer journey.",
    highlights: [
      "Analyzed webshop performance, customer behavior, and KPIs to support commercial decisions",
      "Supported promotions, campaigns, and online sales initiatives",
      "Monitored market trends and competitors while collaborating with cross-functional teams",
    ],
    current: false,
  },
  {
    role: "Web Developer & Digital Marketing Consultant",
    company: "Kooka",
    location: "UK",
    period: "2024 Feb — 2026 April",
    description: "Developed and maintained the company website using WordPress. Improved the website structure, performance, and user experience. Assisted with digital marketing strategies to improve online presence.",
    highlights: [
      "Improved website structure, performance, and user experience",
      "Assisted with digital marketing strategies to improve online presence",
      "Optimized website content and functionality",
    ],
    current: false,
  },
  {
    role: "Frontend Developer Intern",
    company: "DynamicWeb",
    location: "Aarhus, Denmark",
    period: "2023 Aug — 2024 Jan",
    description: "Developed frontend components using C#, JavaScript, .NET and Bootstrap. Participated in Agile Scrum development processes and collaborated with Product Managers, Designers and Developers.",
    highlights: [
      "Worked with Azure DevOps, code reviews and sprint planning",
      "Contributed to e-commerce platform development and bug fixing",
      "Improved user experience and platform functionality",
    ],
    current: false,
  },
  {
    role: "Manager",
    company: "Fratelli",
    location: "Aarhus, Denmark",
    period: "2018 Aug — 2023 Aug",
    description: "Achieved to reduce expenses and increased the sales which helped the company to be able to reinvest the revenue into the business. Responsible for a team containing 25 members.",
    highlights: [
      "Reduced expenses and increased sales, enabling reinvestment",
      "Responsible for a team containing 25 members",
      "Training and hiring new people",
      "Managed situations from both business and employee perspectives",
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
            A track record of delivering impactful digital solutions across e-commerce, web development, and team management.
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
                        <p className="text-primary text-sm font-medium mt-0.5">{exp.company} | {exp.location}</p>
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
