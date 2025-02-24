import type { MetaFunction } from "@remix-run/node";
import { motion, useInView } from "framer-motion";
import { Link, Links } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Linkedin, MoveRight } from "lucide-react";
import MusicBotAbout from "~/components/About";
import ScrollIndicator from "~/components/ScrollIndicator";
import { useEffect, useRef } from "react";
import HeroSection from "~/components/HeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Frieren" },
    {
      name: "Melhor bot de musica",
      content: "Bem-vindos a landing page da Frieren bot!",
    },
  ];
};

export default function Index() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div>
      <HeroSection />

      <section
        id="about"
        ref={sectionRef}
        className="relative min-h-screen bg-black flex items-center justify-center py-16 px-4 md:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-85" />
          <img
            src="/assets/frierenAbout.gif"
            alt="Frieren plano de fundo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="space-y-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold uppercase text-center text-white"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              Frieren
            </motion.h1>

            <motion.p
              className="text-gray-300 text-center md:text-left"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Frieren, a Maga Élfica, é uma personagem poderosa e enigmática do
              anime "Frieren: Além do Fim da Viagem". Com séculos de
              conhecimento mágico e uma perspectiva única sobre a vida, Frieren
              traz profundidade e sabedoria para o seu servidor Discord. Nosso
              bot captura a essência de Frieren, permitindo que você experimente
              sua magia, conhecimento e humor sutil em sua própria comunidade.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <MusicBotAbout />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Link to={"/"}>
                <Button className="text-white border bg-gradient-to-r from-indigo-300  to-blue-400 hover:bg-blue-500 mt-10 rounded-full w-full justify-between font-semibold uppercase">
                  Adicione a Frieren em seu servidor! <MoveRight />
                </Button>
              </Link>
            </motion.div>
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
    </div>
  );
}
