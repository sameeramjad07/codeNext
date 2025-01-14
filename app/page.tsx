"use client";

import { navItems } from "@/data";
import Link from "next/link";
import { Laptop, Smartphone, Users } from 'lucide-react';
import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
import { LowerBentoGrid } from "@/components/LowerBentoGrid";
import { UpperBentoGrid } from "@/components/UpperBentoGrid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import { FeaturesSection } from "@/components/FeatureSection";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const services = [
  {
    id: 1,
    name: 'Full Stack Web',
    icon: Laptop,
    link: "/services/custom-web-development"
  },
  {
    id: 2,
    name: 'Mobile Application',
    icon: Smartphone,
    link: "/services/custom-web-development"
  },
  {
    id: 3,
    name: 'HR Augmentation',
    icon: Users,
    link: "/services/custom-web-development"
  },
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <UpperBentoGrid />
        <FeaturesSection />
        <LowerBentoGrid />
        <Clients />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {services.map((service) => (
            <div key={service.id}>
              <Link href={service.link}>
              <div className="flex justify-center md:max-w-60 max-w-32 gap-2">
                <service.icon
                  className="md:w-10 w-5"
                />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{service.name}</h3>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
