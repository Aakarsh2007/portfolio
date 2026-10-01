"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  index,
  label,
  title,
  description,
  center = false,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-14", center && "text-center")}
    >
      <p className="font-mono text-xs text-cyan-400/70 tracking-[0.3em] uppercase mb-3">
        {index} / {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">{title}</h2>
      <div className={cn("w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500", center && "mx-auto")} />
      {description && (
        <p className={cn("text-white/50 text-base mt-5 max-w-2xl leading-relaxed", center && "mx-auto")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
