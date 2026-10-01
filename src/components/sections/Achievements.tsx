"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Brain, Award, Rocket, Code2, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { achievements, cpProfiles } from "@/lib/data";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  brain: Brain,
  award: Award,
  rocket: Rocket,
  code: Code2,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6 scroll-mt-16">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader index="04" label="Achievements" title="Milestones" />

        {/* Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 mb-5"
        >
          {cpProfiles.map((p) => {
            const content = (
              <>
                <p className="text-xs text-white/45 font-mono uppercase tracking-wider">{p.platform}</p>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1.5 flex items-center gap-1">
                  {p.rating}
                  {p.url && <ArrowUpRight className="w-4 h-4 text-white/30" />}
                </p>
              </>
            );
            const cls = "glass rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-amber-500/[0.06] to-transparent";
            return p.url ? (
              <a key={p.platform} href={p.url} target="_blank" rel="noopener noreferrer" className={`${cls} hover:border-white/[0.16] transition-colors`}>
                {content}
              </a>
            ) : (
              <div key={p.platform} className={cls}>
                {content}
              </div>
            );
          })}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:border-white/[0.14] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <span className="text-2xl font-bold font-mono gradient-text">{a.value}</span>
                </div>
                <h3 className="text-white font-semibold">{a.title}</h3>
                <p className="text-white/50 text-sm mt-1.5 leading-relaxed">{a.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
