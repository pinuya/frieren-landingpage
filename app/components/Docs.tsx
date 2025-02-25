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
import { motion } from "framer-motion";

export function MusicBotDocs() {
  // Configuração de animação para o contêiner principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section className="mb-8" variants={sectionVariants}>
        <h2 className="text-2xl font-semibold mb-4">Comandos Básicos</h2>
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
              <TableCell>Retomar a reprodução de uma música pausada</TableCell>
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
      </motion.section>

      <motion.section variants={sectionVariants}>
        <h2 className="text-2xl font-semibold mb-4">Informações adicionais</h2>
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
    </motion.div>
  );
}
