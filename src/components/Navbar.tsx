"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "What We Do", href: "#what-we-do" },
    { name: "Projects", href: "#projects" },
    { name: "Journal", href: "#journal" },
    { name: "About", href: "#about" },
    { name: "Our Facility", href: "#facility" },
    { name: "Work With Us", href: "#work-with-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8 text-white bg-gradient-to-b from-black/70 via-black/40 to-transparent"
        style={{
          fontFamily:
            '"Helvetica Now", "Helvetica Neue", Helvetica, sans-serif',
        }}
      >
        {/* Left: Hamburger + Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-[5px] w-6"
          >
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-4 h-[2px] bg-white"></span>
          </button>

          <div className="hidden md:flex items-center gap-6 text-[18px] leading-[33px] font-medium">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              What We Do
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              Projects
            </Link>
            <Link
              href="#"
              className="relative hover:opacity-70 transition-opacity"
            >
              Work With Us
              <span className="absolute -top-2 -right-3 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="relative w-24 h-24">
            <Image
              src="/LOGO.png"
              alt="Logo"
              fill
              className="object-contain invert brightness-0 grayscale"
            />
          </div>
        </div>

        {/* Right: Search + CTA */}
        <div className="flex items-center gap-6">
          <button className="hover:opacity-70">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="hidden md:flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333] px-6 py-3 rounded-full transition-colors text-[18px] leading-[33px] font-medium">
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
          </button>
        </div>
      </nav>

      {/* Expanded Menu Overlay */}
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
          <div className="w-1/2 bg-[#fffcf5] p-12 flex flex-col">
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
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#6b6b6b] hover:text-black text-[36px] md:text-[42px] font-medium leading-[1.4] transition-colors relative group w-fit"
                  style={{ fontWeight: 500 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
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

          {/* Right Side - Image */}
          <div className="w-1/2 relative">
            <Image
              src="/hero.jpg"
              alt="Menu background"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
