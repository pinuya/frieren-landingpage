import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { characterGroups, characters, type CharacterGroup } from "~/data/characters";
import { cn } from "~/lib/utils";
import { CharacterCard } from "../character-card";
import { SectionHeading } from "../ambient/section-heading";

export function Grimoire() {
  const [group, setGroup] = useState<CharacterGroup>("jornada");
  const visible = characters.filter((c) => c.group === group);
  const active = characterGroups.find((g) => g.id === group);

  return (
    <section id="grimorio" className="scroll-mt-24 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="Capítulo IV"
          title="Grimório de Personagens"
          subtitle="Rostos que atravessaram, por alguns anos, mil anos de vida."
        />

        <div
          role="tablist"
          aria-label="Grupos de personagens"
          className="mb-4 flex flex-wrap justify-center gap-2"
        >
          {characterGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={g.id === group}
              onClick={() => setGroup(g.id)}
              className={cn(
                "rounded-full border px-5 py-2 font-cinzel text-xs uppercase tracking-[0.2em] transition-all",
                g.id === group
                  ? "border-gold/70 bg-gold/10 text-gold"
                  : "border-aura/15 text-moon/60 hover:border-aura/40 hover:text-moon",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
        <p className="mb-12 text-center italic text-moon/50">{active?.hint}</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={group}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visible.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <CharacterCard character={c} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
