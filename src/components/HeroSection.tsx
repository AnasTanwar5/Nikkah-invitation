import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";
import EventCards from "./EventCards";
import CountdownTimer from "./CountdownTimer";
import QuranicCarousel from "./QuranicCarousel";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden z-10 w-full">
      {/* Corner Floral Decorations */}
      <img src="/assets/flower-corner.png" alt="" className="absolute -top-4 -left-4 w-48 md:w-64 lg:w-80 opacity-95 pointer-events-none z-0" />
      <img src="/assets/flower-corner.png" alt="" className="absolute -top-4 -right-4 w-48 md:w-64 lg:w-80 opacity-95 pointer-events-none z-0 scale-x-[-1]" />

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
        <motion.div
          className="font-body text-sm md:text-base text-deep-accent mb-8 opacity-80 leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.8, duration: 1 }}>
          <p className="mb-3">With the blessings of Allah</p>
          <p className="mb-3 font-display italic text-base md:text-xl gold-glow leading-tight max-w-[280px] md:max-w-none mx-auto">
            We, Mr & Mrs Anwar Qureshi <br className="md:hidden" /> 
            are delighted to invite you to the
          </p>
          <p>wedding ceremony of</p>
        </motion.div>

        {/* Bride name */}
        <div className="flex flex-col items-center mb-6">
          <motion.h1
            className="font-display text-6xl md:text-8xl font-light gold-text name-glow leading-none mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            Aaliya
          </motion.h1>
          <motion.p
            className="font-body text-xs md:text-sm tracking-widest text-deep-accent/80 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}>
            D/o Anwar Qureshi & Dolat Qureshi
          </motion.p>
        </div>

        <motion.span
          className="block font-display text-3xl md:text-4xl gold-glow italic my-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}>
          &amp;
        </motion.span>

        {/* Groom name */}
        <div className="flex flex-col items-center mb-8">
          <motion.h1
            className="font-display text-6xl md:text-8xl font-light gold-text name-glow leading-none mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}>
            Sameer
          </motion.h1>
          <motion.p
            className="font-body text-xs md:text-sm tracking-widest text-deep-accent/80 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}>
            S/o Aleem Barudgar & Umme Hanni Barudgar
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}>

          <GoldDivider className="mt-8 mb-12" />
        </motion.div>


        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}>
          <p className="font-body text-sm md:text-base gold-glow italic mb-1 uppercase tracking-[0.2em]">Insha Allah</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text name-glow leading-tight">Nikkah</h2>
        </motion.div>

        {/* Event Detail Cards */}
        <EventCards />
        <CountdownTimer />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}>

          <GoldDivider className="my-10" />
        </motion.div>

        {/* Center Floral Decoration */}
        <motion.div
          className="mb-6 mt-2 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}>
          <img src="/assets/flower-center.png" alt="" className="w-32 md:w-48 lg:w-56 opacity-95 pointer-events-none" />
        </motion.div>

        {/* Quranic Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="w-full relative z-20">
          <QuranicCarousel />
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