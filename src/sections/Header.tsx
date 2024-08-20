"use client";

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "../../components/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 leading-none  md:h-0 ">
      <div className="container">
        <div className="flex items-center justify-between p-2.5 border border-white/15 rounded-full max-w-[100%] mx-auto backdrop-blur">
          <div>
            <div className="inline-flex items-center justify-center gap-1 p-1 border rounded-full w-25 border-white/15">
              <div className="h-[30px] w-[30px]">
                <LogoIcon />
              </div>
              <div className="mr-1 text-sm font-extrabold font-tomorrow">
                D-AI
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm font-tomorrow">
              <a className="transition text-white/50 hover:text-white" href="#">
                About
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Features
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Developers
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Pricing
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* <button className="relative px-3 py-2 text-sm font-medium  rounded-lg bg-gradient-to-b from-[#7A1000] to-[#FE9D00] shadow-[0px_0px_12px_#A92000]">
              <div className="absolute inset-0">
                <div className=" rounded-lg absolute inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className=" rounded-lg absolute inset-0 border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgba(169,32,0,0.7)_inset]  rounded-lg"></div>
              </div>{" "}
              <span> Join Waitlist</span>{" "}
            </button> */}

            <div className="sm:hidden md:block">
              <Button>Join Waitlist</Button>
            </div>

            <button
              className="relative px-3 py-2 text-sm font-medium font-tomorrow hover:from-[#000000] hover:to-[#
            7A1000]  rounded-full bg-gradient-to-b from-[#2f2f2f] to-[#000000] shadow-[0px_0px_12px_#A92000]"
            >
              <div className="absolute inset-0">
                <div className=" rounded-full absolute inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

                <div className=" rounded-full absolute inset-0 border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgba(169,32,0,0.4)_inset] rounded-full"></div>
              </div>
              <span>EN</span>
            </button>

            <MenuIcon className="md:hidden"></MenuIcon>
          </div>
        </div>
      </div>
    </header>
  );
};
