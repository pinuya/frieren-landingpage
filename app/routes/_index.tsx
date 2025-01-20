import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import Typewriter from "~/components/fancy/typewriter";

const menuItems = [
  { name: "Adicionar Bot", href: "/" },
  { name: "Sobre", href: "/#about" },
  { name: "Suporte", href: "/" },
  { name: "Documentação", href: "/#docs" },
];

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
    <div>
      <nav className="flex flex-row items-center justify-between mx-auto mt-4 sticky top-0 container">
        <Link to="/" className="flex flex-row items-center gap-2">
          <img src="/favicon.ico" className="w-[50px]" />
        </Link>

        <ul className="hidden md:flex space-x-6 rounded-full px-8 py-2 border border-1 border-gray-800 font-poppins uppercase">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <span className="cursor-pointer hover:text-[#FE9001] brightness-90  text-sm">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>
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

        <section id="about" className="h-min-screen bg-black">
          <div className="container mx-auto">
            <h1 className="">Sobre</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos totam alias dolorum pariatur iusto sint eaque
              deserunt, maiores, deleniti ipsum tempora itaque praesentium nihil
              corrupti. Corporis consequatur accusantium beatae quia!
            </p>
          </div>
        </section>

        <section id="docs">Documentação</section>

        {/* <Footer /> */}
      </main>
    </div>
  );
}
