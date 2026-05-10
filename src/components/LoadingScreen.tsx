"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center"
        >
          {/* Glow orb */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-cyan-500/5 blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
              <span className="font-mono text-white font-bold text-xl">AS</span>
            </div>

            {/* Name */}
            <div className="text-center">
              <p className="font-mono text-xs text-white/30 tracking-[0.3em] uppercase mb-2">
                Initializing
              </p>
              <h1 className="text-2xl font-semibold text-white/80">
                Aakarsh Saxena
              </h1>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                  width: `${Math.min(progress, 100)}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="font-mono text-xs text-white/20">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
