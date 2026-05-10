"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Code2, ArrowUpRight, Send } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: "cyan",
    description: "Best way to reach me",
  },
  {
    label: "LinkedIn",
    value: "aakarsh-saxena",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    color: "blue",
    description: "Professional network",
  },
  {
    label: "GitHub",
    value: "Aakarsh2007",
    href: personalInfo.github,
    icon: GithubIcon,
    color: "violet",
    description: "Open source work",
  },
  {
    label: "LeetCode",
    value: "Profile",
    href: personalInfo.leetcode,
    icon: Code2,
    color: "orange",
    description: "Competitive programming",
  },
];

const colorMap = {
  cyan: "border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/5",
  blue: "border-blue-500/20 hover:border-blue-500/40 text-blue-400 hover:bg-blue-500/5",
  violet: "border-violet-500/20 hover:border-violet-500/40 text-violet-400 hover:bg-violet-500/5",
  orange: "border-orange-500/20 hover:border-orange-500/40 text-orange-400 hover:bg-orange-500/5",
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] uppercase mb-3">
            05 / Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s build something
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mb-6" />
          <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed">
            Open to internships, research collaborations, and interesting engineering problems.
            If you&apos;re building something ambitious, I&apos;d love to hear about it.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow"
          >
            <Send className="w-5 h-5" />
            Send me an email
          </motion.a>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            const colors = colorMap[link.color as keyof typeof colorMap];
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`group glass border rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 ${colors}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white/60 group-hover:text-white/90 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/40 text-xs mb-0.5">{link.description}</p>
                  <p className="text-white/80 text-sm font-medium truncate group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/[0.04] text-center"
        >
          <p className="font-mono text-xs text-white/20">
            Designed & built by{" "}
            <span className="text-white/40">Aakarsh Saxena</span>
            {" · "}
            <span className="text-cyan-400/40">Next.js 15 + TypeScript</span>
          </p>
          <p className="font-mono text-xs text-white/10 mt-1">
            IIIT Lucknow · B.Tech IT · 3rd Year
          </p>
        </motion.div>
      </div>
    </section>
  );
}
