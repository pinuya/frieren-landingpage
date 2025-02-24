import { Music, Users, Zap, Shuffle } from "lucide-react";

export default function MusicBotAbout() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div>
        <div className="grid gap-4">
          <Feature
            icon={Music}
            title="Qualidade de som cristalina"
            description="Como se você estivesse em um show ao vivo."
          />
          <Feature
            icon={Users}
            title="Filas colaborativas"
            description="Crie filas de músicas com seus amigos em tempo real!"
          />
          <Feature
            icon={Zap}
            title="Comandos simples e intuitivos"
            description="Toque, pule, pause ou embaralhe músicas com facilidade."
          />
          <Feature
            icon={Shuffle}
            title="100% gratuito e sempre online"
            description="Leve e sempre disponível para animar seu servidor."
          />
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <Icon className="w-6 h-6 text-blue-300" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
