export type CharacterGroup = "herois" | "jornada" | "magos" | "demonios";

export interface Character {
  id: number;
  name: string;
  title: string;
  bio: string;
  /** Sem imagem, o card mostra um selo com a inicial do personagem. */
  image?: string;
  color: string;
  group: CharacterGroup;
  /** Raça / origem, exibida como pequena inscrição no card. */
  race: string;
}

export const characterGroups: { id: CharacterGroup; label: string; hint: string }[] = [
  { id: "jornada", label: "A Nova Jornada", hint: "Rumo a Aureole" },
  { id: "herois", label: "O Grupo do Herói", hint: "Há mais de 80 anos" },
  { id: "magos", label: "Magos & Mestres", hint: "Associação Continental de Magia" },
  { id: "demonios", label: "Demônios", hint: "Inimigos da humanidade" },
];

export const characters: Character[] = [
  // — A nova jornada —
  {
    id: 1,
    name: "Frieren",
    title: "A Maga que Enterra",
    bio: "Elfa de mais de mil anos e maga do grupo que derrotou o Rei Demônio. Após a morte de Himmel, parte em uma nova jornada para entender os humanos — e o que sentia por eles.",
    image: "/assets/card/frieren.jpg",
    color: "from-sky-300/80 to-blue-700/80",
    group: "jornada",
    race: "Elfa",
  },
  {
    id: 5,
    name: "Fern",
    title: "A Aprendiz",
    bio: "Órfã criada por Heiter e aprendiz de Frieren. Disciplinada, prática e de mana perfeitamente oculto, é quem mantém o grupo (e Frieren) nos eixos.",
    image: "/assets/card/fern.jpg",
    color: "from-purple-300/80 to-purple-700/80",
    group: "jornada",
    race: "Humana",
  },
  {
    id: 6,
    name: "Stark",
    title: "O Guerreiro Medroso",
    bio: "Discípulo de Eisen. Treme diante de cada inimigo, mas nunca foge: derrotou um dragão sozinho e protege o grupo com uma força que ele mesmo subestima.",
    image: "/assets/card/stark.jpg",
    color: "from-red-500/80 to-orange-700/80",
    group: "jornada",
    race: "Humano",
  },
  {
    id: 7,
    name: "Sein",
    title: "O Sacerdote Relutante",
    bio: "Sacerdote talentoso que bebe, fuma e aposta. Acompanha o grupo por um tempo até partir em busca de seu amigo de infância, o Guerreiro Gorila.",
    image: "/assets/card/sein.jpg",
    color: "from-emerald-500/80 to-green-700/80",
    group: "jornada",
    race: "Humano",
  },

  // — O grupo do herói —
  {
    id: 2,
    name: "Himmel",
    title: "O Herói",
    bio: "Líder do grupo que derrotou o Rei Demônio. Vaidoso, gentil e incansável em ajudar os outros. Décadas após sua morte, cada estátua e cada lembrança continuam guiando Frieren.",
    image: "/assets/card/himmel.jpg",
    color: "from-sky-400/80 to-cyan-700/80",
    group: "herois",
    race: "Humano",
  },
  {
    id: 3,
    name: "Heiter",
    title: "O Sacerdote",
    bio: "Sacerdote apreciador de vinho e de uma boa desculpa. Já idoso, adota Fern e pede a Frieren que a torne sua aprendiz.",
    image: "/assets/card/heiter.jpg",
    color: "from-amber-500/80 to-orange-700/80",
    group: "herois",
    race: "Humano",
  },
  {
    id: 4,
    name: "Eisen",
    title: "O Guerreiro Anão",
    bio: "Guerreiro anão de poucas palavras e coração imenso. Mestre de Stark, é quem revela a Frieren a existência de Aureole, onde as almas descansam.",
    image: "/assets/card/eisen.jpg",
    color: "from-stone-500/80 to-stone-800/80",
    group: "herois",
    race: "Anão",
  },

  // — Magos & mestres —
  {
    id: 8,
    name: "Flamme",
    title: "A Grande Maga",
    bio: "Lendária maga humana e mestre de Frieren. Foi ela quem ensinou Frieren a esconder seu mana — e a gostar de magias “inúteis”, como a que faz brotar um campo de flores.",
    color: "from-rose-400/80 to-rose-800/80",
    group: "magos",
    race: "Humana",
  },
  {
    id: 9,
    name: "Serie",
    title: "A Maga Primordial",
    bio: "Elfa ancestral, fundadora da Associação Continental de Magia e mestre de Flamme. Conhece quase toda a magia do mundo e avalia pessoalmente os candidatos a mago de primeira classe.",
    color: "from-amber-300/80 to-yellow-700/80",
    group: "magos",
    race: "Elfa",
  },
  {
    id: 10,
    name: "Denken",
    title: "O Mago da Corte",
    bio: "Mago veterano e ex-político que nunca desiste de uma luta, nem que seja na base do soco. Carrega uma missão pessoal ligada à sua terra natal.",
    color: "from-slate-400/80 to-slate-800/80",
    group: "magos",
    race: "Humano",
  },
  {
    id: 11,
    name: "Übel",
    title: "A Maga Instintiva",
    bio: "Maga imprevisível que corta qualquer coisa que consiga imaginar sendo cortada. Sua magia nasce da empatia — o que a torna perigosa.",
    color: "from-indigo-400/80 to-indigo-800/80",
    group: "magos",
    race: "Humana",
  },
  {
    id: 12,
    name: "Land",
    title: "O Mago dos Clones",
    bio: "Reservado e desconfiado, Land prefere enviar cópias de si mesmo a se arriscar. Mantém uma relação de implicância constante com Übel.",
    color: "from-teal-400/80 to-teal-800/80",
    group: "magos",
    race: "Humano",
  },
  {
    id: 13,
    name: "Lawine & Kanne",
    title: "As Amigas de Infância",
    bio: "Maga do gelo e maga da água que vivem brigando — e sempre se salvam. Formam equipe com Frieren na primeira prova do exame.",
    color: "from-cyan-300/80 to-blue-700/80",
    group: "magos",
    race: "Humanas",
  },
  {
    id: 14,
    name: "Wirbel",
    title: "O Capitão",
    bio: "Mago de primeira classe que lidera uma tropa no Planalto do Norte. Pragmático, não hesita em matar se for necessário.",
    color: "from-zinc-400/80 to-zinc-800/80",
    group: "magos",
    race: "Humano",
  },
  {
    id: 15,
    name: "Methode",
    title: "A Maga Versátil",
    bio: "Maga de primeira classe capaz de usar magias de restrição, rastreio e cura. Tem um fraco por pessoas pequenas.",
    color: "from-violet-300/80 to-violet-700/80",
    group: "magos",
    race: "Humana",
  },
  {
    id: 16,
    name: "Genau",
    title: "O Caçador de Demônios",
    bio: "Mago de primeira classe frio e eficiente, examinador da segunda prova. No Planalto do Norte enfrenta o demônio Revolte ao lado de Stark.",
    color: "from-neutral-400/80 to-neutral-800/80",
    group: "magos",
    race: "Humano",
  },
  {
    id: 17,
    name: "Kraft",
    title: "O Monge Elfo",
    bio: "Elfo guerreiro que passa o inverno com o grupo. Alguém tão antigo quanto Frieren, que deseja apenas ser lembrado.",
    color: "from-lime-500/80 to-green-800/80",
    group: "magos",
    race: "Elfo",
  },

  // — Demônios —
  {
    id: 18,
    name: "Aura",
    title: "A Guilhotina",
    bio: "Uma dos Sete Sábios da Destruição. Usa a Balança da Obediência para comandar um exército de mortos — até medir seu mana contra o de Frieren.",
    color: "from-pink-400/80 to-fuchsia-800/80",
    group: "demonios",
    race: "Demônio",
  },
  {
    id: 19,
    name: "Qual",
    title: "O Demônio da Corrupção",
    bio: "Criador do Zoltraak, a “magia que mata pessoas”. Selado por Frieren há 80 anos, desperta em um mundo onde sua magia virou feitiço básico.",
    color: "from-red-700/80 to-neutral-900/80",
    group: "demonios",
    race: "Demônio",
  },
  {
    id: 20,
    name: "Revolte",
    title: "O Divino",
    bio: "Demônio de quatro braços e quatro espadas que massacra uma vila no Planalto do Norte. Um dos inimigos mais brutais da segunda temporada.",
    color: "from-orange-700/80 to-neutral-900/80",
    group: "demonios",
    race: "Demônio",
  },
];
