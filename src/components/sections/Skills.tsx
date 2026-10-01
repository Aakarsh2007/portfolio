"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, TestTube2, Cpu } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/lib/data";

const categoryIcons = [Code2, Server, Database, Brain, TestTube2, Cpu];
const categoryAccents = [
  "text-cyan-300",
  "text-violet-300",
  "text-emerald-300",
  "text-pink-300",
  "text-blue-300",
  "text-amber-300",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 scroll-mt-16">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader index="03" label="Skills" title="Technical toolkit" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            const accent = categoryAccents[i % categoryAccents.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-white/[0.14] transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Icon className={`w-4 h-4 ${accent}`} />
                  <h3 className={`font-mono text-xs font-semibold tracking-wider uppercase ${accent}`}>{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.07] bg-white/[0.03] text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
