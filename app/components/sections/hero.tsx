import { motion } from "motion/react";
import { MagicCircle } from "../ambient/magic-circle";

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  return (
    <div className="relative h-dvh w-full overflow-hidden text-moon">
      <MagicCircle className="absolute left-1/2 top-1/2 h-[min(90vw,42rem)] w-[min(90vw,42rem)] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.6em" }}
          transition={{ duration: 2, ease, delay: 0.2 }}
          className="mb-6 font-cinzel text-[0.65rem] uppercase text-gold/80 sm:text-xs"
        >
          葬送のフリーレン
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease, delay: 0.5 }}
          className="rune-title text-5xl leading-tight sm:text-8xl"
        >
          SOUSOU NO
          <br />
          FRIEREN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="mt-8 max-w-xl text-lg italic text-moon/75 sm:text-2xl"
        >
          Frieren e a Jornada para o Além
        </motion.p>
      </div>

      <motion.a
        href="#prologo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-cinzel text-[0.6rem] uppercase tracking-[0.4em] text-moon/50 transition-colors hover:text-gold"
      >
        Começar a jornada
        <span className="block h-10 w-px animate-float-soft bg-gradient-to-b from-gold/70 to-transparent" />
      </motion.a>
    </div>
  );
}
