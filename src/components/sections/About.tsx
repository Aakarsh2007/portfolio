"use client";

import { motion } from "framer-motion";
import { Brain, Layers, ShieldCheck, Trophy, GraduationCap, MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { education } from "@/lib/data";

const traits = [
  {
    icon: Brain,
    title: "AI Agents & LLMs",
    description: "Agent orchestration, GRPO/LoRA fine-tuning, and evaluation against golden sets — not just prompting.",
    color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Layers,
    title: "Full-Stack & Backend",
    description: "Next.js, FastAPI and Node.js services on PostgreSQL, MongoDB and Redis, deployed serverless or in Docker.",
    color: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Reliability by Design",
    description: "Policy firewalls, idempotent webhooks, HMAC auth and property-based tests under mypy --strict.",
    color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "LeetCode Knight, Codeforces Specialist, CodeChef 3★ with a Global Rank 4. 500+ problems solved.",
    color: "text-amber-300 bg-amber-500/10 border-amber-500/20",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" label="About" title="Who I am" />

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio + education */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-white/65 leading-relaxed">
              I&apos;m a <span className="text-white font-medium">pre-final year B.Tech IT student at IIIT Lucknow</span> who
              builds where AI meets real software engineering. I like systems that are measurable: every claim backed by a
              test, an ablation or a holdout.
            </p>
            <p className="text-white/65 leading-relaxed">
              Recently I built <span className="text-cyan-300">RevPilot AI</span>, a payment-recovery agent where a
              deterministic engine beats the LLM on accuracy and a policy firewall keeps it away from money;{" "}
              <span className="text-violet-300">Aegis</span>, a multi-tenant platform that scans GitHub repos and opens fix
              PRs; and <span className="text-emerald-300">Oceanus</span>, a multi-agent RL environment that made the Meta ×
              Scaler finals.
            </p>
            <p className="text-white/65 leading-relaxed">
              Competitive programming keeps my fundamentals sharp — a{" "}
              <span className="text-white font-medium">Global Rank 4 on CodeChef</span> and top-100 finishes in LeetCode rated
              contests.
            </p>

            <div className="pt-4 space-y-3">
              {education.map((ed) => (
                <div key={ed.institution} className="glass rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm">{ed.institution}</p>
                    <p className="text-white/55 text-sm mt-0.5">{ed.detail}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 font-mono text-xs text-white/35">
                      <span>{ed.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {ed.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 hover:border-white/[0.14] transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${trait.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{trait.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{trait.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
