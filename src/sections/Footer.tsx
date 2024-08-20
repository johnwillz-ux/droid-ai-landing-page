"use client";
import xLogo from "@/assets/x-logo.svg";
import igLogo from "@/assets/instagram.svg";
import linkEdLogo from "@/assets/linkedin.svg";

import LogoIcon from "@/assets/logo.svg";
import { Cover } from "../components/ui/cover";

const sociaLogo = [xLogo, igLogo, linkEdLogo];

const socialLogos = [
  { component: xLogo, name: "X Logo" },
  { component: igLogo, name: "Instagram Logo" },
  { component: linkEdLogo, name: "LinkedIn Logo" },
];

export const Footer = () => {
  return (
    <footer>
      <section className="py-20 w-[90%] m-auto md:container">
        <div className="container flex flex-col gap-5 md:items-center md:flex-row md:justify-between">
          <div className="flex flex-row items-center gap-1 ">
            <div className="w-8 border rounded-full w-25 border-white/15 p-0.5">
              <LogoIcon />
              {/* <div className="mr-1 text-sm font-extrabold font-tomorrow">D-AI</div> */}
            </div>
            <div className="mr-1 text-sm font-extrabold font-tomorrow">
              D-AI
            </div>
          </div>
          <div>
            <nav className="flex flex-col gap-4 text-sm font-tomorrow md:flex-row">
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
              <a className="transition text-white/50 hover:text-white" href="#">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-3">
            {socialLogos.map((social, index) => {
              const IconComponent = social.component;
              return (
                <div key={index} className="">
                  <IconComponent className="w-6" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};
