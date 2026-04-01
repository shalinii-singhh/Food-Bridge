import { Link } from "react-router-dom";

// Purpose: Main navigation header for the application.
// Modifiable: Link routes, CTA button color, logo.
export default function Navbar() {
  const links = [
    { label: "How it works", path: "/how-it-works" },
    { label: "Impact", path: "/impact" },
    { label: "NGOs", path: "/ngos" },
    { label: "Cities", path: "/cities" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primaryLight flex items-center justify-center text-lg shadow-[0_0_20px_rgba(22,163,74,0.2)]">
          <span className="text-white">🌾</span>
        </div>
        <span className="font-sans font-bold text-[17px] tracking-tight text-textMain">FoodBridge</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-9 font-sans text-sm font-medium">
        {links.map(l => (
          <Link key={l.label} to={l.path} className="text-textMuted hover:text-primary transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
      
      <Link 
        to="/donate" 
        className="bg-gradient-to-br from-primary to-green-700 text-white border-none cursor-pointer font-sans font-semibold py-2.5 px-6 rounded-full text-[13px] shadow-[0_0_20px_rgba(22,163,74,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(22,163,74,0.3)] active:scale-95"
      >
        Donate Surplus
      </Link>
    </nav>
  );
}
