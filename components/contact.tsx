"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Check, Phone, MapPin } from "lucide-react";

const links = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:szilagyidavid98@gmail.com", icon: Mail },
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container px-6 max-w-4xl mx-auto relative">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient-subtle">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm currently open for new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-6">Connect with me</h3>
            <div className="grid grid-cols-2 gap-3">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group relative flex items-center gap-4 p-4 rounded-xl glass-card border border-border hover:border-primary/20 transition-all hover-lift"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{link.name}</p>
                      <p className="text-xs text-muted-foreground">@dszilagyi</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                );
              })}
            </div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 space-y-3"
            >
              <div className="flex items-center gap-3 p-3 rounded-xl glass-card">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">+36 70 776 71 70</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl glass-card">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Budapest, Hungary</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center glass-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-muted rounded-lg border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-muted rounded-lg border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 text-sm bg-muted rounded-lg border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25 transition-colors placeholder:text-muted-foreground/50 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium text-sm relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-100" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
