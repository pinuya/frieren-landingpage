import type { MetaFunction } from "@remix-run/node";
import { motion } from "motion/react";
import { IoSparkles } from "react-icons/io5";
import { Button } from "~/components/ui/button";

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
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary/30"
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
              className="inline-block text-balance bg-gradient-to-r from-[#466BA4] to-[#8196CC] bg-clip-text font-serif text-6xl font-bold tracking-tight text-transparent md:text-8xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Frieren
            </motion.h1>

            <div className="flex items-center justify-center gap-2">
              <IoSparkles className="text-muted-foreground" />
              <motion.p
                className="text-balance font-serif text-2xl text-muted-foreground md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Beyond Journey&apos;s End
              </motion.p>
              <IoSparkles className="text-muted-foreground" />
            </div>

            <motion.p
              className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Após derrotar o Rei Demônio, a maga elfa Frieren embarca em uma
              nova jornada para compreender o verdadeiro significado dos laços
              humanos e da passagem do tempo.
            </motion.p>

            <motion.div
              className="flex flex-col justify-center gap-4 pt-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="px-8 text-lg">
                  Assistir Agora
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent px-8 text-lg"
                >
                  Saiba Mais
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </section>

      <section id="about">
        <div>informacoes sobre a frieren</div>

        <div>
          <img src="/assets/frierenAbout.gif" alt="imagem da frieren" />
        </div>
      </section>
    </div>
  );
}
