"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.05]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated title with split text effect
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { opacity: 0, y: 100, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );
      }

      // Floating images with magnetic effect
      const images = [imageRef1.current, imageRef2.current, imageRef3.current];
      images.forEach((img, index) => {
        if (img) {
          gsap.fromTo(
            img,
            {
              y: 100 + index * 50,
              opacity: 0,
              scale: 0.8,
              rotation: -15 + index * 15,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );

          // Continuous floating animation
          gsap.to(img, {
            y: -20,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      // Stats counter animation
      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll(".stat-number");
        statNumbers.forEach((stat) => {
          const target = parseInt(stat.getAttribute("data-target") || "0");
          gsap.fromTo(
            stat,
            { textContent: 0 },
            {
              textContent: target,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ transformOrigin: "50% 100%" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative min-h-screen py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#f8f7f4] via-white to-[#f0ede6]"
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-100/40 to-stone-200/40 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
        className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-neutral-200/30 to-amber-50/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Premium Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block px-6 py-2 border border-stone-300 rounded-full text-xs tracking-[0.3em] uppercase text-stone-600 bg-white/50 backdrop-blur-sm">
            About Section Premium
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-5 space-y-12">
            <div
              ref={titleRef}
              className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1a1a1a] perspective-1000"
            >
              <div className="mb-4">{splitText("We craft")}</div>
              <div className="mb-4">{splitText("spaces that")}</div>
              <div className="italic font-light text-stone-400">
                {splitText("resonate")}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl font-light leading-relaxed text-stone-600">
                Navya Architects is a global design practice founded on the
                belief that architecture should be
                <span className="font-medium text-stone-800">
                  {" "}
                  quiet, distinct, and enduring
                </span>
                .
              </p>
              <p className="text-base md:text-lg font-light leading-relaxed text-stone-500">
                Our work explores the balance between raw materiality and
                refined atmosphere, creating environments that transcend trends
                and honor the essence of place.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200"
            >
              <div className="space-y-2">
                <div
                  className="stat-number text-4xl font-serif text-stone-800"
                  data-target="150"
                >
                  0
                </div>
                <div className="text-xs tracking-wider uppercase text-stone-500">
                  Projects
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="stat-number text-4xl font-serif text-stone-800"
                  data-target="25"
                >
                  0
                </div>
                <div className="text-xs tracking-wider uppercase text-stone-500">
                  Countries
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="stat-number text-4xl font-serif text-stone-800"
                  data-target="40"
                >
                  0
                </div>
                <div className="text-xs tracking-wider uppercase text-stone-500">
                  Awards
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 border-2 border-stone-800 text-stone-800 font-sans text-sm tracking-wider uppercase overflow-hidden transition-colors duration-300"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Explore Our Work
                </span>
                <motion.div
                  className="absolute inset-0 bg-stone-800"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Creative Image Layout */}
          <div className="lg:col-span-7 relative h-[600px] md:h-[700px]">
            {/* Image 1 - Large Background */}
            <motion.div
              ref={imageRef1}
              style={{ scale }}
              className="absolute top-0 right-0 w-[70%] h-[55%] overflow-hidden rounded-sm shadow-2xl"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-stone-100 font-serif text-3xl italic opacity-50">
                  Studio
                </span>
              </div>
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </motion.div>

            {/* Image 2 - Medium Floating */}
            <motion.div
              ref={imageRef2}
              className="absolute top-[30%] left-0 w-[45%] h-[45%] overflow-hidden rounded-sm shadow-xl z-10"
              whileHover={{ scale: 1.05, zIndex: 20, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-stone-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-stone-400 font-serif text-2xl italic opacity-60">
                  Craft
                </span>
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.div>

            {/* Image 3 - Small Accent */}
            <motion.div
              ref={imageRef3}
              className="absolute bottom-0 right-[15%] w-[38%] h-[35%] overflow-hidden rounded-sm shadow-lg z-20"
              whileHover={{ scale: 1.08, zIndex: 30, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-stone-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-stone-500 font-serif text-xl italic opacity-50">
                  Detail
                </span>
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-stone-800"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-stone-300 rounded-full opacity-30"
            />
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -top-6 left-[40%] w-24 h-24 border border-amber-300 rounded-sm opacity-20 rotate-45"
            />
          </div>
        </div>

        {/* Bottom Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-32 pt-16 border-t border-stone-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Timeless Design",
                description:
                  "We design for decades, not seasons. Every project is conceived to age gracefully and remain relevant.",
              },
              {
                title: "Material Honesty",
                description:
                  "Raw materials speak their own language. We let them express their true nature and character.",
              },
              {
                title: "Spatial Poetry",
                description:
                  "Architecture is frozen music. We compose spaces that evoke emotion and inspire contemplation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className="space-y-4 group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-stone-300 rounded-full group-hover:border-stone-800 group-hover:bg-stone-800 transition-all duration-300">
                  <span className="text-stone-600 group-hover:text-white font-serif text-xl transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-stone-800">
                  {item.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
