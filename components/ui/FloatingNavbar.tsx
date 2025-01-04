"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [active, setActive] = useState<string | null>(null);
  const { isVisible } = useScrollPosition();

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-lg mx-auto z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
        className
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((navItem, idx) => (
          <MenuItem
            key={`menu-item-${idx}`}
            setActive={setActive}
            active={active}
            item={navItem.name}
            link={navItem.link}
          >
            {/* Add content for each nav item */}
            {navItem.name === "Services" && (
              <div className="grid grid-cols-2 gap-10 p-4 text-sm">
                <ProductItem
                  title="Custom Web Development"
                  href="/services/custom-web-development"
                  src="/images/custom-web-development.jpg"
                  description="Tailored web solutions to meet your unique business needs."
                />
                <ProductItem
                  title="Mobile Application"
                  href="/services/mobile-application"
                  src="/images/mobile-app-development.jpg"
                  description="Innovative mobile apps for iOS and Android platforms."
                />
                <ProductItem
                  title="Full Stack Development"
                  href="/services/full-stack-development"
                  src="/images/full-stack-development.jpg"
                  description="End-to-end development services for robust applications."
                />
                <ProductItem
                  title="HR Augmentation"
                  href="/services/hr-augmentation"
                  src="/images/hr-augmentation.jpg"
                  description="Enhance your team with skilled professionals on demand."
                />
              </div>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
