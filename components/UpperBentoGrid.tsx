'use client'

import { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import GridGlobe from "./ui/GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { gridItems } from "@/data";
import dynamic from 'next/dynamic';

const LottieWrapper = dynamic(() => import('./ui/LottieWrapper'), { ssr: false });

export const UpperBentoGrid = ({
  className,
}: {
  className?: string;
}) => {
  const upperGridItems = gridItems.filter(item => [1, 2, 6].includes(item.id));

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 h-[calc(80vh-2rem)]",
        className
      )}
    >
      <BentoGridItem {...upperGridItems.find(item => item.id === 1)!} className="h-full" />
      <div className="grid grid-cols-1 gap-4 lg:gap-8 h-full">
        <BentoGridItem {...upperGridItems.find(item => item.id === 2)!} />
        <BentoGridItem {...upperGridItems.find(item => item.id === 6)!} />
      </div>
    </div>
  );
};

const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const handleEmailClick = () => {
    setAnimationPlayed(true);
    setTimeout(() => {
      setAnimationPlayed(false);
      window.location.href = "/contact-us";
    }, 2000);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={title?.toString()}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={title?.toString()}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  animationPlayed ? "block" : "hidden"
                }`}
              >
                <LottieWrapper isPlaying={animationPlayed} />
              </div>

              <MagicButton
                title="Contact Us"
                icon={<CiMail />}
                position="left"
                handleClick={handleEmailClick}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

