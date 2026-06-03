"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const controls = useAnimation();

  const initial = {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
  };

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, x: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Counter animation for stats */
interface CounterProps {
  value: string;
  suffix?: string;
  className?: string;
}

export function Counter({ value, suffix = "", className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const numericValue = parseInt(value.replace(/,/g, ""), 10);

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const duration = 1800;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numericValue);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, numericValue, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
