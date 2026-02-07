"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-[#faf9f6] text-[#1a1a1a] flex items-center justify-center min-h-[80vh] overflow-hidden"
    >
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=60"
          alt="Architecture"
          fill
          className="object-cover opacity-[0.06]"
        />
      </div>

      {/* Decorative lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-12 md:left-24 top-0 bottom-0 w-[1px] bg-stone-200 origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute right-12 md:right-24 top-0 bottom-0 w-[1px] bg-stone-200 origin-top"
      />

      <div className="relative max-w-5xl text-center z-10">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs tracking-[0.4em] uppercase text-stone-400 mb-12"
        >
          Our Philosophy
        </motion.span>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-tight"
        >
          &ldquo;Architecture is not just about space, but about how light,
          material, and emptiness interact to frame a moment of calm.&rdquo;
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-stone-800 mx-auto mt-12 mb-6"
        />

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-block text-sm tracking-wider text-stone-500 font-light italic"
        >
          — Navya Architects, Studio Principles
        </motion.span>
      </div>
    </section>
  );
}
