"use client";

import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { GlobalHeading } from "../../components/GlobalHeading";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Instant Transformations",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Customizable Styles",
    isNew: true,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "High-Resolution Outputs",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const [isHovered, setIsHovered] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current == null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      key={props.icon}
      ref={tabRef}
      onClick={props.onClick}
      onMouseEnter={handleTabHover}
      className=" relative flex items-center gap-2.5 px-2 p-2.5 border rounded-full border-white/15 lg:flex-1 "
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage: maskImage,
          }}
          className="absolute border border-[#7A1000] inset-0 -m-px rounded-full"
        ></motion.div>
      )}

      <div className="flex items-center gap-2  ">
        <div className="flex items-center justify-center w-12 h-12 border rounded-full border-white/15">
          <DotLottiePlayer
            ref={dotLottieRef}
            src={props.icon}
            autoplay
            className="w-5"
          />
        </div>

        <h3
          className={`text-sm  font-tomorrow ${
            props.selected ? "text-orange-600 font-medium" : "text-white font-light" 
          }`}
        >
          {props.title}
        </h3>
      </div>

      {props.isNew && (
        <div className="px-2  py-0.5 text-xs text-black bg-orange-600 rounded-full font-semibold font-tomorrow">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);
    const options: ValueAnimationTransition = {
      duration: 1,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      options
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      options
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      options
    );
  };

  return (
    <section>
      <div className="w-[90%] m-auto md:container py-20 md:py-25 ">
        <GlobalHeading
          title="Explore Features"
          subTitle="Bring your cyberpunk dreams to life!"
        />

        <div className="flex flex-col gap-3 lg:flex-row  mt-10">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              key={tab.title}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectedTab(tabIndex)}
            />
          ))}
        </div>

        <div className="p-2 mt-2 overflow-hidden border rounded-lg border-white/20 ">
          <motion.div
            className="overflow-hidden bg-cover border rounded-lg border-white/15 aspect-video"
            style={{
              backgroundPosition: backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
