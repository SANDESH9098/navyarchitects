"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1a1a1a] text-white overflow-hidden"
    >
      {/* Top decorative */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        {/* Left - Form */}
        <div className="py-24 md:py-32 px-6 md:px-16 lg:px-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Get in Touch
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-4 leading-tight">
              Let&apos;s build something
              <br />
              <span className="italic font-light text-white/60">
                timeless
              </span>{" "}
              together.
            </h2>
            <p className="text-white/40 font-light mb-12 max-w-md">
              Share your vision with us. We&apos;ll craft a response within 24
              hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-widest text-neutral-500"
                >
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-white/15 py-3 focus:border-white/60 outline-none transition-colors text-lg placeholder:text-white/20 invalid:[&:not(:placeholder-shown)]:border-red-400"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-xs uppercase tracking-widest text-neutral-500"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/15 py-3 focus:border-white/60 outline-none transition-colors text-lg placeholder:text-white/20 invalid:[&:not(:placeholder-shown)]:border-red-400"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-type"
                className="block text-xs uppercase tracking-widest text-neutral-500"
              >
                Project Type <span className="text-red-400">*</span>
              </label>
              <select
                id="contact-type"
                name="projectType"
                required
                defaultValue=""
                className="w-full bg-transparent border-b border-white/15 py-3 focus:border-white/60 outline-none transition-colors text-lg text-white/60 appearance-none cursor-pointer invalid:text-white/30"
              >
                <option value="" disabled className="bg-[#1a1a1a]">
                  Select project type
                </option>
                <option value="residential" className="bg-[#1a1a1a]">
                  Residential
                </option>
                <option value="commercial" className="bg-[#1a1a1a]">
                  Commercial
                </option>
                <option value="interior" className="bg-[#1a1a1a]">
                  Interior Design
                </option>
                <option value="consultation" className="bg-[#1a1a1a]">
                  Consultation
                </option>
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block text-xs uppercase tracking-widest text-neutral-500"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                rows={3}
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-white/15 py-3 focus:border-white/60 outline-none transition-colors text-lg placeholder:text-white/20 resize-none invalid:[&:not(:placeholder-shown)]:border-red-400"
              />
            </div>

            <div className="relative">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 uppercase tracking-[0.2em] text-sm font-medium"
              >
                Start Your Project
              </motion.button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 text-center text-sm text-green-400 tracking-wider"
                  >
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>

        {/* Right - Image + Info */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&q=80"
            alt="Architectural detail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Contact details over image */}
          <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
            <div className="grid grid-cols-1 gap-8 text-sm">
              <div>
                <p className="text-white/40 uppercase tracking-widest text-xs mb-2">
                  India Office
                </p>
                <p className="text-white font-light">
                  123 Design District, Bangalore
                </p>
                <p className="text-white/60 font-light">
                  Karnataka, India 560001
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <p className="text-white/40 uppercase tracking-widest text-xs mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:hello@navyaarchitects.com"
                    className="text-white font-light hover:text-white/70 transition-colors"
                  >
                    hello@navyaarchitects.com
                  </a>
                </div>
                <div>
                  <p className="text-white/40 uppercase tracking-widest text-xs mb-2">
                    Phone
                  </p>
                  <p className="text-white font-light">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile contact info */}
      <div className="lg:hidden px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-sans text-neutral-400 uppercase tracking-widest pt-8 border-t border-white/10">
          <div>
            <p className="text-white mb-2">India</p>
            <p className="normal-case">123 Design District, Bangalore</p>
          </div>
          <div>
            <p className="text-white mb-2">Email</p>
            <p className="normal-case">hello@navyaarchitects.com</p>
          </div>
          <div>
            <p className="text-white mb-2">Social</p>
            <p className="normal-case">Instagram / LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/10 px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs tracking-wider">
          &copy; 2026 Navya Architects. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-white/30 text-xs tracking-wider">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Behance
          </a>
        </div>
      </div>
    </section>
  );
}
