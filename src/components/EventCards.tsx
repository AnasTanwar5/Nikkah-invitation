import { motion } from "framer-motion";
import { Calendar, BookOpen, UtensilsCrossed } from "lucide-react";

const EventCard = ({ icon: Icon, title, lines, delay, href }: {
  icon: typeof Calendar;
  title: string;
  lines: string[];
  delay: number;
  href?: string;
}) => {
  const content = (
    <motion.div
      className="relative flex flex-col items-center p-6 rounded-2xl border border-gold/20 backdrop-blur-sm cursor-pointer"
      style={{
        background: "linear-gradient(145deg, rgba(255,248,246,0.8) 0%, rgba(246,211,218,0.4) 50%, rgba(212,175,55,0.05) 100%)",
        boxShadow: "0 4px 24px rgba(201,124,138,0.1), inset 0 1px 0 rgba(212,175,55,0.15)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, #F3D27A 50%, #B8962E 100%)",
          boxShadow: "0 0 14px rgba(212,175,55,0.35)",
        }}
      >
        <Icon size={20} className="text-foreground" />
      </div>
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-deep-accent mb-2">{title}</h3>
      {lines.map((line, i) => (
        <p key={i} className={i === 0 ? "font-display text-lg gold-glow" : "font-body text-sm text-foreground/70"}>
          {line}
        </p>
      ))}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
};

const EventCards = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-3xl mx-auto mt-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.0, duration: 0.5 }}
    >
      <EventCard
        icon={Calendar}
        title="Date"
        lines={["May 8, 2026", "21 Dhū al-Qaʿdah 1447 AH", "Friday"]}
        delay={2.1}
      />
      <EventCard
        icon={BookOpen}
        title="Nikkah"
        lines={["After Namaz-e-Jummah", "Rajasthani Masjid", "Santacruz (West)"]}
        delay={2.3}
        href="https://maps.app.goo.gl/eMNxmTFwfRAeGDreA?g_st=ac"
      />
      <EventCard
        icon={UtensilsCrossed}
        title="Dinner"
        lines={["Kohinoor Marriage Lawn", "Andheri West, Mumbai"]}
        delay={2.5}
        href="https://maps.app.goo.gl/NNJsxM5MiVZeTfe19"
      />
    </motion.div>
  );
};

export default EventCards;
