const GoldDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold opacity-70">
        <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="currentColor" />
      </svg>
      <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
    </div>
  );
};

export default GoldDivider;
