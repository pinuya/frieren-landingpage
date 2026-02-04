import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import TextHighlighter from "~/components/fancy/text/text-highlighter";
import ImageTrailDemo from "~/components/image-trail-instant-demo";
import { Transition } from "motion";
import { CharacterCard } from "~/components/character-card";
import { characters } from "~/data/characters";

export const meta: MetaFunction = () => {
  return [
    { title: "Frieren" },
    {
      name: "frieren",
      content: "Bem-vindos a landing page da Frieren!",
    },
  ];
};

export default function Index() {
  const transition = { type: "spring", duration: 1, delay: 0.4, bounce: 0 };
  const highlightClass = "rounded-[0.3em] px-px";
  const highlightColor = "#8196cc";
  const inViewOptions = { once: true, initial: true, amount: 0.1 };

  const aboutSectionRef = useRef(null);
  const isAboutInView = useInView(aboutSectionRef, {
    once: false,
    amount: 0.3,
  });

  const aboutInViewOptions = {
    once: false,
    amount: 0.3,
    margin: "-100px 0px" as const,
  };

  return (
    <div>
      <section id="hero">
        <ImageTrailDemo />
      </section>

      <section
        ref={aboutSectionRef}
        id="about"
        className="flex min-h-screen items-center bg-slate-50 px-4 py-20 md:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
              >
                O Peso da Eternidade
              </motion.h1>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-slate-600"
                >
                  {isAboutInView ? (
                    <TextHighlighter
                      className={highlightClass}
                      transition={transition as Transition}
                      highlightColor={highlightColor}
                      useInViewOptions={aboutInViewOptions}
                    >
                      Frieren
                    </TextHighlighter>
                  ) : (
                    "Frieren"
                  )}{" "}
                  é uma maga elfa que viveu por mais de mil anos. Após uma
                  jornada de dez anos ao lado do herói{" "}
                  {isAboutInView ? (
                    <TextHighlighter
                      className={highlightClass}
                      transition={transition as Transition}
                      highlightColor={highlightColor}
                      useInViewOptions={aboutInViewOptions}
                    >
                      Himmel
                    </TextHighlighter>
                  ) : (
                    "Himmel"
                  )}{" "}
                  e seus companheiros para derrotar o Rei Demônio, ela percebe
                  que mal conheceu seus amigos humanos.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-slate-600"
                >
                  Quando Himmel falece de velhice, Frieren sente remorso por não
                  ter dado valor ao tempo que passaram juntos.{" "}
                  {isAboutInView ? (
                    <TextHighlighter
                      className={highlightClass}
                      transition={transition as Transition}
                      highlightColor={highlightColor}
                      useInViewOptions={aboutInViewOptions}
                    >
                      Determinada a entender melhor os humanos e honrar suas
                      memórias, ela embarca em uma nova jornada.
                    </TextHighlighter>
                  ) : (
                    "Determinada a entender melhor os humanos e honrar suas memórias, ela embarca em uma nova jornada."
                  )}
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/frierenAbout.gif"
                  alt="Frieren - maga elfa em sua jornada"
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="characters" className="px-4 py-20 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
            Personagens da Jornada
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-500">
            Conheça os heróis e companheiros que fizeram parte da emocionante
            jornada em{" "}
            <span className="text-primary">Frieren: Beyond Journey's End</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="info-anime"></section>

      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <Link to={"/"} className="flex items-center gap-2">
            <img src="/favicon.ico" alt="Frieren Logo" className="h-8 w-8" />

            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-serif text-xl font-bold text-transparent">
              Frieren
            </span>
          </Link>

          <div className="text-center text-sm text-slate-500 md:text-right">
            <p>
              © {new Date().getFullYear()} Frieren 💙 Desenvolvido por uma
              grande fã.
            </p>
            <p>
              Sousou no Frieren é uma obra de Kanehito Yamada e Tsukasa Abe.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
