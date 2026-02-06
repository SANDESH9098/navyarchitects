"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Core Size Animation (Figma Replication)
            // Transition from Full 100vw/100vh -> Pinned Top, Small Equal Margins margins

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                },
            });

            tl.to(imageWrapperRef.current, {
                width: "96%",      // Leaves 2% on left/right
                height: "88vh",    // Leaves 4vh on bottom (approx matching visual gap)
                borderRadius: "0px 0px 32px 32px", // Flat top, Curved bottom
                ease: "power3.inOut",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full bg-white overflow-hidden">
            {/* Top-aligned container for the image */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start">
                <div
                    ref={imageWrapperRef}
                    className="relative w-full h-full overflow-hidden z-0"
                    style={{ borderRadius: "0px" }} // Start sharp
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/interior.jpg"
                            alt="Interior Architecture"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark gradient overlay for text readability (bottom focused) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* TEXT CONTENT - Replicating Figma overlay with EXACT FONTS */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pb-12">
                        <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-end justify-between gap-12">

                            {/* Left Side: Headline & Subtext */}
                            <div className="max-w-4xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    style={{
                                        fontFamily: '"Helvetica Now", "Helvetica Neue", Helvetica, sans-serif',
                                        fontWeight: 500,
                                        fontSize: "58px",
                                        lineHeight: "66px",
                                        color: "rgb(255, 252, 245)"
                                    }}
                                    className="mb-8"
                                >
                                    Designing landmarks across <br /> India, Singapore & beyond
                                </motion.h1>

                                <div className="h-[1px] w-full bg-white/30 my-8" /> {/* Divider Line */}

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                    style={{
                                        fontFamily: '"Helvetica Now", "Helvetica Neue", Helvetica, sans-serif',
                                        fontWeight: 400,
                                        fontSize: "18px",
                                        lineHeight: "32px",
                                        color: "rgb(255, 252, 245)"
                                    }}
                                    className="max-w-2xl"
                                >
                                    Architecture and luxury interior specialists for premium residences, commercial infra, and high-end retail spaces.                                </motion.p>
                            </div>

                            {/* Right Side: Pause Button */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm mb-2"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(255, 252, 245)">
                                    <rect x="6" y="4" width="4" height="16"></rect>
                                    <rect x="14" y="4" width="4" height="16"></rect>
                                </svg>
                            </motion.button>

                        </div>
                    </div>

                    {/* Top Left Label */}
                    <div className="absolute top-32 left-8 md:left-16 text-white/50 text-xs font-mono tracking-widest bg-black/20 px-2 py-1 rounded">
                        01 / 05
                    </div>

                </div>
            </div>
        </div>
    );
}
