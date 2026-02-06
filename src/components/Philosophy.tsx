"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
    return (
        <section className="py-32 md:py-64 px-6 md:px-12 bg-[#f4f4f4] text-[#1a1a1a] flex items-center justify-center min-h-[80vh]">
            <div className="max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight md:leading-tight"
                >
                    &ldquo;Architecture is not just about space, but about how light, material, and emptiness interact to frame a moment of calm.&rdquo;
                </motion.p>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-black mx-auto mt-12"
                />
            </div>
        </section>
    );
}
