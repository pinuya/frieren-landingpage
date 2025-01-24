import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
import Typewriter from "~/components/fancy/typewriter";
import { Button } from "~/components/ui/button";
import { MoveRight } from "lucide-react";
import MusicBotAbout from "~/components/About";
import ScrollIndicator from "~/components/ScrollIndicator";

const menuItems = [
  { name: "Adicionar Bot", href: "/" },
  { name: "Sobre", href: "/#about" },
  { name: "Documentação", href: "/#docs" },
  { name: "Suporte", href: "/#support" },
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
      <nav className="flex flex-row items-center justify-between mx-auto mt-4 container bg-black">
        <Link to="/" className="flex flex-row items-center gap-2">
          <img src="/favicon.ico" className="w-[50px]" />
        </Link>

        <ul className="flex space-x-6 font-poppins uppercase">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <span className="cursor-pointer hover:text-[#FE9001] transition-colors text-sm">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/70 to-black" />
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

          <ScrollIndicator />
        </section>

        <section
          id="about"
          className="h-screen bg-black flex items-center justify-center"
        >
          <div className="grid grid-cols-2 mx-auto container gap-20">
            <div className="space-y-6">
              <h1 className="text-4xl font-poppins font-bold uppercase">
                Amadeus Bot
              </h1>
              <p className="text-gray-400">
                Imagine um bot que transforma cada momento no seu servidor
                Discord em uma experiência inesquecível. Com playlists
                personalizáveis, suporte a plataformas como Spotify, YouTube e
                SoundCloud, e comandos super fáceis de usar, esse bot é o DJ
                perfeito para qualquer ocasião.
              </p>

              <MusicBotAbout />

              <Link to={"/"}>
                <Button className="bg-transparent text-white border border-[#FE9001] hover:bg-[#FE9001] mt-10 rounded-full w-full font-poppins justify-between font-semibold uppercase gap-2">
                  Adicione a Amadeus em seu servidor! <MoveRight />
                </Button>
              </Link>
            </div>

            <div className="w-full h-full">
              <img
                src="/assets/kurisu-about-section.gif"
                className="w-full h-full object-cover rounded-xl"
                alt="Descrição da imagem"
              />
            </div>
          </div>
        </section>

        <section
          id="docs"
          className="container mx-auto h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-poppins font-bold uppercase text-center">
            Documentação
          </h1>
        </section>

        <section
          id="support"
          className="container mx-auto h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-poppins font-bold uppercase text-center">
            Suporte
          </h1>
        </section>

        <Footer />
      </main>
    </div>
  );
}
