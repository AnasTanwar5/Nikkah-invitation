import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";
import EventCards from "./EventCards";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-wedding-gradient floral-pattern edge-vignette overflow-hidden">
      {/* Center glow */}
      <div className="absolute inset-0 center-glow" />

      <motion.div
        className="relative z-20 text-center px-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
        
        {/* Small bismillah reminder */}
        <motion.p
          className="font-arabic text-sm md:text-base gold-glow mt-8 mb-8 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}>
          
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.p>

        {/* Invitation text */}
        <motion.p
          className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-deep-accent mb-10 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.8, duration: 1 }}>
          
          Together with their families
        </motion.p>

        {/* Bride name */}
        <motion.h1
          className="font-display text-6xl md:text-8xl font-light gold-text name-glow leading-none mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}>Aaliya


        </motion.h1>

        <motion.span
          className="block font-display text-3xl md:text-4xl gold-glow italic my-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}>
          
          &amp;
        </motion.span>

        {/* Groom name */}
        <motion.h1
          className="font-display text-6xl md:text-8xl font-light gold-text name-glow leading-none mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}>Sameer


        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}>
          
          <GoldDivider className="my-8" />
        </motion.div>

        <motion.p
          className="font-body text-sm md:text-base text-foreground/80 leading-relaxed max-w-md mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}>
          
          Request the honor of your presence at the celebration of their Nikkah
        </motion.p>

        {/* Event Detail Cards */}
        <EventCards />
        <CountdownTimer />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}>
          
          <GoldDivider className="my-10" />
        </motion.div>

        {/* Quranic Verse */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}>
          
          <p className="font-arabic text-xl md:text-2xl gold-glow leading-relaxed name-glow">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <p className="font-body text-xs md:text-sm text-foreground/70 italic max-w-sm mx-auto leading-relaxed">
            "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>
          <p className="font-body text-xs text-foreground/50 tracking-wider">
            — Surah Ar-Rum (30:21)
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}>
          
          <GoldDivider />
          <p className="font-display text-lg md:text-xl gold-glow mt-6 italic">
            May Allah bless this union
          </p>
        </motion.div>
      </motion.div>
    </section>);

};

export default HeroSection;