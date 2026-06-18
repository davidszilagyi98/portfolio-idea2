"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socials = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:szilagyidavid98@gmail.com", icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="container px-6 max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <motion.a
              href="#"
              className="text-lg font-semibold tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              david<span className="text-primary">.</span>
            </motion.a>
            <p className="text-sm text-muted-foreground">
              {year} All rights reserved
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Built with */}
        <div className="mt-8 pt-6 border-t border-border flex items-center justify-center">
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
            Built with
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
