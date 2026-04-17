import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  {
    arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    english: `"And We created you in pairs."`,
    reference: "— Surah An-Naba (78:8)",
  },
  {
    arabic: "وَأَنَّهُ خَلَقَ الزَّوْجَيْنِ الذَّكَرَ وَالْأُنثَى",
    english: `"And that He creates the two mates, the male and the female."`,
    reference: "— Surah An-Najm (53:45)",
  },
  {
    arabic: "وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ",
    english: `"And of all things We created two mates; perhaps you will remember."`,
    reference: "— Surah Adh-Dhariyat (51:49)",
  },
];

const QuranicCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[180px] md:min-h-[200px] relative mt-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full flex flex-col items-center justify-center text-center space-y-4 px-4 absolute top-0 left-0 right-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p className="font-arabic text-2xl md:text-3xl lg:text-4xl gold-glow leading-relaxed name-glow drop-shadow-sm">
            {QUOTES[currentIndex].arabic}
          </p>
          <p className="font-body text-sm md:text-base text-foreground/80 italic leading-relaxed">
            {QUOTES[currentIndex].english}
          </p>
          <p className="font-body text-xs md:text-sm text-foreground/50 tracking-widest uppercase">
            {QUOTES[currentIndex].reference}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute -bottom-8 flex gap-3">
        {QUOTES.map((_, i) => (
          <div
            key={i}
            className={`h-[2px] transition-all duration-700 rounded-full ${
              currentIndex === i ? "w-6 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" : "w-2 bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuranicCarousel;
