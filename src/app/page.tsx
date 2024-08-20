import { CallToAction } from "@/sections/CallToAction";
import { Experience } from "@/sections/Experience";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return <>

  <Header></Header>
  <Hero></Hero>
  <LogoTicker></LogoTicker>
  <Experience></Experience>
  <Features></Features>
  <Testimonials></Testimonials>
  <CallToAction></CallToAction>
  <Footer/>
 
  </>;
}
