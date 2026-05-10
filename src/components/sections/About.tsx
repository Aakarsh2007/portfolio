"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Layers, Zap, GraduationCap, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const traits = [
  {
    icon: Brain,
    title: "AI Engineering",
    description: "Building multi-agent RL environments, fine-tuning LLMs with GRPO/LoRA, and integrating AI into production systems.",
    color: "cyan",
  },
  {
    icon: Layers,
    title: "Full-Stack Systems",
    description: "End-to-end architecture from React frontends to Node.js/FastAPI backends with MongoDB, PostgreSQL, and Redis.",
    color: "violet",
  },
  {
    icon: Code2,
    title: "Competitive Programming",
    description: "Global Rank 4 on CodeChef, 3★ rated, Codeforces Pupil. 500+ DSA problems solved across platforms.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Infrastructure & DevOps",
    description: "Self-healing SRE systems, C++ telemetry daemons, Docker containerization, and automated remediation pipelines.",
    color: "emerald",
  },
];

const colorMap = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    icon: "text-violet-400",
    glow: "group-hover:shadow-violet-500/10",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: "text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/10",
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] uppercase mb-3">
            01 / About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Who I am
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-white/60 leading-relaxed text-base">
              I&apos;m a{" "}
              <span className="text-white font-medium">
                pre-final year B.Tech IT student at IIIT Lucknow
              </span>{" "}
              who builds at the intersection of AI systems and full-stack engineering. I don&apos;t just write code — I architect systems that think, adapt, and scale.
            </p>
            <p className="text-white/60 leading-relaxed text-base">
              My work spans{" "}
              <span className="text-cyan-400/80">multi-agent reinforcement learning</span>,{" "}
              <span className="text-violet-400/80">LLM fine-tuning with GRPO/LoRA</span>, and{" "}
              <span className="text-blue-400/80">production-grade web platforms</span>. I&apos;m drawn to problems that sit at the edge of what&apos;s technically possible.
            </p>
            <p className="text-white/60 leading-relaxed text-base">
              Outside of building, I compete in algorithmic programming — reaching{" "}
              <span className="text-white font-medium">Global Rank 4 on CodeChef</span> and solving 500+ DSA problems. I believe strong fundamentals are what separate good engineers from great ones.
            </p>

            {/* Education card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass border border-white/[0.06] rounded-2xl p-5 mt-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {personalInfo.education.college}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {personalInfo.education.degree}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono text-xs text-white/30">
                      {personalInfo.education.period}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-white/30">
                      <MapPin className="w-3 h-3" />
                      {personalInfo.education.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => {
              const colors = colorMap[trait.color as keyof typeof colorMap];
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`group glass border ${colors.border} rounded-2xl p-5 cursor-default transition-all duration-300 hover:shadow-xl ${colors.glow}`}
                >
                  <div className={`w-9 h-9 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-4 h-4 ${colors.icon}`} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {trait.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
