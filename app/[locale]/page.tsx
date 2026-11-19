import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/AboutComponent";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="container flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <About/>
        <Skills/>
        <Portfolio slides={SLIDES} options={OPTIONS}/>
        <Services />
        <ContactForm />
      </main>
    </div>
  );
}
