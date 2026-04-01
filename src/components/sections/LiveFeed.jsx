import Tag from "../ui/Tag";
import LiveDot from "../ui/LiveDot";
import { feed } from "../../data/feed";

// Purpose: Displays the real-time feed window on the landing page.
// Modifiable: Window styling, floating emojis, map link.
export default function LiveFeed() {
  return (
    <div className="relative pt-2.5">
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="bg-white/80 border border-border rounded-3xl p-6 backdrop-blur-xl relative shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between mb-5">
          <span className="font-sans text-[13px] font-bold text-textMain">Live Rescue Feed</span>
          <div className="flex items-center gap-2">
            <LiveDot size="w-1.5 h-1.5" />
            <span className="font-sans text-[11px] text-live font-bold tracking-wider">LIVE</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {feed.map((item, i) => (
            <div 
              key={i} 
              className="bg-background/80 border border-border rounded-xl px-4 py-3 flex items-center gap-3 transition-colors hover:border-primaryLight/50"
              style={{ borderLeft: `3px solid ${item.color}`, animationDelay: `${i * .14}s` }}
            >
              <span className="text-[22px] shrink-0">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-[12px] font-semibold text-textMain leading-snug">{item.msg}</p>
                <p className="font-sans text-[10px] text-textMuted mt-1">{item.ago} ago</p>
              </div>
              <Tag label={item.label} color={item.color} />
            </div>
          ))}
        </div>

        <div className="mt-5 p-3.5 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-between">
          <span className="font-sans text-[12px] text-primary font-medium">🌍 Active in <b className="font-bold">14 cities</b> across India</span>
          <span className="font-sans text-[11px] text-primary/60 font-semibold cursor-pointer hover:text-primary transition-colors">View map →</span>
        </div>
      </div>

      {/* Floating emojis adapted for light mode */}
      <div className="animate-float absolute -top-7 -right-4 text-[38px] drop-shadow-[0_4px_10px_rgba(251,191,36,0.3)]">🍱</div>
      <div className="animate-float2 absolute bottom-12 -right-9 text-[30px] drop-shadow-[0_4px_10px_rgba(52,211,153,0.3)]">🥗</div>
      <div className="animate-float3 absolute top-28 -left-8 text-[26px] drop-shadow-[0_4px_10px_rgba(251,113,133,0.3)]">🍲</div>
    </div>
  );
}
