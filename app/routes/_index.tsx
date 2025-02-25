import type { MetaFunction } from "@remix-run/node";
import { motion, useInView } from "framer-motion";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Badge,
  Bell,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  MessageCircle,
  MoveRight,
  Star,
  Users,
} from "lucide-react";
import MusicBotAbout from "~/components/About";
import { useRef } from "react";
import HeroSection from "~/components/HeroSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  Play,
  Pause,
  SkipForward,
  Repeat,
  VolumeX,
  Volume2,
  List,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export const meta: MetaFunction = () => {
  return [
    { title: "Frieren" },
    {
      name: "Melhor bot de musica",
      content: "Bem-vindos a landing page da Frieren bot!",
    },
  ];
};

export default function Index() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div>
      <HeroSection />

      <section
        id="about"
        ref={sectionRef}
        className="relative min-h-screen bg-black flex items-center justify-center py-16 px-4 md:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-85" />
          <img
            src="/assets/frierenAbout.gif"
            alt="Frieren plano de fundo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="space-y-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold uppercase text-center text-white"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              Frieren
            </motion.h1>

            <motion.p
              className="text-gray-300 text-center md:text-left"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Frieren, a Maga Élfica, é uma personagem poderosa e enigmática do
              anime "Frieren: Além do Fim da Viagem". Com séculos de
              conhecimento mágico e uma perspectiva única sobre a vida, Frieren
              traz profundidade e sabedoria para o seu servidor Discord. Nosso
              bot captura a essência de Frieren, permitindo que você experimente
              sua magia, conhecimento e humor sutil em sua própria comunidade.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <MusicBotAbout />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Link to={"/"} className="justify-center items-center flex">
                <motion.button
                  className="text-white bg-gradient-to-br from-cyan-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase flex gap-4 me-2 mb-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Adicione a Frieren em seu servidor! <MoveRight />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div className="container mx-auto px-4 py-8">
        <motion.section>
          <h2 className="text-2xl uppercase text-center font-semibold mb-4">
            Documentação
          </h2>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Comandos</TableHead>
                <TableHead className="w-1/4">Descrição</TableHead>
                <TableHead>Uso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    !play
                  </div>
                </TableCell>
                <TableCell>Toque uma música ou adicione-a à fila</TableCell>
                <TableCell>!play &lt;URL da música&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Pause className="w-4 h-4" />
                    !pause
                  </div>
                </TableCell>
                <TableCell>Pausar a música atual</TableCell>
                <TableCell>!pause</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    !resume
                  </div>
                </TableCell>
                <TableCell>
                  Retomar a reprodução de uma música pausada
                </TableCell>
                <TableCell>!resume</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <SkipForward className="w-4 h-4" />
                    !skip
                  </div>
                </TableCell>
                <TableCell>Pular a música atual</TableCell>
                <TableCell>!skip</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <List className="w-4 h-4" />
                    !queue
                  </div>
                </TableCell>
                <TableCell>Exibir a fila de músicas atual</TableCell>
                <TableCell>!queue</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <VolumeX className="w-4 h-4" />
                    !stop
                  </div>
                </TableCell>
                <TableCell>Pare a reprodução e limpe a fila</TableCell>
                <TableCell>!stop</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4" />
                    !volume
                  </div>
                </TableCell>
                <TableCell>Ajuste o volume do bot</TableCell>
                <TableCell>!volume &lt;0-100&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Repeat className="w-4 h-4" />
                    !loop
                  </div>
                </TableCell>
                <TableCell>Alternar modo loop para a música atual</TableCell>
                <TableCell>!loop</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <motion.section className="mt-4">
            <h2 className="text-2xl font-semibold mb-4">
              Informações adicionais
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O bot suporta links do YouTube, Spotify e SoundCloud.</li>
              <li>
                Você deve estar em um canal de voz para usar comandos de música.
              </li>
              <li>
                O bot sairá automaticamente do canal de voz após 5 minutos de
                inatividade.
              </li>
            </ul>
          </motion.section>
        </motion.section>
      </motion.div>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2 text-center uppercase">
          Suporte e comunidade
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Junte-se à nossa próspera comunidade para suporte e atualizações
          instantâneas
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-400 " />
                Precisar de ajuda?
              </CardTitle>
              <CardDescription>
                Nossa comunidade Discord está aqui para ajudá-lo 24 horas por
                dia, 7 dias por semana!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Por que ingressar em nosso servidor de suporte?
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-blue-400" />
                        Obtenha respostas rápidas de nossa equipe e comunidade
                      </li>
                      <li className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-blue-400" />
                        Seja o primeiro a saber sobre novos recursos e
                        atualizações
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        Conecte-se com outros entusiastas da música
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-blue-400" />
                        Participe de eventos e brindes exclusivos
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl "
                size="lg"
              >
                Junte-se ao servidor de suporte
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Informações do servidor
              </CardTitle>
              <CardDescription>Suporte e comunidade da Frieren</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Canais principais</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {[
                    "welcome",
                    "anúncios",
                    "chat",
                    "suporte",
                    "bug-reports",
                    "solicitações-de-recursos",
                  ].map((channel) => (
                    <li key={channel} className="flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />#
                      {channel}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Status da Comunidade</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-300">
                    Suporte 24/7
                  </span>
                  <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-gray-700 text-gray-300">
                    Mods ativos
                  </span>
                  <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-indigo-900 text-indigo-300">
                    Eventos diários
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-muted-foreground">Online: </span>
                <span className="font-semibold text-green-500">120</span>
              </div>
              <Button variant="outline">Ver regras do servidor</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">F.A.Q</h3>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Como adiciono o bot ao meu servidor?
              </AccordionTrigger>
              <AccordionContent>
                Para adicionar o bot ao seu servidor, clique no botão "Convidar
                Bot" em nosso site. Você precisará ter o "Gerenciar Servidor"
                permissão no servidor Discord onde você deseja adicionar o bot.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quais fontes de música o bot suporta?
              </AccordionTrigger>
              <AccordionContent>
                Nosso bot oferece suporte a uma ampla variedade de fontes de
                música, incluindo YouTube, Spotify, SoundCloud e muito mais.
                Você pode tocar música por fornecendo um link ou pesquisando o
                título de uma música.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Existe uma versão premium do bot?
              </AccordionTrigger>
              <AccordionContent>
                No momento não, mas esta em planos de desenvolvimento.
                Pretendemos oferecer uma versão premium com recursos adicionais,
                como áudio de maior qualidade, filas mais longas e comandos
                exclusivos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
