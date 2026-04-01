import { Link } from "react-router-dom";

// Purpose: Application footer.
// Modifiable: Links, copyright year, mission statement.
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-[1300px] w-full mx-auto mt-20 bg-background/50">
      <div className="flex items-center gap-2.5 mb-4 md:mb-0">
        <span className="text-lg">🌾</span>
        <span className="font-sans text-[13px] font-medium text-textMuted hover:text-textMain transition-colors">
          FoodBridge · Zero Waste Mission
        </span>
      </div>
      <span className="font-sans text-[12px] text-slate-400">
        Made to end hunger · © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
