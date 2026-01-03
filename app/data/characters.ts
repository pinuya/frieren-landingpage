export interface Character {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  color: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Frieren",
    title: "A Feiticeira",
    bio: "Uma feiticeira élfica que sobreviveu ao grupo de heróis após derrotar o Rei Demônio. Agora embarca em uma jornada para compreender melhor os humanos.",
    image: "/assets/card/frieren.jpg",
    color: "from-blue-300/80 to-blue-600/80",
  },
  {
    id: 2,
    name: "Himmel",
    title: "O Herói",
    bio: "Líder carismático do grupo de heróis que derrotou o Rei Demônio. Mesmo após sua morte, continua a inspirar aqueles ao seu redor.",
    image: "/assets/card/himmel.jpg",
    color: "from-blue-400/80 to-cyan-600/80",
  },
  {
    id: 3,
    name: "Heiter",
    title: "O Sacerdote",
    bio: "Sacerdote do grupo de heróis conhecido por sua personalidade descontraída e amor por bebidas, mas sério quando necessário.",
    image: "/assets/card/heiter.jpg",
    color: "from-yellow-600/80 to-orange-500/80",
  },
  {
    id: 4,
    name: "Eisen",
    title: "O Guerreiro Anão",
    bio: "Guerreiro anão de grande força e coração ainda maior. Membro do grupo original de heróis que derrotou o Rei Demônio.",
    image: "/assets/card/eisen.jpg",
    color: "from-gray-700/80 to-stone-600/80",
  },
  {
    id: 5,
    name: "Fern",
    title: "A Aprendiz",
    bio: "Aprendiz de Frieren que cresceu sob os cuidados de Heiter. Talentosa e disciplinada, ela acompanha Frieren em sua nova jornada.",
    image: "/assets/card/fern.jpg",
    color: "from-purple-300/80 to-purple-600/80",
  },
  {
    id: 6,
    name: "Stark",
    title: "O Guerreiro Jovem",
    bio: "Guerreiro promissor que se junta ao grupo de Frieren. Apesar de sua aparência intimidadora, é surpreendentemente gentil e inseguro.",
    image: "/assets/card/stark.jpg",
    color: "from-red-600/80 to-orange-600/80",
  },
  {
    id: 7,
    name: "Sein",
    title: "O Sacerdote Viajante",
    bio: "Sacerdote que encontra o grupo durante sua jornada. Procura por seu amigo de infância enquanto busca significado em sua vida.",
    image: "/assets/card/sein.jpg",
    color: "from-green-600/80 to-emerald-500/80",
  },
];
