import { useMemo } from "react";

const Sparkles = () => {
  const sparkles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: `${15 + Math.random() * 70}%`,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: 3 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            background: "radial-gradient(circle, hsl(43, 73%, 52%) 0%, transparent 70%)",
            boxShadow: "0 0 6px rgba(212, 175, 55, 0.6)",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
