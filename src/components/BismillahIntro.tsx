import { motion } from "framer-motion";
import { forwardRef, useMemo } from "react";

interface Props {
  onComplete: () => void;
}

const BismillahIntro = forwardRef<HTMLDivElement, Props>(({ onComplete }, ref) => {
  const sparkles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${5 + Math.random() * 90}%`,
      left: `${5 + Math.random() * 90}%`,
      size: 2 + Math.random() * 5,
      delay: Math.random() * 2.5,
      duration: 1 + Math.random() * 1.5,
    })), []);

  const stars = useMemo(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      top: `${10 + Math.random() * 80}%`,
      left: `${8 + Math.random() * 84}%`,
      size: 10 + Math.random() * 8,
      delay: 0.3 + Math.random() * 2,
      duration: 1.5 + Math.random() * 1.5,
    })), []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(circle at center, #FFF8F6 0%, #FDF1EC 50%, #F6D3DA 100%)" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing sparkle dots */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "radial-gradient(circle, #F3D27A 0%, #D4AF37 50%, transparent 70%)",
            boxShadow: `0 0 ${s.size * 2.5}px rgba(212,175,55,0.5)`,
          }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            scale: [0, 1.3, 0.7, 1.1, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 1 + Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Star sparkles */}
      {stars.map((s) => (
        <motion.svg
          key={`star-${s.id}`}
          className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left }}
          width={s.size} height={s.size} viewBox="0 0 16 16"
          animate={{
            opacity: [0, 0.8, 0.3, 0.7, 0],
            scale: [0, 1, 0.6, 0.9, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 1.5 + Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#D4AF37" opacity="0.6" />
        </motion.svg>
      ))}

      {/* Bismillah text */}
      <motion.p
        className="font-arabic text-3xl md:text-5xl lg:text-6xl gold-glow text-center leading-relaxed px-10 relative z-10"
        style={{ textShadow: "0 0 8px rgba(212,175,55,0.2)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, times: [0, 0.25, 0.7, 1], ease: "easeInOut" }}
        onAnimationComplete={onComplete}
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </motion.p>
    </motion.div>
  );
});

BismillahIntro.displayName = "BismillahIntro";

export default BismillahIntro;
