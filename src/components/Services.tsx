"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Architecture",
    description:
      "From concept to completion — bespoke residential, commercial, and institutional structures designed with precision.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Interior Design",
    description:
      "Thoughtful interiors that balance aesthetics with functionality — spaces that feel as good as they look.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Master Planning",
    description:
      "Large-scale vision for townships, campuses, and urban developments — integrating community, ecology, and form.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      </svg>
    ),
  },
  {
    title: "Design Consultation",
    description:
      "Expert guidance on materials, spatial planning, and design strategy — for clients who seek clarity before commitment.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs tracking-[0.3em] uppercase text-stone-400 mb-4"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-stone-900"
            >
              Expertise
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-lg leading-relaxed font-light self-end max-w-lg"
          >
            Our practice spans multiple disciplines, allowing us to deliver
            holistic design solutions from the structural shell to the furniture
            details.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-stone-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-8 md:p-12 border-b border-stone-200 ${
                index % 2 === 0 ? "md:border-r" : ""
              } hover:bg-stone-50 transition-colors duration-500 cursor-pointer`}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 flex items-center justify-center border border-stone-200 rounded-full text-stone-400 group-hover:border-stone-800 group-hover:text-stone-800 transition-all duration-300 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-800 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 text-stone-400 group-hover:text-stone-800 transition-colors text-sm tracking-wider uppercase pt-2 cursor-pointer"
                  >
                    <span>Learn more</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative h-[300px] md:h-[400px] rounded-sm overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=80"
            alt="Architecture workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="font-serif text-3xl md:text-5xl mb-4">
                Have a vision?
              </h3>
              <p className="text-white/70 text-lg font-light mb-8 max-w-md mx-auto">
                We turn ambitious ideas into architectural reality.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Get in Touch
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
