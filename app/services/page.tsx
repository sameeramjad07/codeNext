"use client";

import { navItems, services } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React, {useRef} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const ServicesPage = () => {
  const servicesRef = useRef<HTMLElement>(null);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* <div className="max-w-7xl w-full"> */}
        <FloatingNav navItems={navItems} />
        <div className="w-full absolute left-0 -top-24">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-100 "
            />
        </div>
        {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div className="w-full absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <TextGenerateEffect words="Our Services" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            Empowering your digital journey with cutting-edge solutions and expert services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
            onClick={() => {
              servicesRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Explore Services
          </motion.button>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="w-full max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

        <Footer/>
      {/* </div> */}
      
    </main>
  );
};



export default ServicesPage;
