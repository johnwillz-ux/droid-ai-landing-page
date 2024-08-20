"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { GlobalHeading } from "../../components/GlobalHeading";

const testimonials = [
  {
    text: "“Absolutely mind-blowing! I never imagined I could look so cool in cyberpunk gear. Droid AI is a game-changer!”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“The process was so simple, and the results were beyond my expectations.”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“Droid AI is a game-changer! I can't wait to see what else Droid AI can do!”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Finally, a fun and easy way to explore futuristic fashion. The AI-generated images are so realistic and vibrant!”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <GlobalHeading
          title="User Reviews"
          subTitle="Hear from Our Community.!"
        />

        <div className="  mt-10 flex overflow-hidden  md:gap-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{
              translateX: "0%",
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: "50",
              },
            }}
            className="flex gap-5 flex-none  pl-1 "
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 md:p-10 rounded-lg border-white/15 flex-none border bg-[linear-gradient(to_bottom_left,rgb(226,83,25,.3),black)] max-w-xs md:max-w-md"
              >
                <div className="mb-4 text-lg tracking-tight md:text-lg font-tomorrow">
                  {testimonial.text}
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative after:contents-[''] after:absolute after:inset-0 after:bg-[rgb(226,83,25,.3)] after:mix-blend-soft-light before:contents-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt=""
                      className="rounded-lg w-11 grayscale"
                    />
                  </div>
                  <div className="font-tomorrow">
                    <p>{testimonial.name}</p>
                    <p className="text-sm text-white/50 font-light ">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
