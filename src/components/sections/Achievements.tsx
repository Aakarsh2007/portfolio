"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Star, Code2, Zap, Award } from "lucide-react";
import { achievements } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  trophy: Trophy,
  star: Star,
  code: Code2,
  zap: Zap,
  award: Award,
};

const colorMap = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: "text-cyan-400",
    glow: "hover:shadow-cyan-500/10",
    text: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/30",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    icon: "text-violet-400",
    glow: "hover:shadow-violet-500/10",
    text: "text-violet-400",
    hoverBorder: "hover:border-violet-500/30",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: "text-blue-400",
    glow: "hover:shadow-blue-500/10",
    text: "text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
    glow: "hover:shadow-emerald-500/10",
    text: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/30",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    icon: "text-orange-400",
    glow: "hover:shadow-orange-500/10",
    text: "text-orange-400",
    hoverBorder: "hover:border-orange-500/30",
  },
};

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const step = duration / numericValue;

    const timer = setInterval(() => {
      start += Math.ceil(numericValue / 40);
      if (start >= numericValue) {
        setDisplay(String(numericValue));
        clearInterval(timer);
      } else {
        setDisplay(String(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [isInView, numericValue, value]);

  return (
    <span ref={ref}>
      {isNaN(numericValue) ? value : display}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative py-32 px-6" ref={ref}>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-emerald-400/60 tracking-[0.3em] uppercase mb-3">
            04 / Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Milestones
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500" />
        </motion.div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, i) => {
            const colors = colorMap[achievement.color as keyof typeof colorMap];
            const Icon = iconMap[achievement.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={cn(
                  "group glass border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl cursor-default",
                  colors.border,
                  colors.glow,
                  colors.hoverBorder
                )}
              >
                {/* Icon */}
                <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center mb-5", colors.bg, colors.border)}>
                  <Icon className={cn("w-5 h-5", colors.icon)} />
                </div>

                {/* Value */}
                <div className={cn("text-3xl font-bold font-mono mb-1", colors.text)}>
                  {achievement.prefix}
                  <AnimatedCounter
                    value={achievement.value}
                    suffix={achievement.suffix}
                  />
                </div>

                {/* Title & subtitle */}
                <p className="text-white font-semibold text-sm">{achievement.title}</p>
                <p className="text-white/40 text-xs mt-0.5">{achievement.subtitle}</p>

                {/* Description */}
                <p className="text-white/30 text-xs mt-3 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Competitive programming platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass border border-white/[0.06] rounded-2xl p-6"
        >
          <p className="font-mono text-xs text-white/30 mb-4 tracking-widest uppercase">
            Competitive Programming
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { platform: "LeetCode", handle: "tQJTt5Mwpi", url: "https://leetcode.com/u/tQJTt5Mwpi/", color: "text-orange-400" },
              { platform: "CodeChef", handle: "3★ · Global Rank 4", url: "#", color: "text-amber-400" },
              { platform: "Codeforces", handle: "Pupil", url: "#", color: "text-blue-400" },
            ].map((p) => (
              <a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all group"
              >
                <span className="text-white/60 text-xs font-medium group-hover:text-white/80 transition-colors">
                  {p.platform}
                </span>
                <span className={cn("font-mono text-xs", p.color)}>
                  {p.handle}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
