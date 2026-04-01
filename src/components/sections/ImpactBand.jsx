import Counter from "../ui/Counter";
import { impactStats } from "../../data/stats";

// Purpose: Large impact statistics highlighted section.
// Modifiable: Background gradients, scanline animation.
export default function ImpactBand() {
  return (
    <section className="max-w-[1300px] mx-auto px-6 md:px-12 pb-28 relative z-10">
      <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-[40px] p-10 md:p-20 relative overflow-hidden border border-emerald-100 shadow-sm">
        <div className="scan-line" />
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.2),transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.15),transparent_70%)] pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse relative z-10">
          <div>
            <div className="font-sans text-[11px] tracking-[0.2em] uppercase text-emerald-600 font-bold mb-6">Real impact, right now</div>
            <div className="font-serif text-[clamp(60px,10vw,120px)] leading-[0.88] tracking-[-4px] text-emerald-600">
              <Counter end={1247} suffix="+" />
            </div>
            <p className="font-serif text-[28px] text-emerald-800/60 mt-2.5 italic">meals rescued today</p>
            <p className="font-sans text-[15px] text-textMuted mt-6 leading-relaxed max-w-[360px]">
              Every number is a real meal that didn't end up in a landfill. A real person who ate tonight.
            </p>
            <div className="mt-10">
              <button className="bg-gradient-to-br from-primary to-green-700 text-white border-none cursor-pointer font-sans font-semibold py-4 px-8 rounded-full text-[15px] shadow-[0_0_20px_rgba(22,163,74,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(22,163,74,0.4)] active:scale-95">
                Start Rescuing Food →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {impactStats.map((x, i) => (
              <div key={i} className="bg-white/60 border border-emerald-100 rounded-3xl p-6 transition-all hover:border-emerald-300 hover:-translate-y-1 shadow-sm backdrop-blur-sm">
                <div className="text-[28px] mb-4">{x.icon}</div>
                <div className="font-serif text-[42px] tracking-[-1.5px] leading-none" style={{ color: x.col }}>
                  <Counter end={x.n} suffix={x.s} />
                </div>
                <div className="font-sans text-[11px] text-emerald-700/60 mt-2.5 tracking-[0.06em] uppercase font-bold">
                  {x.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
