import { useState } from "react";
import type { Character } from "~/data/characters";
import { cn } from "~/lib/utils";

/**
 * Card de personagem. No desktop revela a biografia ao passar o mouse;
 * no celular, ao tocar. Personagens sem imagem ganham um selo mágico.
 */
export function CharacterCard({ character }: { character: Character }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setRevealed((r) => !r)}
      aria-pressed={revealed}
      aria-label={`${character.name}, ${character.title}`}
      className="group relative block w-full overflow-hidden rounded-2xl text-left ring-1 ring-aura/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(143,184,222,0.35)] hover:ring-aura/40"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        {character.image ? (
          <img
            src={character.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <Sigil character={character} />
        )}
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          character.color,
          revealed && "opacity-100",
        )}
      />

      <div
        className={cn(
          "absolute inset-0 flex translate-y-4 flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
          revealed && "translate-y-0 opacity-100",
        )}
      >
        <p className="font-cinzel text-[0.6rem] uppercase tracking-[0.35em] text-white/80">
          {character.race}
        </p>
        <h3 className="mt-1 font-cinzel text-2xl text-white drop-shadow-lg">
          {character.name}
        </h3>
        <p className="text-lg italic text-white/90">{character.title}</p>
        <p className="mt-3 text-base leading-snug text-white/95 drop-shadow">
          {character.bio}
        </p>
      </div>

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-deep/90 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-0",
          revealed && "opacity-0",
        )}
      >
        <h3 className="font-cinzel text-lg tracking-wider text-moon">
          {character.name}
        </h3>
        <p className="text-sm italic text-moon/60">{character.title}</p>
      </div>
    </button>
  );
}

function Sigil({ character }: { character: Character }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-night-soft to-night-deep">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-20",
          character.color,
        )}
      />
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute h-4/5 w-4/5 text-aura/30 transition-transform [transition-duration:2000ms] group-hover:rotate-45"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="100" cy="100" r="92" strokeWidth="0.75" />
        <circle cx="100" cy="100" r="80" strokeWidth="0.4" />
        <polygon points="100,20 169,140 31,140" strokeWidth="0.6" />
        <polygon points="100,180 31,60 169,60" strokeWidth="0.6" />
      </svg>
      <span className="relative font-cinzel text-7xl text-moon/80">
        {character.name.charAt(0)}
      </span>
    </div>
  );
}
