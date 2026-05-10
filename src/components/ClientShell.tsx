"use client";

import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(() => import("@/components/AnimatedBackground"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });

export default function ClientShell() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <AnimatedBackground />
    </>
  );
}
