"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "The Stone House",
    category: "Residential",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
  },
  {
    id: 2,
    title: "Maison De Verre",
    category: "Restoration",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
  {
    id: 3,
    title: "Gallery Mono",
    category: "Cultural",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
  },
  {
    id: 4,
    title: "Pavilion 09",
    category: "Public",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  },
];

export default function SelectedWorks() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden"
    >
      <div className="px-6 md:px-12 mb-16 flex items-end justify-between">
        <div>
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-6xl">Selected Works</h2>
        </div>
        <span className="hidden md:block font-sans text-xs tracking-widest uppercase opacity-50">
          Drag / Scroll
        </span>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-8 px-6 md:px-12 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] snap-center group cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="px-6 py-3 border border-white text-white text-sm tracking-widest uppercase backdrop-blur-sm">
                  View Project
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="flex justify-between items-baseline border-t border-white/20 pt-4">
              <h3 className="font-serif text-2xl md:text-3xl group-hover:translate-x-2 transition-transform duration-500">
                {project.title}
              </h3>
              <div className="text-right">
                <span className="block font-sans text-xs tracking-widest uppercase opacity-60">
                  {project.category}
                </span>
                <span className="block font-sans text-xs opacity-40 mt-1">
                  {project.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer */}
        <div className="w-12 flex-shrink-0" />
      </div>
    </section>
  );
}
