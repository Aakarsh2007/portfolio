"use client";

import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { GithubIcon } from "@/components/icons";
import { projects, otherProjects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const colorMap = {
  cyan: {
    text: "text-cyan-300",
    badge: "bg-cyan-500/10 text-cyan-200 border-cyan-500/20",
    button: "bg-cyan-500/10 text-cyan-200 border-cyan-500/30 hover:bg-cyan-500/20",
    line: "from-cyan-400/80",
    glow: "hover:shadow-cyan-500/10 hover:border-cyan-500/25",
  },
  violet: {
    text: "text-violet-300",
    badge: "bg-violet-500/10 text-violet-200 border-violet-500/20",
    button: "bg-violet-500/10 text-violet-200 border-violet-500/30 hover:bg-violet-500/20",
    line: "from-violet-400/80",
    glow: "hover:shadow-violet-500/10 hover:border-violet-500/25",
  },
  emerald: {
    text: "text-emerald-300",
    badge: "bg-emerald-500/10 text-emerald-200 border-emerald-500/20",
    button: "bg-emerald-500/10 text-emerald-200 border-emerald-500/30 hover:bg-emerald-500/20",
    line: "from-emerald-400/80",
    glow: "hover:shadow-emerald-500/10 hover:border-emerald-500/25",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const colors = colorMap[project.color];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl",
        colors.glow
      )}
    >
      <div className={cn("absolute top-0 left-0 right-0 h-px bg-gradient-to-r to-transparent", colors.line)} />

      <div className="relative p-7 sm:p-9 grid lg:grid-cols-[1fr_260px] gap-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3 font-mono text-xs">
            <span className="text-white/30">0{index + 1}</span>
            <span className={cn("px-2.5 py-1 rounded-full border", colors.badge)}>{project.context}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
          <p className={cn("text-sm sm:text-base mt-1 font-medium", colors.text)}>{project.subtitle}</p>

          <p className="text-white/65 leading-relaxed mt-5">{project.summary}</p>

          <ul className="space-y-3 mt-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <ChevronRight className={cn("w-4 h-4 mt-0.5 flex-shrink-0", colors.text)} />
                <span className="text-white/55 text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-7">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-mono border border-white/[0.08] bg-white/[0.03] text-white/60">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics + links */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <p className={cn("text-xl sm:text-2xl font-bold font-mono", colors.text)}>{m.value}</p>
                <p className="text-[11px] sm:text-xs text-white/45 mt-1 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] text-white/75 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors",
                  colors.button
                )}
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 scroll-mt-16">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          index="02"
          label="Projects"
          title="What I've built"
          description="Three systems I'm proudest of — each with numbers I can defend in an interview."
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <p className="font-mono text-xs text-white/35 tracking-widest uppercase mb-5">More projects</p>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-6 hover:border-white/[0.14] transition-colors flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="w-8 h-8 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] flex items-center justify-center transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live demo`}
                        className="w-8 h-8 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] flex items-center justify-center transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mt-2 flex-1">{p.description}</p>
                <p className="font-mono text-xs text-white/35 mt-4">{p.tech.join(" · ")}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
