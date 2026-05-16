"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/g10.png')" }}
      />

      {/* Dark overlay — layered for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/60 to-[#111111]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-[#111111]/60" />

      {/* Warm amber glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#6F4E37]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-[#D6B98C] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-light"
        >
          True Belgian Bar · Yogyakarta
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="text-[#F5F1EA] leading-none tracking-widest uppercase mb-6"
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(3rem, 10vw, 9rem)",
          }}
        >
          Sakapatat
          <br />
          <span className="text-[#D6B98C]">Beer House</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-[#F5F1EA]/70 text-base md:text-lg max-w-md mx-auto mb-10 font-light leading-relaxed"
        >
          Warm lights, cold drinks, and unforgettable nights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-2 bg-[#6F4E37] hover:bg-[#8B6347] text-[#F5F1EA] px-8 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 font-medium"
          >
            Explore Menu
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#D6B98C]/60 hover:border-[#D6B98C] text-[#D6B98C] px-8 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 font-medium"
          >
            Visit Us
          </a>
        </motion.div>

        {/* Open hours badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
          className="mt-12 inline-flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#D6B98C] animate-pulse" />
          <span className="text-[#F5F1EA]/50 text-xs tracking-widest uppercase">
            Opens Daily · 5PM Onwards
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#F5F1EA]/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#D6B98C]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
