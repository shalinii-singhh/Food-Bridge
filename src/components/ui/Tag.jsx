// Purpose: Small badge to display status in the LiveFeed.
// Modifiable: Padding, font size, border rounding.
export default function Tag({ label, color }) {
  return (
    <span 
      className="text-[10px] font-sans font-bold px-2.5 py-1 rounded-full tracking-wider shrink-0"
      style={{
        backgroundColor: `${color}1a`,
        color: color,
        border: `1px solid ${color}30`
      }}
    >
      {label}
    </span>
  );
}
