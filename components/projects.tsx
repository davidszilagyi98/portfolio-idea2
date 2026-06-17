"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight, Layers, Zap, Palette, Database } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Linear Clone",
    description: "A pixel-perfect clone of Linear's issue tracking interface with real-time sync, drag-and-drop, and smooth animations.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "TypeScript", "Prisma"],
    link: "#",
    size: "large",
    icon: Layers,
    metrics: { users: "12K+", stars: "3.2K" },
  },
  {
    id: 2,
    title: "Design System",
    description: "Component library with 80+ accessible React components, dark mode support, and comprehensive docs.",
    image: "https://images.pexels.com/photos/1779129/pexels-photo-1779129.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Storybook", "Tailwind"],
    link: "#",
    size: "medium",
    icon: Palette,
    metrics: { components: "80+", downloads: "50K" },
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description: "Analytics dashboard with live data visualization, custom charts, and WebSocket streaming.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "D3.js", "WebSocket"],
    link: "#",
    size: "medium",
    icon: Zap,
    metrics: { latency: "<50ms", data: "1M+ rows" },
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack marketplace with Stripe integration, inventory management, and admin dashboard.",
    image: "https://images.pexels.com/photos/2305445/pexels-photo-2305445.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    size: "small",
    icon: Database,
  },
  {
    id: 5,
    title: "CLI Toolkit",
    description: "Developer tools for project scaffolding, code generation, and deployment automation.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Node.js", "CLI", "Open Source"],
    link: "#",
    size: "small",
    icon: Zap,
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 radial-gradient opacity-30" />

      <div className="container px-6 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient-subtle">

            Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects showcasing my expertise in building scalable, user-centric applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isLarge = project.size === "large";
            const isMedium = project.size === "medium";

            return (
              <motion.a
                key={project.id}
                href={project.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  group relative overflow-hidden rounded-2xl glass-card hover-lift
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isMedium ? "md:row-span-2" : ""}
                `}
              >
                {/* Background image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Icon */}
                  <div className="absolute top-6 left-6 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics (for large cards) */}
                  {project.metrics && (
                    <div className="flex gap-4 mt-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-primary font-semibold">{value}</span>
                          <span className="text-muted-foreground ml-1">{key}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
