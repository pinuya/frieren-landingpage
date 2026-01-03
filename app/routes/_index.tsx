import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "motion/react";
import ImageTrailDemo from "~/components/image-trail-instant-demo";

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
  return (
    <div>
      <section
        id="hero"
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-[url('/fantasy-magical-sky-with-clouds-and-stars.jpg')] bg-cover bg-center opacity-20"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <div className="container relative z-10 mx-auto px-4 py-24 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <motion.h1
              className="inline-block text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text font-serif text-6xl font-bold tracking-tight text-transparent md:text-8xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Sousou no Frieren
            </motion.h1>

            <motion.p
              className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              A história começa onde a maioria das aventuras termina. Acompanhe
              a elfa Frieren aprendendo a entender os humanos e o valor do tempo
              efêmero.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </section>

      <section id="about" className="bg-slate-50 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
              >
                O Peso da Eternidade
              </motion.h1>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-slate-600"
                >
                  Frieren é uma maga elfa que viveu por mais de mil anos. Após
                  uma jornada de dez anos ao lado do herói Himmel e seus
                  companheiros para derrotar o Rei Demônio, ela percebe que mal
                  conheceu seus amigos humanos.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-slate-600"
                >
                  Quando Himmel falece de velhice, Frieren sente remorso por não
                  ter dado valor ao tempo que passaram juntos. Determinada a
                  entender melhor os humanos e honrar suas memórias, ela embarca
                  em uma nova jornada.
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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

      <section id="characters"></section>

      <section id="info-anime"></section>

      <section id="gallery">
        <ImageTrailDemo />
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <Link to={"/"} className="flex items-center gap-2">
            <img src="/favicon.ico" alt="Frieren Logo" className="h-8 w-8" />

            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-serif text-xl font-bold text-transparent">
              Frieren
            </span>
          </Link>

          <div className="text-center text-sm text-slate-500 md:text-right">
            <p>© {new Date().getFullYear()} Landing Page Conceitual.</p>
            <p>
              Sousou no Frieren é uma obra de Kanehito Yamada e Tsukasa Abe.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
