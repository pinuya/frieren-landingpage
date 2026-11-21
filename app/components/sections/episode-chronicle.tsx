import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eye, EyeOff, Play } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { seasons } from "~/data/seasons";
import { cn } from "~/lib/utils";
import { SectionHeading } from "../ambient/section-heading";
import { WATCH_URL } from "./where-to-watch";

export function EpisodeChronicle() {
  const [activeId, setActiveId] = useState(seasons[0].id);
  const [spoilers, setSpoilers] = useState(false);
  const season = seasons.find((s) => s.id === activeId) ?? seasons[0];

  return (
    <section id="cronicas" className="scroll-mt-24 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          chapter="Capítulo III"
          title="Crônicas da Jornada"
          subtitle="Episódio por episódio, cada parada do caminho."
        />

        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div
            role="tablist"
            aria-label="Temporadas"
            className="flex rounded-full border border-aura/20 bg-night-soft/60 p-1"
          >
            {seasons.map((s) => (
              <button
                key={s.id}
                role="tab"
                type="button"
                aria-selected={s.id === activeId}
                onClick={() => setActiveId(s.id)}
                className={cn(
                  "relative rounded-full px-5 py-2 font-cinzel text-xs uppercase tracking-[0.25em] transition-colors",
                  s.id === activeId ? "text-night" : "text-moon/70 hover:text-moon",
                )}
              >
                {s.id === activeId && (
                  <motion.span
                    layoutId="season-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-aura to-moon"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative">Temporada {s.numeral}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setSpoilers((v) => !v)}
            aria-pressed={spoilers}
            className="flex items-center gap-2 text-sm text-moon/60 transition-colors hover:text-gold"
          >
            {spoilers ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            {spoilers ? "Resumos visíveis" : "Resumos ocultos (sem spoilers)"}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={season.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {season.arcs.map((arc) => (
              <div key={arc.name}>
                <h3 className="mb-4 flex items-center gap-4 font-cinzel text-sm uppercase tracking-[0.35em] text-gold/85">
                  {arc.name}
                  <span className="glow-line flex-1" />
                </h3>

                <AccordionPrimitive.Root type="multiple" className="space-y-2">
                  {arc.episodes.map((e) => (
                    <AccordionPrimitive.Item
                      key={e.overall}
                      value={String(e.overall)}
                      className="arcane-panel overflow-hidden transition-colors data-[state=open]:border-aura/35"
                    >
                      <AccordionPrimitive.Header>
                        <AccordionPrimitive.Trigger className="group flex w-full items-center gap-5 px-5 py-4 text-left">
                          <span className="w-10 shrink-0 font-cinzel text-2xl text-aura/50 transition-colors group-hover:text-aura group-data-[state=open]:text-gold">
                            {String(e.number).padStart(2, "0")}
                          </span>
                          <span className="flex-1">
                            <span className="block text-xl text-moon">{e.title}</span>
                            <span className="block text-sm italic text-moon/45">
                              {e.original} · ep. {e.overall} da série
                            </span>
                          </span>
                          <span
                            aria-hidden
                            className="h-2 w-2 rotate-45 border border-gold/60 transition-transform duration-300 group-data-[state=open]:rotate-[225deg] group-data-[state=open]:bg-gold"
                          />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="flex flex-col gap-4 px-5 pb-5 pl-[4.75rem] sm:flex-row sm:items-end">
                          <p
                            className={cn(
                              "flex-1 text-lg leading-relaxed text-moon/80 transition-[filter] duration-500",
                              !spoilers && "select-none blur-sm hover:blur-none focus:blur-none",
                            )}
                            tabIndex={spoilers ? undefined : 0}
                            title={spoilers ? undefined : "Passe o mouse para revelar"}
                          >
                            {e.summary}
                          </p>
                          <a
                            href={WATCH_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-gold/40 px-4 py-2 font-cinzel text-[0.65rem] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-night"
                          >
                            <Play className="h-3 w-3" /> Assistir
                          </a>
                        </div>
                      </AccordionPrimitive.Content>
                    </AccordionPrimitive.Item>
                  ))}
                </AccordionPrimitive.Root>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
