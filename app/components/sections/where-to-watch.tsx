import { motion } from "motion/react";
import { BookOpen, ExternalLink, Play, Youtube } from "lucide-react";
import { SectionHeading } from "../ambient/section-heading";

/** Streaming oficial no Brasil. */
export const WATCH_URL = "https://www.crunchyroll.com/pt-br/search?q=frieren";

const places = [
  {
    icon: Play,
    name: "Crunchyroll",
    kind: "Streaming oficial no Brasil",
    text: "As duas temporadas completas, com legendas em português. É o jeito oficial de acompanhar a jornada por aqui.",
    href: WATCH_URL,
    cta: "Assistir agora",
    featured: true,
  },
  {
    icon: Youtube,
    name: "TOHO animation",
    kind: "Trailers e PVs oficiais",
    text: "O canal oficial no YouTube publica trailers, prévias e as aberturas sem créditos.",
    href: "https://www.youtube.com/results?search_query=Frieren+TOHO+animation+trailer",
    cta: "Ver trailers",
  },
  {
    icon: BookOpen,
    name: "O mangá",
    kind: "Kanehito Yamada & Tsukasa Abe",
    text: "Publicado na Weekly Shōnen Sunday (Shogakukan) desde 2020. A próxima temporada adapta o arco da Terra Dourada.",
    href: "https://en.wikipedia.org/wiki/Frieren",
    cta: "Saber mais",
  },
];

export function WhereToWatch() {
  return (
    <section id="assistir" className="scroll-mt-24 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          chapter="Capítulo V"
          title="Onde Assistir"
          subtitle="Todo viajante precisa saber por onde seguir."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {places.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={
                p.featured
                  ? "parchment group flex flex-col p-8"
                  : "arcane-panel group flex flex-col p-8 transition-colors hover:border-aura/40"
              }
            >
              <p.icon
                className={p.featured ? "h-7 w-7 text-night/70" : "h-7 w-7 text-aura"}
                strokeWidth={1.25}
              />
              <p
                className={`mt-6 font-cinzel text-[0.65rem] uppercase tracking-[0.3em] ${
                  p.featured ? "text-night/60" : "text-gold/80"
                }`}
              >
                {p.kind}
              </p>
              <h3
                className={`mt-1 font-cinzel text-2xl ${
                  p.featured ? "text-night" : "text-moon"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-3 flex-1 text-lg leading-relaxed ${
                  p.featured ? "text-night/75" : "text-moon/70"
                }`}
              >
                {p.text}
              </p>
              <span
                className={`mt-6 inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.25em] ${
                  p.featured ? "text-night" : "text-gold"
                }`}
              >
                {p.cta}
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-moon/50">
          Este é um projeto de fã, sem fins lucrativos. Assistir pelos canais
          oficiais é o que garante que a jornada de Frieren continue.
        </p>
      </div>
    </section>
  );
}
