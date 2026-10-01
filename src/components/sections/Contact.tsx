"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Code2, ArrowUpRight, Send, Download } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/-/g, "")}`, icon: Phone },
  { label: "LinkedIn", value: "aakarsh-saxena", href: personalInfo.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "Aakarsh2007", href: personalInfo.github, icon: GithubIcon },
  { label: "LeetCode", value: "Knight", href: personalInfo.leetcode, icon: Code2 },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 scroll-mt-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          index="05"
          label="Contact"
          title="Let's work together"
          description="I'm looking for software engineering and AI engineering internships. If you're hiring, or building something ambitious, I'd love to talk."
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.a
            href={`mailto:${personalInfo.email}?subject=Opportunity%20for%20Aakarsh`}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-shadow"
          >
            <Send className="w-5 h-5" />
            Email me
          </motion.a>
          <motion.a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl glass-strong text-white/85 hover:text-white font-semibold transition-colors"
          >
            <Download className="w-5 h-5" />
            Download resume
          </motion.a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            const external = link.href.startsWith("http");
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group glass rounded-2xl p-4 flex items-center gap-3.5 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white/60 group-hover:text-cyan-300 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/40 text-xs">{link.label}</p>
                  <p className="text-white/85 text-sm font-medium truncate">{link.value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
              </motion.a>
            );
          })}
        </div>

        <footer className="mt-20 pt-8 border-t border-white/[0.05] text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Aakarsh Saxena · B.Tech IT, IIIT Lucknow
          </p>
          <p className="font-mono text-xs text-white/25 mt-1.5">Built with Next.js, TypeScript & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
}
