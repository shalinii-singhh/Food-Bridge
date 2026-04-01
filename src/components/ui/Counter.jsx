import { useState, useEffect, useRef } from "react";

// Purpose: An animated number counter that increments when visible on screen.
// Modifiable: You can change the increment step, the observer threshold, or duration.
export default function Counter({ end, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef();
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let cur = 0;
      const step = Math.ceil(end / 60);
      const t = setInterval(() => {
        cur = Math.min(cur + step, end);
        setN(cur);
        if (cur >= end) clearInterval(t);
      }, 20);
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}
