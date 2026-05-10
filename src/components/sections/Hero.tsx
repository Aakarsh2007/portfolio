"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

// Inline SVG icons for brands not in lucide
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-xs font-mono text-cyan-400/80">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for internships & collaborations
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="text-white">Aakarsh</span>
            <br />
            <span className="gradient-text">Saxena</span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-mono text-white/40">
            <span className="text-cyan-400/70">Software Engineer</span>
            <span className="text-white/20">·</span>
            <span className="text-violet-400/70">AI Systems Builder</span>
            <span className="text-white/20">·</span>
            <span className="text-blue-400/70">Full-Stack Developer</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building scalable AI systems, multi-agent environments, and
          production-grade web applications.{" "}
          <span className="text-white/60">
            B.Tech IT @ IIIT Lucknow.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow"
          >
            View Projects
          </motion.button>

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl glass border border-white/[0.08] text-white/70 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </motion.a>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl glass border border-white/[0.08] text-white/70 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </motion.a>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 text-sm font-semibold flex items-center gap-2 transition-all"
          >
            <Mail className="w-4 h-4" />
            Contact
          </motion.button>
        </motion.div>

        {/* Terminal-style code block */}
        <motion.div
          variants={itemVariants}
          className="max-w-lg mx-auto glass border border-white/[0.06] rounded-2xl p-5 text-left"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-xs text-white/20">~/aakarsh</span>
          </div>
          <div className="font-mono text-xs space-y-1.5">
            <div>
              <span className="text-cyan-400/60">$ </span>
              <span className="text-white/50">whoami</span>
            </div>
            <div className="text-white/70 pl-2">
              AI Engineer · Full-Stack Dev · Competitive Programmer
            </div>
            <div className="mt-2">
              <span className="text-cyan-400/60">$ </span>
              <span className="text-white/50">cat skills.txt</span>
            </div>
            <div className="text-violet-400/70 pl-2">
              TypeScript · Python · React · Node.js · LLMs · GRPO
            </div>
            <div className="mt-2">
              <span className="text-cyan-400/60">$ </span>
              <span className="text-white/50">echo $STATUS</span>
            </div>
            <div className="text-green-400/70 pl-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Open to opportunities
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-white/20 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
