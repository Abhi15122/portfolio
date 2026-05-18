"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { easings } from "@/lib/motion-tokens";
import { useAppDispatch } from "@/store";
import { setPreloaderDone } from "@/store/uiSlice";

export default function Preloader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reduce) {
      setCount(100);
      setShow(false);
      dispatch(setPreloaderDone(true));
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const total = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / total);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setShow(false);
          dispatch(setPreloaderDone(true));
          document.body.style.overflow = "";
        }, 320);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [reduce, dispatch]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="preloader"
          aria-hidden
          className="fixed inset-0 z-[300] bg-canvas flex items-end justify-between px-6 md:px-12 pb-10 pointer-events-none"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: easings.expoOut }}
        >
          <div className="font-display text-[clamp(5rem,18vw,16rem)] leading-none text-ink">
            {count}
            <span className="text-accent">.</span>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted mb-4">
            Abhinav Verma — Portfolio
          </div>
          <div
            className="absolute left-0 bottom-0 h-px bg-accent"
            style={{ width: `${count}%` }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
