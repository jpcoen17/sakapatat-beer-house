"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/images/g10.png", alt: "Sakapatat Beer Garden outdoor hut — warm lights at night", col: "md:col-span-2", row: "md:row-span-2" },
  { src: "/images/g5.png",  alt: "Heineken beer row on tap — cold and fresh",               col: "",             row: "" },
  { src: "/images/g2.png",  alt: "Friends cheering cocktails together",                     col: "",             row: "" },
  { src: "/images/g6.png",  alt: "Friends enjoying a night out at Sakapatat",               col: "",             row: "" },
  { src: "/images/g1.png",  alt: "Friends having fun with cold beers",                      col: "",             row: "" },
  { src: "/images/g4.png",  alt: "Group hanging at the bar counter",                        col: "md:col-span-2", row: "" },
  { src: "/images/g7.png",  alt: "Group with Bintang beer tower",                           col: "",             row: "" },
  { src: "/images/g9.png",  alt: "Mixed group enjoying the outdoor beer garden",            col: "",             row: "" },
  { src: "/images/g8.png",  alt: "Night vibes with neon lights at Sakapatat",               col: "",             row: "" },
  { src: "/images/g3.png",  alt: "Sakapatat food — burger platter served fresh",            col: "",             row: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[#D6B98C] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Visual Stories
          </p>
          <h2
            className="text-[#F5F1EA] leading-none tracking-widest uppercase"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            The <span className="text-[#D6B98C]">Gallery</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-[#F5F1EA]/30 text-xs mt-4 tracking-wider font-light">
            Real nights. Real people. Real good times.
          </p>
        </motion.div>

        {/* Desktop grid — featured layout */}
        <div className="hidden md:grid grid-cols-4 grid-rows-[auto] gap-2.5">
          {/* Row 1: big featured (2×2) + 2 stacked */}
          <motion.div
            className="col-span-2 row-span-2 group relative overflow-hidden"
            style={{ aspectRatio: "1/1" }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <p className="text-[#F5F1EA] text-xs tracking-widest uppercase font-light bg-[#111111]/60 px-3 py-1.5">
                {galleryImages[0].alt}
              </p>
            </div>
          </motion.div>

          {/* Top right 2 cells */}
          {[galleryImages[1], galleryImages[2]].map((img, i) => (
            <motion.div
              key={img.src}
              className="col-span-1 group relative overflow-hidden"
              style={{ aspectRatio: "1/1" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 + 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/25 transition-all duration-400" />
            </motion.div>
          ))}

          {/* Second row right 2 cells */}
          {[galleryImages[3], galleryImages[4]].map((img, i) => (
            <motion.div
              key={img.src}
              className="col-span-1 group relative overflow-hidden"
              style={{ aspectRatio: "1/1" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 + 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/25 transition-all duration-400" />
            </motion.div>
          ))}

          {/* Row 3: wide (2) + 2 single */}
          <motion.div
            className="col-span-2 group relative overflow-hidden"
            style={{ aspectRatio: "16/9" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/30 to-transparent" />
          </motion.div>

          {[galleryImages[6], galleryImages[7]].map((img, i) => (
            <motion.div
              key={img.src}
              className="col-span-1 group relative overflow-hidden"
              style={{ aspectRatio: "1/1" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 + 0.15 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/25 transition-all duration-400" />
            </motion.div>
          ))}

          {/* Row 4: 2 singles + wide */}
          {[galleryImages[8], galleryImages[9]].map((img, i) => (
            <motion.div
              key={img.src}
              className="col-span-1 group relative overflow-hidden"
              style={{ aspectRatio: "1/1" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/25 transition-all duration-400" />
            </motion.div>
          ))}
        </div>

        {/* Mobile grid — 2 col */}
        <div className="grid md:hidden grid-cols-2 gap-2">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className={`group relative overflow-hidden ${i === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: (i % 4) * 0.07 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/sakapatatyogyakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#2C2C2C] hover:border-[#6F4E37] text-[#F5F1EA]/50 hover:text-[#D6B98C] px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            More on @sakapatatyogyakarta
          </a>
        </motion.div>

      </div>
    </section>
  );
}
