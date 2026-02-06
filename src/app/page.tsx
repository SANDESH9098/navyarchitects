"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWorks from "@/components/SelectedWorks";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <SelectedWorks />
      <Philosophy />
      <Services />
      <Contact />
    </main>
  );
}
