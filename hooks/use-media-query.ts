import { useEffect, useState } from "react";

const BreakPoint = {
  x1: 160,
  x2: 320,
  x3: 480,
  sm: 640,
  md: 768,
  x5: 800,
  x6: 960,
  lg: 1024,
  x7: 1120,
  xl: 1280,
  x9: 1440,
  "2xl": 1536,
  x10: 1600,
};

type BreakPointType = keyof typeof BreakPoint;

export function useMediaQuery(bp: BreakPointType = "md") {
  const [mq, setMq] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const breakPoint = BreakPoint[bp];
    const mql = window.matchMedia(`(max-width: ${breakPoint - 1}px)`);
    const onChange = () => setMq(mql.matches);
    mql.addEventListener("change", onChange);
    setMq(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, [bp]);

  if (!mounted) return false;
  
  return mq;
}
