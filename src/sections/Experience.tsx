"use client";

import aiImage1 from "@/assets/ai-img-1.png";
import aiImage2 from "@/assets/ai-img-2.png";
import aiImage3 from "@/assets/ai-img-3.png";
import aiImage4 from "@/assets/ai-img-4.png";
import aiImage5 from "@/assets/ai-img-5.png";
import aiImage6 from "@/assets/ai-img-6.png";
import aiImage7 from "@/assets/ai-img-7.png";
import aiImage8 from "@/assets/ai-img-8.png";
import aiImage9 from "@/assets/ai-img-9.png";

import aiLast from "@/assets/ai-last.png";

import LogoIcon from "@/assets/logo.svg";
import igPost from "@/assets/ig-post.png";
import browEle from "@/assets/browser-ele.png";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlobalHeading } from "../../components/GlobalHeading";

const aiImage = [
  aiImage1,
  aiImage2,
  aiImage3,
  aiImage4,
  aiImage5,
  aiImage6,
  aiImage7,
  aiImage8,
  aiImage9,
];

export const Experience = () => {
  return (
    <section className="py-35">
      <div className="container">
        <GlobalHeading
          title="   The Future of Fashion."
          subTitle="   Check out these stunning images created by Droid AI."
        />

        <div className="flex flex-col items-center gap-5 p-3 border rounded-xl border-white/20  mt-10">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="relative border rounded-xl border-white/20">
              <div className="absolute left-0 z-10 flex items-start justify-between w-full px-3 top-5 md:flex-col md:h-full">
                <div className="flex items-end gap-2">
                  <div className=" bg-white h-[35px]  w-[35px]   md:h-[45px] md:w-[45px] flex items-center justify-center rounded-lg p-0.5">
                    <LogoIcon className="text-[#FF4B00] fill-current " />
                  </div>
                  <div className="text-xs font-bold">TM</div>
                </div>

                <div className="flex flex-col items-end justify-center mb-9 md:items-start">
                  <div className="text-xs md:text-sm text-white/70">
                    デザイン
                  </div>
                  <div className="text-xs md:text-sm font-tomorrow text-white/90">
                    Fashion-in-Action
                  </div>
                </div>
              </div>

              <div className="flex py-5 overflow-hidden bg-gradient-to-b from-[#7A1000] to-[#FE9D00]  rounded-lg  [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                  className="flex flex-none gap-4 mt-16 md:m-0 -translate-x-0"
                  initial={{ translateX: "0%" }}
                  animate={{
                    translateX: "-50%",
                    transition: {
                      repeat: Infinity,
                      ease: "linear",
                      duration: "30",
                    },
                  }}
                >
                  {[...aiImage, ...aiImage].map((aiImage) => (
                    <div key={aiImage.src} className="">
                      <img
                        src={aiImage.src}
                        alt="aiImage"
                        className="w-[180px] rounded-lg md:w-[200px]"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="border rounded-lg border-white/20">
              <div className="relative flex flex-col justify-between p-4 overflow-hidden   rounded-lg h-[400px] md:h-full  bg-gradient-to-b from-[#7A1000] to-[#FE9D00]">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold font-tomorrow">
                    DROID <br />
                    AI POWERS
                  </div>
                  <div className="text-sm font-tomorrow text-white/70">
                    Our platform turns your photo into a cyberpunkmasterpiece!
                  </div>
                </div>

                <div className="absolute flex-none -bottom-40 -right-2 md:-right-20 md:-bottom-44">
                  <Image
                    src={aiLast.src}
                    height={200}
                    alt=""
                    width={250}
                    className="bg-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-2 border rounded-full border-white/20 w-[80%] bg-gradient-to-b from-[rgba(122,16,0,0.56)] to-[rgba(12,9,2,0.75)] shadow-[0px_0px_8px_rgba(169,32,0,0.5)]  ">
            <div className="border border-white/25 absolute inset-0 rounded-full -m-px"></div>
            <div className="flex flex-row items-center w-full gap-3 rounded-full ">
              <div className="p-0.5 border border-white/15 rounded-full">
                <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden border rounded-full border-white/10">
                  <DotLottiePlayer
                    src="/assets/lottie/ai-loading.json"
                    autoplay
                    loop
                    className="absolute w-20 transform -translate-x-1/2 -translate-y-1/2 left-3.5 top-4"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="text-sm text-white/50 font-tomorrow">
                  AI IS GENERATING
                </div>
                <div className="text-sm text-white animate-pulse">|</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
