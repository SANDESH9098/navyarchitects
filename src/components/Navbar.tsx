"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      href: string,
    ) => {
      e.preventDefault();
      setIsOpen(false);
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 text-white bg-gradient-to-b from-black/70 via-black/40 to-transparent"
        style={{
          fontFamily:
            '"Helvetica Now", "Helvetica Neue", Helvetica, sans-serif',
        }}
      >
        {/* Left: Hamburger (mobile) + Nav Links (desktop) */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-[5px] w-6 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-6 h-[2px] bg-white" />
            <span className="block w-4 h-[2px] bg-white" />
          </button>

          <div className="hidden md:flex items-center gap-6 text-[16px] leading-[33px] font-medium">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="hover:opacity-70 transition-opacity"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="hover:opacity-70 transition-opacity"
            >
              Projects
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "#services")}
              className="hover:opacity-70 transition-opacity"
            >
              Services
            </a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <a href="#" onClick={(e) => scrollToSection(e, "#")}>
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/LOGO.png"
                alt="Navya Architects"
                fill
                className="object-contain invert brightness-0 grayscale"
                priority
              />
            </div>
          </a>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-300 text-[16px] leading-[33px] font-medium border border-white/20"
          >
            Start Your Project
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
      </nav>

      {/* Mobile / Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          fontFamily:
            '"Helvetica Now", "Helvetica Neue", Helvetica, sans-serif',
        }}
      >
        <div className="flex h-full">
          {/* Left Side - Menu */}
          <div className="w-full md:w-1/2 bg-[#fffcf5] p-8 md:p-12 flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 mb-12 text-black"
            >
              <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </span>
              <span className="text-[18px] font-medium">Close</span>
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col gap-2 flex-grow">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[#6b6b6b] hover:text-black text-[32px] md:text-[42px] font-medium leading-[1.4] transition-colors relative group w-fit"
                  style={{ fontWeight: 500 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="mt-auto pt-8">
              <p className="text-black text-[18px] font-medium mb-2">
                +91 98765 43210
              </p>
              <a
                href="mailto:hello@navyaarchitects.com"
                className="text-black text-[18px] font-medium underline hover:no-underline"
              >
                hello@navyaarchitects.com
              </a>
            </div>
          </div>

          {/* Right Side - Image (hidden on mobile) */}
          <div className="hidden md:block w-1/2 relative">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Menu background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </>
  );
}
