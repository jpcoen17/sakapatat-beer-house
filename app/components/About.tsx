"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <Image
                src="/images/about-hero.png"
                alt="Fresh Heineken on tap at Sakapatat Beer House"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6F4E37]/30 to-transparent pointer-events-none" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#6F4E37]/30 pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 md:top-8 md:-left-8 bg-[#6F4E37] px-4 py-3">
              <p
                className="text-[#F5F1EA] text-xs tracking-widest uppercase leading-relaxed"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
              >
                🍺 True Belgian Bar
              </p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <p className="text-[#D6B98C] text-xs tracking-[0.35em] uppercase font-light">
                Our Story
              </p>
              <div className="section-divider" />
            </div>

            <h2
              className="text-[#F5F1EA] leading-none tracking-widest uppercase"
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              A Night You&apos;ll
              <br />
              <span className="text-[#D6B98C]">Always Remember</span>
            </h2>

            <p className="text-[#F5F1EA]/60 leading-relaxed font-light">
              Born from a love of Belgian brewing tradition and Yogyakarta&apos;s
              vibrant spirit, Sakapatat Beer House & Resto is more than just a
              bar — it&apos;s a place where good company meets great beer.
            </p>
            <p className="text-[#F5F1EA]/60 leading-relaxed font-light">
              Whether you come alone to unwind or with friends to celebrate,
              our outdoor garden atmosphere sets the perfect mood. Cold craft
              beers, signature cocktails, and hearty food — all under the open
              Yogyakarta sky.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2C2C2C]">
              {[
                { num: "6.9K+", label: "Followers" },
                { num: "1.1K+", label: "Posts" },
                { num: "5PM", label: "Daily Open" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-[#D6B98C] text-2xl tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-[#F5F1EA]/40 text-xs tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
