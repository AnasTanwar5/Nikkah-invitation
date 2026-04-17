import { useMemo } from "react";

const FloatingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 6}s`,
      size: 6 + Math.random() * 10,
      opacity: 0.15 + Math.random() * 0.25,
      color: i % 3 === 0 ? "hsl(43, 73%, 52%)" : "hsl(270, 70%, 85%)",
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20">
            <ellipse cx="10" cy="10" rx="5" ry="9" fill={p.color} transform="rotate(30 10 10)" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
