import { characters } from "~/data/characters";

export function CharacterCard({
  character,
}: {
  character: (typeof characters)[0];
}) {
  return (
    <div className="group relative transform cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t ${character.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="absolute inset-0 flex translate-y-4 transform flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              {character.name}
            </h3>
            <p className="text-lg font-semibold text-gray-200 drop-shadow-md">
              {character.title}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-gray-100 drop-shadow-lg md:text-base">
            {character.bio}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-bold text-white">{character.name}</h3>
      </div>
    </div>
  );
}
