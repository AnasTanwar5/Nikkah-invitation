import { motion } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const CurtainReveal = ({ onComplete }: Props) => {
  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {/* Left curtain */}
      <motion.div
        className="absolute top-0 left-0 h-full"
        style={{ width: "55%" }}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        onAnimationComplete={onComplete}
      >
        {/* Main white fabric */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#f5f0ea] to-[#ede6dd]" />
        
        {/* Fabric fold lines */}
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent 0px,
            rgba(212, 175, 55, 0.03) 6px,
            transparent 12px,
            rgba(0, 0, 0, 0.02) 20px,
            transparent 28px
          )`
        }} />

        {/* Gold embroidery pattern - vertical border */}
        <div className="absolute top-0 right-0 w-12 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-[#D4AF37]/20 to-transparent" />
          {/* Gold filigree pattern */}
          <svg className="absolute top-0 right-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 48 800">
            <defs>
              <pattern id="goldPatternL" x="0" y="0" width="48" height="80" patternUnits="userSpaceOnUse">
                <path d="M24 0 Q36 20 24 40 Q12 60 24 80" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="24" cy="40" r="3" fill="#D4AF37" opacity="0.5" />
                <path d="M16 20 Q24 28 32 20" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
                <path d="M16 60 Q24 52 32 60" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="48" height="800" fill="url(#goldPatternL)" />
          </svg>
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#F1D98C] via-[#D4AF37] to-[#F1D98C]" />
        </div>

        {/* Gold embroidery scatter on fabric */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 400 800">
          <defs>
            <pattern id="floralL" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="15" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="60" cy="60" r="8" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <path d="M60 45 Q65 55 60 60 Q55 55 60 45Z" fill="#D4AF37" opacity="0.3" />
              <path d="M60 75 Q65 65 60 60 Q55 65 60 75Z" fill="#D4AF37" opacity="0.3" />
              <path d="M45 60 Q55 65 60 60 Q55 55 45 60Z" fill="#D4AF37" opacity="0.3" />
              <path d="M75 60 Q65 65 60 60 Q65 55 75 60Z" fill="#D4AF37" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="400" height="800" fill="url(#floralL)" />
        </svg>

        {/* P-shape drape - gathered/tied in the middle-right */}
        <div className="absolute top-[30%] right-0 w-[40%] h-[40%]">
          <div className="absolute inset-0 rounded-bl-[80px]" style={{
            background: "radial-gradient(ellipse at right center, rgba(0,0,0,0.06) 0%, transparent 70%)"
          }} />
        </div>

        {/* Top drape swag */}
        <div className="absolute top-0 left-0 right-0 h-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ede6dd] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-8" style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.05) 0%, transparent 70%)"
          }} />
        </div>

        {/* Bottom ruffle */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <div className="absolute inset-0 bg-gradient-to-t from-[#e8dfd5] to-transparent" />
          <svg className="absolute bottom-0 w-full h-8 opacity-30" viewBox="0 0 400 20" preserveAspectRatio="none">
            <path d="M0 10 Q25 0 50 10 Q75 20 100 10 Q125 0 150 10 Q175 20 200 10 Q225 0 250 10 Q275 20 300 10 Q325 0 350 10 Q375 20 400 10 L400 20 L0 20Z" fill="#D4AF37" opacity="0.15" />
          </svg>
        </div>

        {/* Fabric shadow on inner edge */}
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black/[0.08] to-transparent" />

        {/* Tied-back gather point */}
        <div className="absolute right-2 top-[35%] w-8 h-8">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F1D98C] to-[#D4AF37] opacity-50 shadow-lg" />
        </div>
      </motion.div>

      {/* Right curtain */}
      <motion.div
        className="absolute top-0 right-0 h-full"
        style={{ width: "55%" }}
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 2.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        {/* Main white fabric */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#f5f0ea] to-[#ede6dd]" />
        
        {/* Fabric fold lines */}
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent 0px,
            rgba(212, 175, 55, 0.03) 6px,
            transparent 12px,
            rgba(0, 0, 0, 0.02) 20px,
            transparent 28px
          )`
        }} />

        {/* Gold embroidery pattern - vertical border */}
        <div className="absolute top-0 left-0 w-12 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
          <svg className="absolute top-0 left-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 48 800">
            <defs>
              <pattern id="goldPatternR" x="0" y="0" width="48" height="80" patternUnits="userSpaceOnUse">
                <path d="M24 0 Q12 20 24 40 Q36 60 24 80" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="24" cy="40" r="3" fill="#D4AF37" opacity="0.5" />
                <path d="M16 20 Q24 28 32 20" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
                <path d="M16 60 Q24 52 32 60" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="48" height="800" fill="url(#goldPatternR)" />
          </svg>
          <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#F1D98C] via-[#D4AF37] to-[#F1D98C]" />
        </div>

        {/* Gold embroidery scatter */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 400 800">
          <defs>
            <pattern id="floralR" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="15" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="60" cy="60" r="8" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <path d="M60 45 Q65 55 60 60 Q55 55 60 45Z" fill="#D4AF37" opacity="0.3" />
              <path d="M60 75 Q65 65 60 60 Q55 65 60 75Z" fill="#D4AF37" opacity="0.3" />
              <path d="M45 60 Q55 65 60 60 Q55 55 45 60Z" fill="#D4AF37" opacity="0.3" />
              <path d="M75 60 Q65 65 60 60 Q65 55 75 60Z" fill="#D4AF37" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="400" height="800" fill="url(#floralR)" />
        </svg>

        {/* P-shape drape */}
        <div className="absolute top-[30%] left-0 w-[40%] h-[40%]">
          <div className="absolute inset-0 rounded-br-[80px]" style={{
            background: "radial-gradient(ellipse at left center, rgba(0,0,0,0.06) 0%, transparent 70%)"
          }} />
        </div>

        {/* Top drape swag */}
        <div className="absolute top-0 left-0 right-0 h-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ede6dd] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-8" style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.05) 0%, transparent 70%)"
          }} />
        </div>

        {/* Bottom ruffle */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <div className="absolute inset-0 bg-gradient-to-t from-[#e8dfd5] to-transparent" />
          <svg className="absolute bottom-0 w-full h-8 opacity-30" viewBox="0 0 400 20" preserveAspectRatio="none">
            <path d="M0 10 Q25 0 50 10 Q75 20 100 10 Q125 0 150 10 Q175 20 200 10 Q225 0 250 10 Q275 20 300 10 Q325 0 350 10 Q375 20 400 10 L400 20 L0 20Z" fill="#D4AF37" opacity="0.15" />
          </svg>
        </div>

        {/* Fabric shadow on inner edge */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black/[0.08] to-transparent" />

        {/* Tied-back gather point */}
        <div className="absolute left-2 top-[35%] w-8 h-8">
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-[#F1D98C] to-[#D4AF37] opacity-50 shadow-lg" />
        </div>
      </motion.div>

      {/* Top valance/swag connecting both curtains */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-14 z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0ea] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </motion.div>
    </div>
  );
};

export default CurtainReveal;
