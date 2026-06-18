"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container px-6 max-w-7xl mx-auto">
          <nav
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
              scrolled ? "glass" : ""
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#"
              className="text-lg font-semibold tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              david<span className="text-primary">.</span>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
              >
                <ThemeToggle />
              </motion.div>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="px-5 py-2 text-sm font-medium rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-white/5 dark:hover:bg-white/10 border border-primary/20 dark:border-white/10 transition-colors"
              >
                Say Hello
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-card border-l border-border z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <a href="#" className="text-lg font-semibold">
                  alex<span className="text-primary">.</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-center text-sm font-medium rounded-full bg-primary text-primary-foreground"
                >
                  Say Hello
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
