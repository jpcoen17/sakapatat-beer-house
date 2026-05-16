"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "🌿",
    title: "Outdoor Vibes",
    desc: "Breathe in the night air under warm string lights. Our open-air garden is designed for comfort, community, and unforgettable evenings in Yogyakarta.",
    accent: "Nature & Air",
  },
  {
    emoji: "🎸",
    title: "Live Music",
    desc: "From acoustic sessions to live bands, the soundtrack changes every night. Good music makes cold beer taste even better.",
    accent: "Every Night",
  },
  {
    emoji: "🕯️",
    title: "Cozy Night",
    desc: "Warm ambient lighting, comfortable seating, and a relaxed atmosphere. Whether you're with friends or flying solo, this is your spot.",
    accent: "Always Welcoming",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#1B1B1B]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#D6B98C] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Why Come Here
          </p>
          <h2
            className="text-[#F5F1EA] leading-none tracking-widest uppercase"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            The <span className="text-[#D6B98C]">Experience</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-[#111111] border border-[#2C2C2C] hover:border-[#6F4E37]/50 p-8 transition-colors duration-400 overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6F4E37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Emoji */}
              <div className="text-4xl mb-5">{feat.emoji}</div>

              {/* Accent tag */}
              <p className="text-[#D6B98C]/50 text-[9px] tracking-[0.35em] uppercase mb-2 font-medium">
                {feat.accent}
              </p>

              {/* Title */}
              <h3
                className="text-[#F5F1EA] text-2xl tracking-widest uppercase mb-3"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
              >
                {feat.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-[#6F4E37]/60 mb-4 transition-all duration-400 group-hover:w-16" />

              {/* Description */}
              <p className="text-[#F5F1EA]/50 text-sm leading-relaxed font-light">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 bg-[#6F4E37]/10 border border-[#6F4E37]/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p
              className="text-[#D6B98C] text-2xl md:text-3xl tracking-widest uppercase"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
            >
              Enjoy Alone or With Friends
            </p>
            <p className="text-[#F5F1EA]/40 text-sm mt-1 font-light">
              DM us on Instagram for reservations & private events
            </p>
          </div>
          <a
            href="https://www.instagram.com/sakapatatyogyakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#6F4E37] hover:bg-[#8B6347] text-[#F5F1EA] px-7 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 font-medium"
          >
            Book via Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
