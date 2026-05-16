"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1B1B1B]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6"
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="text-[#D6B98C] text-2xl tracking-widest uppercase"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
              >
                Sakapatat
              </p>
              <p className="text-[#F5F1EA]/30 text-[9px] tracking-[0.35em] uppercase">
                Beer House & Resto
              </p>
            </div>
            <p className="text-[#F5F1EA]/40 text-xs leading-relaxed font-light max-w-[220px]">
              True Belgian Bar in the heart of Yogyakarta. Warm lights, cold
              drinks, unforgettable nights.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]" />
              <span className="text-[#F5F1EA]/30 text-xs tracking-widest uppercase">
                Opens Daily 5PM
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[#F5F1EA]/30 text-[9px] tracking-[0.35em] uppercase mb-5 font-medium">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F5F1EA]/50 hover:text-[#D6B98C] text-sm tracking-wider transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & info */}
          <div>
            <p className="text-[#F5F1EA]/30 text-[9px] tracking-[0.35em] uppercase mb-5 font-medium">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/sakapatatyogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#F5F1EA]/50 hover:text-[#D6B98C] text-sm tracking-wide transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @sakapatatyogyakarta
              </a>
              <p className="text-[#F5F1EA]/30 text-xs font-light leading-relaxed">
                DM for reservations
                <br />& private events
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1B1B1B] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#F5F1EA]/20 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Sakapatat Beer House & Resto
          </p>
          <p className="text-[#F5F1EA]/20 text-xs tracking-widest uppercase">
            🍺 True Belgian Bar · Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
