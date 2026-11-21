import { motion } from "motion/react";
import { nextSeason, seasons, type Season } from "~/data/seasons";
import { SectionHeading } from "../ambient/section-heading";

export function SeasonsSection() {
  return (
    <section id="temporadas" className="scroll-mt-24 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          chapter="Capítulo II"
          title="Os Tomos da Jornada"
          subtitle="Cada temporada, um volume do diário de viagem."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {seasons.map((s, i) => (
            <SeasonTome key={s.id} season={s} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="arcane-panel mt-8 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left"
        >
          <span className="font-cinzel text-5xl text-gold/50">
            {nextSeason.numeral}
          </span>
          <div className="flex-1">
            <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-aura">
              Próximo tomo · {nextSeason.period}
            </p>
            <h3 className="mt-1 font-cinzel text-2xl text-moon">
              {nextSeason.title}
            </h3>
            <p className="mt-2 text-lg text-moon/70">{nextSeason.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SeasonTome({ season, index }: { season: Season; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      className="arcane-panel group flex flex-col overflow-hidden"
    >
      {/* Lombada do livro */}
      <div className="flex items-end justify-between border-b border-gold/20 bg-gradient-to-br from-night-soft to-night px-8 pb-6 pt-8">
        <div>
          <p className="font-cinzel text-xs uppercase tracking-[0.4em] text-gold/80">
            Temporada {season.numeral}
          </p>
          <h3 className="mt-2 font-cinzel text-2xl text-moon sm:text-3xl">
            {season.title}
          </h3>
          <p className="mt-1 text-moon/60">
            {season.period} · {season.episodeCount} episódios
          </p>
        </div>
        <span
          aria-hidden
          className="font-cinzel text-7xl leading-none text-aura/20 transition-colors duration-700 group-hover:text-aura/40"
        >
          {season.numeral}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-8">
        <p className="text-xl italic text-aura/90">{season.tagline}</p>
        <p className="text-lg leading-relaxed text-moon/80">{season.synopsis}</p>

        <ul className="space-y-2">
          {season.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-moon/75">
              <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-gold" />
              {h}
            </li>
          ))}
        </ul>

        {season.trailerYoutubeId && (
          <div className="aspect-video overflow-hidden rounded-lg ring-1 ring-aura/20">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${season.trailerYoutubeId}`}
              title={`Trailer oficial — Temporada ${season.numeral}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <dl className="mt-auto grid grid-cols-1 gap-x-6 gap-y-3 border-t border-aura/10 pt-6 sm:grid-cols-2">
          {[...season.staff, ...season.music].map((item) => (
            <div key={item.label + item.value}>
              <dt className="font-cinzel text-[0.65rem] uppercase tracking-[0.3em] text-gold/70">
                {item.label}
              </dt>
              <dd className="text-moon/85">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}
