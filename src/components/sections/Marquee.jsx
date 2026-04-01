import { marqueeItems } from "../../data/marquee";

// Purpose: Sliding text ticker.
// Modifiable: Scrolling speed (in tailwind.config.js), border styles.
export default function Marquee() {
  return (
    <div className="border-t border-b border-border py-3.5 overflow-hidden bg-white/40">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span 
            key={i} 
            className="font-sans text-[13px] text-textMain/70 mr-16 font-semibold tracking-wider"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
