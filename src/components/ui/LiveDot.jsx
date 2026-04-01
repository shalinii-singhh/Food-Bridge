// Purpose: A tiny pulsing green dot indicating "LIVE" status.
// Modifiable: Adjust dimension, color, or pulse animation.
export default function LiveDot({ size = "w-2 h-2" }) {
  return (
    <div className={`ring-live rounded-full bg-live relative ${size}`}></div>
  );
}
