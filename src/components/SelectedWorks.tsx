"use client";

import { motion } from "framer-motion";

const projects = [
    { id: 1, title: "The Stone House", category: "Residential", year: "2024" },
    { id: 2, title: "Maison De Verre", category: "Restoration", year: "2023" },
    { id: 3, title: "Gallery Mono", category: "Cultural", year: "2023" },
    { id: 4, title: "Pavilion 09", category: "Public", year: "2022" },
];

export default function SelectedWorks() {
    return (
        <section id="work" className="py-24 md:py-32 bg-[#1a1a1a] text-white overflow-hidden">
            <div className="px-6 md:px-12 mb-16 flex items-end justify-between">
                <h2 className="font-serif text-4xl md:text-5xl">Selected Works</h2>
                <span className="hidden md:block font-sans text-xs tracking-widest uppercase opacity-50">Drag / Scroll</span>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-8 px-6 md:px-12 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] snap-center group cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Image Placeholder */}
                        <div className="relative aspect-[4/5] bg-neutral-800 overflow-hidden mb-6 transition-all duration-700 group-hover:bg-neutral-700">
                            <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-serif text-3xl opacity-30">
                                {project.title} Visual
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="flex justify-between items-baseline border-t border-white/20 pt-4">
                            <h3 className="font-serif text-2xl md:text-3xl group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                            <div className="text-right">
                                <span className="block font-sans text-xs tracking-widest uppercase opacity-60">{project.category}</span>
                                <span className="block font-sans text-xs opacity-40 mt-1">{project.year}</span>
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
