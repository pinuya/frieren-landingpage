import type { MetaFunction } from "@remix-run/node";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import type { Transition } from "motion";
import TextHighlighter from "~/components/fancy/text/text-highlighter";
import { NightSky } from "~/components/ambient/night-sky";
import { Interlude } from "~/components/ambient/interlude";
import { SectionHeading, Ornament } from "~/components/ambient/section-heading";
import { Nav } from "~/components/sections/nav";
import { Hero } from "~/components/sections/hero";
import { SeasonsSection } from "~/components/sections/seasons";
import { EpisodeChronicle } from "~/components/sections/episode-chronicle";
import { Grimoire } from "~/components/sections/grimoire";
import { WhereToWatch } from "~/components/sections/where-to-watch";

export const meta: MetaFunction = () => {
  return [
    { title: "Frieren e a Jornada para o Além" },
    {
      name: "description",
      content:
        "Um diário de viagem pelo mundo de Frieren: personagens, temporadas, resumo dos episódios e onde assistir.",
    },
  ];
};

const highlightTransition = { type: "spring", duration: 1, delay: 0.4, bounce: 0 };

function Highlight({ children }: { children: ReactNode }) {
  return (
    <TextHighlighter
      className="rounded-[0.3em] px-px text-moon"
      transition={highlightTransition as Transition}
      highlightColor="rgba(143, 184, 222, 0.28)"
      useInViewOptions={{ once: true, amount: 0.3 }}
    >
      {children}
    </TextHighlighter>
  );
}

export default function Index() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  return (
    <div id="topo" className="relative">
      <NightSky />
      <Nav />

      <section id="hero">
        <Hero />
      </section>

      <section
        ref={aboutRef}
        id="prologo"
        className="scroll-mt-24 px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading chapter="Capítulo I" title="O Peso da Eternidade" />

          <div className="flex flex-col items-center gap-14 lg:flex-row">
            <div className="space-y-6 text-xl leading-relaxed text-moon/80 lg:w-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="float-left mr-3 mt-1 font-cinzel text-6xl leading-none text-gold">
                  F
                </span>
                rieren é uma maga elfa que já viveu mais de mil anos. Após uma
                jornada de dez anos ao lado do herói <Highlight>Himmel</Highlight>{" "}
                e de seus companheiros para derrotar o Rei Demônio, ela percebe
                que mal chegou a conhecer seus amigos humanos.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                Quando Himmel morre de velhice, Frieren sente o remorso de não
                ter dado valor ao tempo que passaram juntos.{" "}
                <Highlight>
                  Determinada a entender os humanos e honrar suas memórias, ela
                  embarca em uma nova jornada
                </Highlight>{" "}
                — rumo ao norte, até Aureole, onde dizem que as almas descansam.
              </motion.p>

              <motion.dl
                initial={{ opacity: 0 }}
                animate={isAboutInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid grid-cols-3 gap-4 border-t border-aura/15 pt-6 text-center"
              >
                {[
                  ["1000+", "anos de vida"],
                  ["38", "episódios"],
                  ["10", "anos de aventura"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-cinzel text-3xl text-gold">{n}</dd>
                    <dd className="text-sm text-moon/55">{label}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            <motion.figure
              initial={{ opacity: 0, x: 30 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative lg:w-1/2"
            >
              <div className="absolute -inset-3 rounded-2xl border border-gold/25" />
              <div className="overflow-hidden rounded-xl ring-1 ring-aura/20">
                <img
                  src="/assets/frierenAbout.gif"
                  alt="Frieren em sua jornada"
                  className="h-auto w-full"
                />
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      <Interlude
        text="Eu queria ter sabido mais sobre ele."
        author="Frieren, diante de Himmel"
      />

      <SeasonsSection />

      <EpisodeChronicle />

      <Interlude
        text="O mundo da magia é o mundo da imaginação."
        author="Frieren"
      />

      <Grimoire />

      <WhereToWatch />

      <footer className="border-t border-aura/10 bg-night-deep/70 py-14 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <Ornament className="h-5 w-5" />
          <a href="#topo" className="flex items-center gap-3">
            <img src="/favicon.ico" alt="" className="h-8 w-8" />
            <span className="font-cinzel text-lg tracking-[0.3em] text-moon">
              FRIEREN
            </span>
          </a>
          <div className="space-y-1 text-moon/50">
            <p>
              © {new Date().getFullYear()} · Feito com 💙 por uma grande fã.
            </p>
            <p>
              Sousou no Frieren é uma obra de Kanehito Yamada e Tsukasa Abe.
              Anime por Madhouse. Projeto de fã, sem fins lucrativos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
