"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a] text-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-5xl md:text-7xl mb-12"
                >
                    Let's build something <br /> timeless together.
                </motion.h2>

                <form className="max-w-md mx-auto space-y-8 text-left">
                    <div className="space-y-4">
                        <label className="block text-xs uppercase tracking-widest text-neutral-500">Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors font-serif text-xl" />
                    </div>
                    <div className="space-y-4">
                        <label className="block text-xs uppercase tracking-widest text-neutral-500">Email</label>
                        <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors font-serif text-xl" />
                    </div>

                    <button className="mt-12 w-full py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs">
                        Start Project
                    </button>
                </form>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-sans text-neutral-500 uppercase tracking-widest">
                    <div>
                        <p className="text-white mb-2">London</p>
                        <p>123 Design District</p>
                    </div>
                    <div>
                        <p className="text-white mb-2">Email</p>
                        <p>studio@navya.arch</p>
                    </div>
                    <div>
                        <p className="text-white mb-2">Social</p>
                        <p>Instagram / LinkedIn</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
