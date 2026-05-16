"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[999] bg-[#111111] flex flex-col items-center justify-center gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-24 h-24 rounded overflow-hidden"
          >
            <Image src="/images/logo.jpg" alt="Sakapatat" fill className="object-cover" sizes="96px" priority />
          </motion.div>

          {/* Beer glass SVG animation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Glass body */}
              <path d="M8 16 L4 68 H52 L48 16 Z" fill="none" stroke="#6F4E37" strokeWidth="2.5" strokeLinejoin="round" />
              {/* Handle */}
              <path d="M48 24 Q64 24 64 36 Q64 48 48 48" fill="none" stroke="#6F4E37" strokeWidth="2.5" strokeLinecap="round" />
              {/* Foam — animated */}
              <motion.ellipse
                cx="28" cy="16" rx="20" ry="7"
                fill="#D6B98C"
                initial={{ scaleY: 0.6, opacity: 0.6 }}
                animate={{ scaleY: [0.6, 1, 0.75, 1, 0.6], opacity: [0.6, 1, 0.9, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Beer liquid fill — animated rising */}
              <clipPath id="glass-clip">
                <path d="M9 20 L5 67 H51 L47 20 Z" />
              </clipPath>
              <motion.rect
                x="5" width="46" height="68"
                fill="#D6B98C"
                opacity={0.35}
                clipPath="url(#glass-clip)"
                initial={{ y: 68 }}
                animate={{ y: 20 }}
                transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              />
              {/* Bubbles */}
              {[14, 22, 32].map((x, i) => (
                <motion.circle
                  key={x}
                  cx={x} cy={60}
                  r={1.5}
                  fill="#D6B98C"
                  opacity={0.7}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: [-30, -50], opacity: [0, 0.8, 0] }}
                  transition={{ delay: 0.8 + i * 0.25, duration: 1.2, repeat: Infinity, repeatDelay: 0.8, ease: "easeOut" }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <p
              className="text-[#D6B98C] text-3xl tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
            >
              Sakapatat
            </p>
            <p className="text-[#F5F1EA]/30 text-[9px] tracking-[0.4em] uppercase mt-1">
              Beer House & Resto
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div className="w-32 h-px bg-[#2C2C2C] overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6F4E37] to-[#D6B98C]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
