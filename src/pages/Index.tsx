import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import BismillahIntro from "@/components/BismillahIntro";
import CurtainReveal from "@/components/CurtainReveal";
import HeroSection from "@/components/HeroSection";
import FloatingPetals from "@/components/FloatingPetals";
import Sparkles from "@/components/Sparkles";

type Phase = "bismillah" | "curtain" | "revealed";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("bismillah");

  const handleBismillahDone = useCallback(() => {
    setPhase("curtain");
  }, []);

  const handleCurtainDone = useCallback(() => {
    setPhase("revealed");
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main content - always rendered behind */}
      <HeroSection />
      <FloatingPetals />
      <Sparkles />

      {/* Curtain overlay */}
      {phase === "curtain" && <CurtainReveal onComplete={handleCurtainDone} />}

      {/* Bismillah overlay */}
      <AnimatePresence>
        {phase === "bismillah" && <BismillahIntro onComplete={handleBismillahDone} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
