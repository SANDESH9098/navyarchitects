"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  // Parallax for Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Text Animation for Hero
      const chars = heroTextRef.current?.querySelectorAll(".char");
      if (chars) {
        gsap.fromTo(
          chars,
          { opacity: 0, y: 100, rotateX: 90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      }

      // Philosophy Horizontal Scroll or Fade In
      const cards = philosophyRef.current?.querySelectorAll(".philosophy-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: philosophyRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white text-[#1a1a1a] overflow-hidden"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ y: heroY, opacity: opacityHero }}
          className="container mx-auto text-center z-10"
        >
          <p className="text-[#c0a080] uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-medium">
            Since 2012 — Nellore, India
          </p>
          <h1
            ref={heroTextRef}
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold leading-tight overflow-hidden text-balance"
          >
            {/* Splitting text for GSAP to animate characters */}
            {"Defining Spaces".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
            {"Crafting Legacies".split("").map((char, i) => (
              <span key={i + 20} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 font-sans"
          >
            We are Navya Architects. We blend the cultural richness of Nellore
            with contemporary design principles to build structures that
            breathe.
          </motion.div>
        </motion.div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-5 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L50 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section className="py-20 md:py-32 px-6 bg-[#f9f9f9]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#1a1a1a]">
              Built on Trust.
              <br />
              Designed for Life.
            </h2>
            <div className="w-20 h-1 bg-[#c0a080] mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rooted in the vibrant city of Nellore, Navya Architects has spent
              over a decade transforming landscapes and skylines. We believe
              that architecture is not just about buildings; it&apos;s about the
              people who inhabit them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our firm specializes in high-end residential, commercial, and
              institutional projects. From the bustling streets of Magunta
              Layout to the serene suburbs, our work stands as a testament to
              precision, sustainability, and artistic vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] w-full bg-gray-300 relative overflow-hidden md:order-2"
          >
            {/* Placeholder for an image */}
            <div className="absolute inset-0 bg-[#c0a080]/20 flex items-center justify-center text-[#1a1a1a]/20 text-4xl font-serif">
              Studio Image
            </div>
            {/* Decorative Frame */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#1a1a1a] -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY --- */}
      <section
        ref={philosophyRef}
        className="py-20 md:py-32 px-6 bg-[#1a1a1a] text-white"
      >
        <div className="container mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Guided by principles that ensure every line drawn has meaning and
              every space created serves a purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Contextual Design",
                desc: "Our designs respect the local climate, culture, and materials of Nellore, ensuring relevance and longevity.",
              },
              {
                title: "Sustainable Future",
                desc: "We integrate eco-friendly practices and energy-efficient systems to reduce our carbon footprint.",
              },
              {
                title: "Client Centric",
                desc: "Your vision is our blueprint. We collaborate closely to translate your dreams into concrete reality.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="philosophy-card bg-white/5 p-10 border border-white/10 hover:bg-[#c0a080] hover:text-[#1a1a1a] transition-all duration-500 group cursor-default"
              >
                <span className="text-6xl font-serif opacity-20 group-hover:opacity-40 mb-6 block">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-[#1a1a1a]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS / MARQUEE --- */}
      <section className="py-20 border-b border-gray-200 overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-16 items-center text-8xl md:text-9xl font-serif font-bold text-gray-100 uppercase"
          >
            <span>Architecture</span>
            <span className="text-[#c0a080]">•</span>
            <span>Interiors</span>
            <span className="text-[#c0a080]">•</span>
            <span>Landscape</span>
            <span className="text-[#c0a080]">•</span>
            <span>Planning</span>
            <span className="text-[#c0a080]">•</span>
            <span>Architecture</span>
            <span className="text-[#c0a080]">•</span>
            <span>Interiors</span>
            <span className="text-[#c0a080]">•</span>
          </motion.div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-8">
          Ready to Build Your Dream?
        </h2>
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
          Whether it&apos;s a dream home, a corporate office, or a commercial
          complex, Navya Architects is here to bring it to life.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-[#1a1a1a] text-white text-lg font-medium hover:bg-[#c0a080] transition-colors duration-300"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
