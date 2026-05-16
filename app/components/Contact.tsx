"use client";

import { motion } from "framer-motion";

const WA_NUMBER = "6282231197986";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20Sakapatat%2C%20saya%20ingin%20reservasi`;

const contactInfo = [
  { icon: "📍", label: "Location", value: "Yogyakarta, Indonesia", sub: "Taman Bir · True Belgian Bar" },
  { icon: "🕗", label: "Hours", value: "Opens Daily 5PM", sub: "Until late · Every day" },
  { icon: "📱", label: "Reservasi & Info", value: "+62 822-3119-7986", sub: "WhatsApp untuk reservasi & event", link: WA_LINK, isWA: true },
  { icon: "📸", label: "Instagram", value: "@sakapatatyogyakarta", sub: "DM for reservations & events", link: "https://www.instagram.com/sakapatatyogyakarta" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#D6B98C] text-xs tracking-[0.35em] uppercase font-light mb-3">Find Us</p>
          <h2 className="text-[#F5F1EA] leading-none tracking-widest uppercase"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Come <span className="text-[#D6B98C]">Visit Us</span>
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, i) => (
              <motion.div key={info.label}
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }} viewport={{ once: true }}
                className="group flex items-start gap-5 bg-[#1B1B1B] border border-[#2C2C2C] hover:border-[#6F4E37]/50 p-6 transition-colors duration-300"
              >
                <span className="text-2xl mt-0.5 shrink-0">{info.icon}</span>
                <div className="flex-1">
                  <p className="text-[#D6B98C]/50 text-[9px] tracking-[0.3em] uppercase mb-1 font-medium">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer"
                      className="text-[#F5F1EA] font-medium tracking-wide hover:text-[#D6B98C] transition-colors duration-300 block">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-[#F5F1EA] font-medium tracking-wide">{info.value}</p>
                  )}
                  <p className="text-[#F5F1EA]/40 text-xs mt-1 font-light">{info.sub}</p>
                </div>
                {/* WA badge */}
                {"isWA" in info && info.isWA && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 self-center bg-[#25D366] hover:bg-[#1da851] text-white text-[10px] tracking-widest uppercase px-3 py-1.5 transition-colors duration-300 font-medium">
                    Chat
                  </a>
                )}
              </motion.div>
            ))}

            {/* WA Reservasi CTA */}
            <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }} viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white py-4 px-8 transition-all duration-300 font-medium tracking-widest uppercase text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservasi via WhatsApp
            </motion.a>

            {/* Instagram CTA */}
            <motion.a href="https://www.instagram.com/sakapatatyogyakarta" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#6F4E37] to-[#8B6347] hover:from-[#8B6347] hover:to-[#6F4E37] text-[#F5F1EA] py-4 px-8 transition-all duration-400 font-medium tracking-widest uppercase text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow @sakapatatyogyakarta
            </motion.a>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }} viewport={{ once: true }}
          >
            <div className="relative w-full aspect-[4/3] bg-[#1B1B1B] border border-[#2C2C2C] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126672.42024266264!2d110.28445254335936!3d-7.797067699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc9%3A0x4026b7a44df9580!2sYogyakarta!5e0!3m2!1sen!2sid!4v1715800000000!5m2!1sen!2sid"
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Sakapatat Beer House Location"
                className="absolute inset-0"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-[#111111]/90 border border-[#2C2C2C] px-4 py-2">
              <p className="text-[#D6B98C] text-sm tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
                Yogyakarta, Indonesia
              </p>
              <p className="text-[#F5F1EA]/40 text-[9px] tracking-widest uppercase">Opens daily · 5PM onwards</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
