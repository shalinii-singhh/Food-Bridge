import Counter from "../ui/Counter";
import LiveDot from "../ui/LiveDot";
import { heroStats } from "../../data/stats";

// Purpose: Main hero section for the landing page.
// Modifiable: Headings, text, CTA buttons, and statistics.
export default function Hero() {
  return (
    <div>
      <div className="inline-flex items-center gap-2.5 mb-11 bg-white/60 px-3 py-1.5 rounded-full border border-border shadow-sm">
        <LiveDot />
        <span className="font-sans text-[12px] text-live font-semibold tracking-wider">
          LIVE · <Counter end={1247} /> meals rescued today
        </span>
      </div>

      <h1 className="font-serif text-[clamp(60px,8.5vw,100px)] leading-[0.9] tracking-[-3px] mb-9 font-normal text-textMain">
        Food<br />
        <em className="text-primary not-italic italic">shouldn't</em><br />
        <span className="text-transparent" style={{ WebkitTextStroke: "2px #16a34a" }}>die.</span>
      </h1>

      <p className="font-sans text-[16px] text-textMuted leading-relaxed max-w-[440px] mb-12">
        We connect surplus food from restaurants &amp; events to verified NGOs — matched by AI, delivered by humans, in real time.
      </p>

      <div className="flex gap-4 flex-wrap mb-20">
        <button className="bg-gradient-to-br from-primary to-green-700 text-white border-none cursor-pointer font-sans font-semibold py-4 px-9 rounded-full text-[15px] shadow-[0_0_20px_rgba(22,163,74,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,163,74,0.3)] active:scale-95">
          🍛 Donate Surplus Food
        </button>
        <button className="bg-transparent text-primary hover:text-white border border-primary/30 cursor-pointer font-sans font-medium py-4 px-8 rounded-full text-[15px] transition-all hover:bg-primary/90 hover:border-primary active:scale-95">
          We're an NGO →
        </button>
      </div>

      <div className="grid grid-cols-3 border-t border-border pt-11 gap-0">
        {heroStats.map((x, i) => (
          <div key={i} className="pr-7">
            <div className="font-serif text-[clamp(38px,5vw,58px)] leading-none tracking-[-2px]" style={{ color: x.col }}>
              <Counter end={x.n} suffix={x.s} />
            </div>
            <div className="font-sans text-[11px] text-textMuted mt-2 tracking-wider uppercase font-semibold">
              {x.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
