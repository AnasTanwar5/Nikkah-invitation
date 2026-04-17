import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-05-08T17:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="w-full max-w-lg mx-auto mt-10"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.7, duration: 0.8 }}
    >
      <p className="font-display text-sm tracking-[0.25em] uppercase text-deep-accent mb-5 opacity-80">
        Counting down to our blessed day
      </p>
      <div className="flex items-center justify-center gap-3 md:gap-5">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-3 md:gap-5">
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center border border-gold/20"
                style={{
                  background: "linear-gradient(145deg, rgba(253,250,255,0.85) 0%, rgba(214,188,232,0.5) 100%)",
                  boxShadow: "0 4px 20px rgba(184,140,204,0.1), inset 0 1px 0 rgba(212,175,55,0.12)",
                }}
              >
                <span className="font-display text-2xl md:text-3xl gold-glow font-semibold">
                  {String(u.value).padStart(2, "0")}
                </span>
              </div>
              <span className="font-body text-[10px] md:text-xs text-foreground/60 mt-1.5 tracking-wider uppercase">
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="gold-glow text-xl font-display mb-5 opacity-50">:</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
