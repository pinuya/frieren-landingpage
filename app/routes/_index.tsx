import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import Typewriter from "~/components/fancy/typewriter";

export const meta: MetaFunction = () => {
  return [
    { title: "Amadeus" },
    {
      name: "Melhor bot de musica",
      content: "Bem-vindos a landing page da Amadeus bot!",
    },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Nav />

      <main className="">
        <section
          id="hero"
          className="relative h-screen flex flex-col items-center justify-center py-4"
        >
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/bg-hero-section.jpg')",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="w-full md:text-4xl lg:text-7xl sm:text-3xl text-2xl flex flex-row font-semibold overflow-hidden py-3 text-white">
              <span className="whitespace-pre-wrap">
                <span>{"Amadeus "}</span>
                <Typewriter
                  text={["system", "bot"]}
                  speed={70}
                  className="text-[#FE9001] brightness-90"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"_"}
                />
              </span>
            </div>
            <span className="text-gray-400 block">
              Um simples bot de música para seu servidor Discord.
            </span>
          </div>
        </section>

        <section id="about" className="h-min-screen">
          section about
        </section>

        {/* <Footer /> */}
      </main>
    </div>
  );
}
