import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden bg-wedding-gradient floral-pattern edge-vignette">
      {/* Corner Floral Decorations */}
      <img src="/assets/flower-corner.png" alt="" className="absolute -top-4 -left-4 w-32 md:w-48 lg:w-64 opacity-95 pointer-events-none z-0" />
      <img src="/assets/flower-corner.png" alt="" className="absolute -top-4 -right-4 w-32 md:w-48 lg:w-64 opacity-95 pointer-events-none z-0 scale-x-[-1]" />
      <img src="/assets/flower-center.png" alt="" className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 md:w-48 lg:w-56 opacity-95 pointer-events-none" />

      <div className="text-center relative z-10">
        <h1 className="mb-4 text-6xl md:text-8xl font-display font-light gold-text name-glow">404</h1>
        <p className="mb-8 text-lg font-body text-deep-accent tracking-[0.2em] uppercase opacity-80">Oops! Page not found</p>
        <a href="/" className="block gold-glow hover:opacity-80 transition-opacity font-display italic text-2xl mt-4">
          Return to Invitation
        </a>
      </div>
    </div>
  );
};

export default NotFound;
