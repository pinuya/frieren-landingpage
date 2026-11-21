import { motion } from "motion/react";
import { Ornament } from "./section-heading";

/**
 * Pausa entre capítulos com uma frase curta, como uma página
 * arrancada do diário de viagem.
 */
export function Interlude({ text, author }: { text: string; author: string }) {
  return (
    <section aria-label="Citação" className="px-6 py-24">
      <motion.figure
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <Ornament className="mx-auto mb-6 h-5 w-5" />
        <blockquote className="text-2xl italic leading-relaxed text-moon/90 sm:text-3xl">
          “{text}”
        </blockquote>
        <figcaption className="mt-6 font-cinzel text-xs uppercase tracking-[0.4em] text-gold/70">
          — {author}
        </figcaption>
      </motion.figure>
    </section>
  );
}
