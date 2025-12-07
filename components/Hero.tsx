"use client";

import type { Variants } from "framer-motion";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UpdateFollower } from "react-mouse-follower";
import { heroData } from "@/assets/data";
import type { HeroData } from "@/types";
import WhatsupIcon from "@/ui/icons/WhatsupIcon";

const fadeUp = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const Hero = () => {
  const [activeData, setActiveData] = useState<HeroData>(heroData[0]);

  const handleActiveData = (data: HeroData): void => {
    setActiveData(data);
  };

  return (
    <section className="bg-brand-dark text-brand-dark-foreground ">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                }}
              >
                <motion.h1
                  key={activeData.id}
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  animate={"show"}
                  exit={"exit"}
                  className="text-3xl lg:text-6xl font-bold font-varela-round"
                >
                  {activeData.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeData.id}
                variants={fadeUp(0.3)}
                initial="hidden"
                animate={"show"}
                exit={"exit"}
                className="text-sm leading-loose text-brand-dark-foreground/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  zIndex: 999,
                  followSpeed: 0.5,
                  rotate: -720,
                  scale: 6,
                  backgroundElement: (
                    <div className="">
                      <Image
                        src={activeData.image}
                        width={61}
                        height={69}
                        alt={activeData.title}
                        className="aspect-61/69 w-[200px]"
                      />
                    </div>
                  ),
                }}
              >
                <motion.button
                  key={activeData.id}
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  animate={"show"}
                  exit={"exit"}
                  className="px-4 py-2 font-varela-round font-medium w-fit rounded"
                  type="button"
                  style={{
                    backgroundColor: activeData.bgColor,
                  }}
                >
                  Buy and Listen
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>

            {/* Headphone list separator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              className="flex items-center justify-center md:justify-start gap-4 lg:mt-20 xl:mt-24! "
            >
              <div className="w-20 h-px bg-white" />
              <p className="text-sm font-semibold uppercase">
                TOP HEADPHONES FOR YOU
              </p>
              <div className="w-20 h-px bg-white" />
            </motion.div>

            {/* Headphone list switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              className="grid grid-cols-3 gap-10"
            >
              {heroData.map((data) => (
                <UpdateFollower
                  key={data.id}
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    textColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    scale: 5,
                    text: "View Detail",
                    textFontSize: "3px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleActiveData(data)}
                    className="grid grid-cols-2 place-items-center cursor-pointer gap-x-2 sm:gap-x-0"
                  >
                    <div className="">
                      <Image
                        src={data.image}
                        width={61}
                        height={69}
                        priority={true}
                        quality={75}
                        alt={data.title}
                        className="aspect-61/69 w-[200px]"
                      />
                    </div>
                    <div className="space-y-2 font-varela-round text-left">
                      <p className="text-base font-bold"> {data.price} </p>
                      <p className="text-xs font-medium text-nowrap">
                        {data.modal}
                      </p>
                    </div>
                  </button>
                </UpdateFollower>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex flex-col justify-end items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 100,
                transition: {
                  duration: 0.2,
                },
              }}
              className="aspect-526/589 w-[300px] md:w-[400px] xl:w-[550px]"
            >
              <Image
                src={activeData.image}
                width={526}
                height={589}
                alt={activeData.title}
                className="aspect-526/589 w-[300px] md:w-[400px] xl:w-[550px]"
                priority={true}
                quality={80}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* WhatsApp Icon */}
        <Link
          href=""
          className="text-white fixed bottom-10 right-10 hover:rotate-360 duration-200 z-50 mix-blend-difference"
        >
          <WhatsupIcon className="" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
