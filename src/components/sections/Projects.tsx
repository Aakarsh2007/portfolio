"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const colorMap = {
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    button: "text-cyan-400 hover:bg-cyan-500/10 border-cyan-500/20",
    glow: "hover:shadow-cyan-500/10",
    dot: "bg-cyan-400",
    gradient: "from-cyan-500/10 via-transparent to-transparent",
    border: "hover:border-cyan-500/30",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    button: "text-violet-400 hover:bg-violet-500/10 border-violet-500/20",
    glow: "hover:shadow-violet-500/10",
    dot: "bg-violet-400",
    gradient: "from-violet-500/10 via-transparent to-transparent",
    border: "hover:border-violet-500/30",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    button: "text-blue-400 hover:bg-blue-500/10 border-blue-500/20",
    glow: "hover:shadow-blue-500/10",
    dot: "bg-blue-400",
    gradient: "from-blue-500/10 via-transparent to-transparent",
    border: "hover:border-blue-500/30",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    button: "text-emerald-400 hover:bg-emerald-500/10 border-emerald-500/20",
    glow: "hover:shadow-emerald-500/10",
    dot: "bg-emerald-400",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    border: "hover:border-emerald-500/30",
  },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const colors = colorMap[project.color as keyof typeof colorMap];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative glass border border-white/[0.06] rounded-3xl overflow-hidden transition-all duration-500",
        "hover:shadow-2xl",
        colors.glow,
        colors.border
      )}
    >
      {/* Top gradient accent */}
      <div className={cn("absolute top-0 left-0 right-0 h-px bg-gradient-to-r", colors.gradient.replace("via-transparent to-transparent", "to-transparent"))} />

      {/* Hover glow overlay */}
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br pointer-events-none", colors.gradient)} />

      <div className="relative p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={cn("w-2 h-2 rounded-full", colors.dot)} />
              <span className="font-mono text-xs text-white/30">{project.year}</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-white/40 mt-0.5">{project.subtitle}</p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 ml-4">
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-9 h-9 rounded-xl border flex items-center justify-center transition-all",
                  colors.button
                )}
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl border border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.06] flex items-center justify-center transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex items-start gap-2">
              <ArrowUpRight className={cn("w-3.5 h-3.5 mt-0.5 flex-shrink-0", colors.dot.replace("bg-", "text-"))} />
              <span className="text-white/40 text-xs">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={cn(
                "px-2.5 py-1 rounded-lg text-xs font-mono border",
                colors.badge
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-violet-400/60 tracking-[0.3em] uppercase mb-3">
            02 / Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I&apos;ve built
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500" />
          <p className="text-white/40 text-sm mt-4 max-w-xl">
            Production-grade systems spanning AI, full-stack, and infrastructure engineering.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
