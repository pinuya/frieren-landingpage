export interface Episode {
  /** Número dentro da temporada */
  number: number;
  /** Número absoluto na série */
  overall: number;
  title: string;
  original: string;
  summary: string;
}

export interface Arc {
  name: string;
  episodes: Episode[];
}

export interface Season {
  id: string;
  numeral: string;
  title: string;
  period: string;
  episodeCount: number;
  tagline: string;
  synopsis: string;
  highlights: string[];
  staff: { label: string; value: string }[];
  music: { label: string; value: string }[];
  arcs: Arc[];
  /**
   * ID de um vídeo OFICIAL do YouTube (ex.: trailer do canal TOHO animation).
   * Se preenchido, o trailer aparece incorporado na página.
   * Ex.: para https://www.youtube.com/watch?v=abc123 use "abc123".
   */
  trailerYoutubeId?: string;
}

const ep = (
  overall: number,
  number: number,
  title: string,
  original: string,
  summary: string,
): Episode => ({ overall, number, title, original, summary });

export const seasons: Season[] = [
  {
    id: "temporada-1",
    numeral: "I",
    title: "O Fim da Jornada",
    period: "Set 2023 — Mar 2024",
    episodeCount: 28,
    tagline: "Dez anos de aventura. Oitenta anos para entender o que significaram.",
    synopsis:
      "O Rei Demônio caiu e o grupo do herói se separa. Cinquenta anos depois, Himmel morre — e Frieren chora sem saber direito por quê. Ao lado de Fern e, depois, de Stark, ela refaz os caminhos da antiga jornada rumo ao norte, até Aureole, a terra onde as almas descansam. No caminho, enfrenta o exército de Aura, atravessa invernos, reencontra velhos conhecidos e participa do temido Exame de Mago de Primeira Classe.",
    highlights: [
      "Estreia com quatro episódios no Friday Road Show da Nippon TV",
      "Frieren × Aura, a Guilhotina",
      "O Exame de Mago de Primeira Classe e o encontro com Serie",
    ],
    staff: [
      { label: "Estúdio", value: "Madhouse" },
      { label: "Direção", value: "Keiichirō Saitō" },
      { label: "Roteiro", value: "Tomohiro Suzuki" },
      { label: "Trilha sonora", value: "Evan Call" },
    ],
    music: [
      { label: "Abertura 1", value: "“Yūsha” — YOASOBI" },
      { label: "Abertura 2", value: "“Haru” — Yorushika" },
      { label: "Encerramento", value: "“Anytime Anywhere” — milet" },
    ],
    arcs: [
      {
        name: "A Partida",
        episodes: [
          ep(1, 1, "O Fim da Jornada", "The Journey's End",
            "O grupo do herói se despede após derrotar o Rei Demônio. Cinquenta anos depois, Himmel morre de velhice e Frieren decide conhecer melhor os humanos. Heiter, já idoso, pede que ela torne a órfã Fern sua aprendiz."),
          ep(2, 2, "Não Precisava Ser Magia…", "It Didn't Have to Be Magic…",
            "Frieren treina Fern por quatro anos enquanto pesquisa magias com Heiter, que acaba falecendo. Já na estrada, as duas fazem florescer um campo da flor favorita de Himmel ao redor de sua estátua."),
          ep(3, 3, "A Magia que Mata", "Killing Magic",
            "Frieren revisita o selo de Qual, o Demônio da Corrupção. O Zoltraak, que já foi a magia mais temida do mundo, virou feitiço básico — e Frieren o derrota com sua própria criação."),
          ep(4, 4, "A Terra Onde as Almas Descansam", "The Land Where Souls Rest",
            "Frieren e Fern veem o primeiro nascer do sol do ano. Eisen as envia atrás do grimório de Flamme, que menciona Aureole — o lugar onde seria possível falar com os mortos."),
        ],
      },
      {
        name: "Stark e o Exército de Aura",
        episodes: [
          ep(5, 5, "Fantasmas dos Mortos", "Phantoms of the Dead",
            "As duas destroem um Einsam que atrai vítimas com a imagem de quem já partiu. Em seguida, Frieren vai atrás de Stark, discípulo de Eisen, para enfrentar um dragão."),
          ep(6, 6, "O Herói da Vila", "The Hero of the Village",
            "Stark vence o medo, abate o dragão e se junta ao grupo. A fronteira norte se abre para os três."),
          ep(7, 7, "Como num Conto de Fadas", "Like a Fairy Tale",
            "Estátuas do grupo do herói celebram o Dia da Libertação. Numa cidade ameaçada, Frieren é presa e as negociações de paz dos demônios se revelam uma armadilha do exército de Aura."),
          ep(8, 8, "Frieren, a Exterminadora", "Frieren the Slayer",
            "Draht ataca Frieren e morre. Lügner captura o conde da cidade, e Frieren parte para enfrentar Aura enquanto Fern e Stark resgatam o conde."),
          ep(9, 9, "Aura, a Guilhotina", "Aura the Guillotine",
            "O conde explica a Balança da Obediência. Fern e Stark lutam contra Lügner e Linie, e Stark derrota Linie."),
          ep(10, 10, "Uma Maga Poderosa", "A Powerful Mage",
            "Fern revela seu mana oculto e vence Lügner. Em flashback, Flamme acolhe Frieren como aprendiz; no presente, Frieren mostra seu verdadeiro poder e Aura é forçada a se decapitar."),
        ],
      },
      {
        name: "Rumo ao Norte",
        episodes: [
          ep(11, 11, "Inverno nas Terras do Norte", "Winter in the Northern Lands",
            "Uma nevasca prende o grupo por meses ao lado do monge elfo Kraft, que só deseja ser lembrado."),
          ep(12, 12, "Um Verdadeiro Herói", "A Real Hero",
            "Na Vila da Espada, Stark completa 18 anos. O hambúrguer que Frieren prepara traz de volta lembranças de seu irmão, Stoltz."),
          ep(13, 13, "Aversão aos Semelhantes", "Aversion to One's Own Kind",
            "Frieren resgata o sacerdote Sein, que cura Stark, e o convence a se tornar aventureiro."),
          ep(14, 14, "Privilégio dos Jovens", "Privilege of the Young",
            "Fern e Stark fazem as pazes — e descobrem o significado da pulseira que ele lhe deu. Frieren recupera o anel que Himmel colocou em seu dedo."),
          ep(15, 15, "Cheiro de Encrenca", "Smells Like Trouble",
            "Sein quebra uma maldição do sono. Stark se passa pelo falecido filho de um nobre em troca de pagamento."),
          ep(16, 16, "Amigos de Vida Longa", "Long-Lived Friends",
            "Frieren visita o velho Voll, cuja memória se esvai, e identifica estátuas de Kraft e do grupo do herói."),
          ep(17, 17, "Cuide-se", "Take Care",
            "Uma tempestade de neve retém o grupo por um mês. Sein parte atrás do Guerreiro Gorila, e os três chegam a Äußerst."),
        ],
      },
      {
        name: "Exame de Mago de Primeira Classe",
        episodes: [
          ep(18, 18, "O Exame de Mago de Primeira Classe", "First-Class Mage Exam",
            "Frieren e Fern se inscrevem no exame. Na primeira prova, é preciso capturar um pássaro Stille — e Frieren forma equipe com Lawine e Kanne."),
          ep(19, 19, "Planos Bem Traçados", "Well-Laid Plans",
            "Frieren arma uma armadilha com água contaminada de mana, até que a equipe de Denken embosca o trio."),
          ep(20, 20, "Matar Quando Necessário", "Necessary Killing",
            "A equipe de Fern enfrenta a de Wirbel, Laufen rouba o Stille de Frieren e Richter ameaça Lawine e Kanne."),
          ep(21, 21, "O Mundo da Magia", "The World of Magic",
            "Em flashback, Flamme apresenta Frieren a Serie. Frieren rompe a barreira para que a chuva caia, e Kanne vence Richter com magia de água."),
          ep(22, 22, "Inimigos do Futuro", "Future Enemies",
            "Lawine e Kanne agradecem a Frieren. A segunda prova é anunciada, com Sense como examinadora."),
          ep(23, 23, "Conquistando o Labirinto", "Conquering the Labyrinth",
            "A segunda prova exige chegar ao fundo de uma masmorra antes do amanhecer."),
          ep(24, 24, "Réplicas Perfeitas", "Perfect Replicas",
            "Um Spiegel cria cópias dos examinadores a partir de suas memórias — e a réplica de Frieren é a mais forte de todas."),
          ep(25, 25, "Uma Fraqueza Fatal", "A Fatal Vulnerability",
            "Fern revela a fraqueza de Frieren: ela não consegue perceber mana enquanto conjura."),
          ep(26, 26, "O Ápice da Magia", "The Height of Magic",
            "A réplica de Frieren é finalmente destruída, junto ao Spiegel, e os examinadores restantes passam."),
          ep(27, 27, "Uma Era dos Humanos", "An Era of Humans",
            "Richter conserta o cajado de Fern. Serie entrevista os candidatos e aprova Fern."),
          ep(28, 28, "Seria Constrangedor Quando Nos Reencontrássemos", "It Would Be Embarrassing When We Met Again",
            "Serie proíbe Frieren de entrar nos prédios da Associação por mil anos. O grupo deixa Äußerst e segue rumo a Ende."),
        ],
      },
    ],
  },
  {
    id: "temporada-2",
    numeral: "II",
    title: "O Planalto do Norte",
    period: "Jan — Mar 2026",
    episodeCount: 10,
    tagline: "Mais ao norte, o frio aperta — e as lembranças de Himmel ficam mais nítidas.",
    synopsis:
      "Com o exame para trás, Frieren, Fern e Stark finalmente entram no Planalto do Norte, a região mais perigosa do continente. Entre cavernas que anulam magia, encontros com o Herói do Sul e um encontro desajeitado entre Fern e Stark, o grupo se une a magos de primeira classe para caçar Revolte, um demônio de quatro espadas. A temporada termina com as memórias de Himmel e o anúncio de uma terceira temporada.",
    highlights: [
      "Direção de Tomoya Kitagawa, com Keiichirō Saitō no apoio",
      "O encontro de Fern e Stark",
      "Genau e Stark contra Revolte, o Divino",
    ],
    staff: [
      { label: "Estúdio", value: "Madhouse" },
      { label: "Direção", value: "Tomoya Kitagawa" },
      { label: "Trilha sonora", value: "Evan Call" },
    ],
    music: [
      { label: "Abertura", value: "“lulu.” — Mrs. GREEN APPLE" },
      { label: "Encerramento", value: "“The Story of Us” — milet" },
    ],
    arcs: [
      {
        name: "Entrando no Planalto do Norte",
        episodes: [
          ep(29, 1, "Vamos, Então?", "Shall We Go, Then?",
            "Sem dinheiro, o grupo cai em uma caverna de cristais que anulam magia e dá de cara com um dragão venenoso. Stark carrega Frieren e Fern para fora — e recusa o convite de Wirbel para defender o Planalto do Norte."),
          ep(30, 2, "O Herói do Sul", "The Hero of the South",
            "Em Fabel, o grupo limpa a estátua do Herói do Sul e um flashback revela seu encontro com Frieren. Depois, recuperam uma espada de família roubada por um demônio."),
          ep(31, 3, "Algum Lugar que Ela Goste", "Somewhere She'd Like",
            "Depois de enfrentar uma hidra de três cabeças, o grupo visita fontes termais. Stark convida Fern para um encontro — com a ajuda (duvidosa) de Frieren."),
          ep(32, 4, "A Casa dos Outros", "Other People's Homes",
            "O encontro sai torto: Fern se incomoda porque a conversa sempre volta para Frieren. O grupo entra no Planalto do Norte e uma lembrança revela por que Himmel queria ir até lá."),
          ep(33, 5, "Logística no Planalto do Norte", "Logistics in the Northern Plateau",
            "Frieren ajuda o anão Fass a recuperar uma bebida lendária presa numa barreira — e depois acaba trabalhando numa mina de prata para pagar dívidas."),
        ],
      },
      {
        name: "Revolte, o Divino",
        episodes: [
          ep(34, 6, "Um Pedido de Caça a Demônios", "A Demon-Slaying Request",
            "Uma vila é massacrada. A pedido de Serie, Methode e Genau investigam e deduzem que o líder dos demônios empunha quatro espadas."),
          ep(35, 7, "O Divino Revolte", "The Divine Revolte",
            "O grupo identifica Revolte, um demônio de quatro braços. Quando todos se separam, ele embosca Genau e Stark, enquanto os outros enfrentam névoa e artilharia."),
          ep(36, 8, "Um Fim Magnífico", "A Magnificent End",
            "Genau é gravemente ferido. Methode dissipa a névoa para Fern abater o demônio que a criava, e Stark fere Revolte mortalmente."),
        ],
      },
      {
        name: "Memórias",
        episodes: [
          ep(37, 9, "As Memórias de Himmel", "Himmel's Memoirs",
            "Denken visita o túmulo da esposa. Para pagar um barqueiro, o grupo busca as memórias escritas de Himmel em um mosteiro numa ilha."),
          ep(38, 10, "Uma Bela Paisagem", "A Beautiful Sight",
            "O grupo atravessa um imenso desfiladeiro por uma ponte centenária, e uma paisagem ao nascer do sol encerra a temporada com o prenúncio do próximo arco."),
        ],
      },
    ],
  },
];

export const nextSeason = {
  numeral: "III",
  title: "A Terra Dourada",
  period: "Previsão: outubro de 2027",
  text: "Uma terceira temporada, adaptando o arco da Terra Dourada, foi anunciada logo após o fim da segunda.",
};
