"use client";
import { Button } from "../../components/button";
import starsBg from "@/assets/starses.png";
import gridLines from "@/assets/grid-lines.png";
import { RefObject, useEffect, useRef, useTransition } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (events: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();

    mouseX.set(events.x - left);
    mouseY.set(events.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section className="py-20 md:py-25" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="relative py-24 overflow-hidden border rounded-lg px-15 border-white/15 group"
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(226,83,25,.3)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-1000"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>

          <motion.div
            className="absolute inset-0 bg-[rgb(226,83,25,.3)] bg-blend-overlay group-hover:opacity-100 opacity-0 transition duration-1000"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>

          <div>
            <div className="mb-8 relative">
              <h2 className="w-[80%] m-auto text-2xl tracking-tighter text-center mb-7 md:text-6xl font-tomorrow">
                Don’t Miss Out on the Future of Fashion!
              </h2>
              <p className="max-w-2xl mx-auto text-sm font-normal tracking-tight text-center text-white/70 md:text-xl font-tomorrow">
                Join our waitlist now to get exclusive updates and early access!
              </p>
            </div>

            <div className="flex justify-center">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
