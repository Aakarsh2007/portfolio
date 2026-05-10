"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, { accent: string; bar: string; badge: string }> = {
  Languages: {
    accent: "text-cyan-400",
    bar: "from-cyan-500 to-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
  Frontend: {
    accent: "text-violet-400",
    bar: "from-violet-500 to-violet-400",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  },
  Backend: {
    accent: "text-blue-400",
    bar: "from-blue-500 to-blue-400",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  "AI / ML": {
    accent: "text-pink-400",
    bar: "from-pink-500 to-violet-500",
    badge: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  },
  Databases: {
    accent: "text-emerald-400",
    bar: "from-emerald-500 to-teal-400",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
  DevOps: {
    accent: "text-orange-400",
    bar: "from-orange-500 to-amber-400",
    badge: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  },
};

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-xs font-medium">{name}</span>
        <span className="font-mono text-xs text-white/30">{level}%</span>
      </div>
      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={cn("h-full rounded-full bg-gradient-to-r", color)}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-blue-400/60 tracking-[0.3em] uppercase mb-3">
            03 / Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical arsenal
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], catIndex) => {
            const colors = categoryColors[category] || categoryColors.Languages;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={cn("font-mono text-xs font-semibold tracking-wider uppercase", colors.accent)}>
                    {category}
                  </span>
                </div>

                <div className="space-y-3">
                  {skillList.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={colors.bar}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All skills pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass border border-white/[0.06] rounded-2xl p-6"
        >
          <p className="font-mono text-xs text-white/30 mb-4 tracking-widest uppercase">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.values(skills).flat().map((skill) => (
              <motion.span
                key={skill.name}
                whileHover={{ scale: 1.05, y: -1 }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono glass border border-white/[0.06] text-white/50 hover:text-white/80 hover:border-white/[0.12] transition-all cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
