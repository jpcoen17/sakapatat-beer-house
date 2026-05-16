"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#2C2C2C]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" onClick={closeMenu} className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-sm overflow-hidden shrink-0">
                <Image src="/images/logo.jpg" alt="Sakapatat Beer Garden Logo" fill className="object-cover" sizes="48px" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#D6B98C] text-base md:text-lg tracking-widest font-bold" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                  SAKAPATAT
                </span>
                <span className="text-[#F5F1EA]/40 text-[8px] tracking-[0.28em] uppercase font-light">Beer House & Resto</span>
              </div>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#F5F1EA]/70 hover:text-[#D6B98C] text-sm tracking-widest uppercase transition-colors duration-300 font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://www.instagram.com/sakapatatyogyakarta" target="_blank" rel="noopener noreferrer"
                  className="border border-[#6F4E37] text-[#D6B98C] px-4 py-2 text-xs tracking-widest uppercase hover:bg-[#6F4E37] transition-all duration-300">
                  Instagram
                </a>
              </li>
            </ul>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8" aria-label="Toggle menu">
              <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} className="block h-px w-full bg-[#D6B98C]" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className="block h-px w-full bg-[#D6B98C]" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} className="block h-px w-full bg-[#D6B98C]" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#111111]/98 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {/* Logo in mobile menu */}
            <div className="relative w-16 h-16 rounded overflow-hidden mb-2">
              <Image src="/images/logo.jpg" alt="Sakapatat Logo" fill className="object-cover" sizes="64px" />
            </div>
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href} onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                className="text-[#F5F1EA] text-3xl tracking-widest uppercase hover:text-[#D6B98C] transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                {link.label}
              </motion.a>
            ))}
            <motion.a href="https://www.instagram.com/sakapatatyogyakarta" target="_blank" rel="noopener noreferrer" onClick={closeMenu}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.4, ease: "easeOut" }}
              className="border border-[#6F4E37] text-[#D6B98C] px-8 py-3 text-sm tracking-widest uppercase mt-4">
              @sakapatatyogyakarta
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
