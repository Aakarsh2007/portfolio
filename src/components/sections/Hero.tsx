"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo, stats } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[420px] h-[420px] rounded-full bg-violet-500/[0.06] blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-10 items-center">
          {/* Left: intro */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/25 text-xs font-mono text-emerald-300/90">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                Open to SDE / AI engineering internships
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="font-mono text-sm text-white/45 mb-3">
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5"
            >
              <span className="text-white">Aakarsh </span>
              <span className="gradient-text">Saxena</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-sm font-mono mb-6"
            >
              {personalInfo.roles.map((role, i) => (
                <span key={role} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/20">·</span>}
                  <span className={["text-cyan-300/80", "text-violet-300/80", "text-blue-300/80"][i]}>{role}</span>
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/55 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4"
            >
              {personalInfo.tagline}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-1.5 text-sm text-white/40 mb-9"
            >
              <MapPin className="w-3.5 h-3.5" />
              B.Tech IT @ IIIT Lucknow · Class of 2028
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-shadow flex items-center gap-2"
              >
                View my work
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl border border-violet-500/35 text-violet-200 hover:bg-violet-500/10 text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl glass border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 flex items-center justify-center transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl glass border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 flex items-center justify-center transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Stats strip */}
            <motion.dl
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.06]"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-[#08080d] px-4 py-4 text-center lg:text-left">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-xl font-bold text-white font-mono">{s.value}</dd>
                  <dd className="text-[11px] text-white/40 mt-1 leading-snug">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-60 sm:w-72 lg:w-[340px]">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/25 via-violet-500/20 to-blue-500/25 blur-2xl opacity-70" />
              <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-cyan-400/70 via-violet-500/50 to-blue-500/70">
                <div className="relative aspect-[450/554] rounded-[calc(2rem-1.5px)] overflow-hidden bg-[#0b0b12]">
                  <Image
                    src={personalInfo.photo}
                    alt="Portrait of Aakarsh Saxena"
                    fill
                    preload
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 288px, 240px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute z-10 -bottom-5 -left-4 sm:-left-8 bg-[#0d0d16]/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-xl"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Finalist</p>
                <p className="text-sm font-semibold text-white">Meta × Scaler AI Hackathon</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.a>
    </section>
  );
}
