"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 radial-gradient" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[128px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container px-6 max-w-6xl mx-auto text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-muted-foreground">Open for opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none">
            <span className="text-gradient-subtle">Web Developer</span>
            <br />
            <span className="text-gradient">& Digital Product</span>
            <br />
            <span className="text-gradient-subtle">Specialist</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          I&apos;m David Szilagyi, a web developer with a background in digital product development,
          UX design, and e-commerce. I build and optimize digital solutions with a strong focus
          on user experience, customer journeys, and online business performance.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 text-base font-medium rounded-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              View Projects
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 text-base font-medium rounded-full glass hover:bg-muted transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Tech stack - minimal badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-muted-foreground/50"
        >
          {["React", "Next.js", "WordPress", "Shopify", "C#/.NET"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
