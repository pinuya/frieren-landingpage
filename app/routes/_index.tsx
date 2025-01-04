import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Nav from "~/components/Nav";

export const meta: MetaFunction = () => {
  return [
    { title: "Furina" },
    {
      name: "Melhor bot de musica",
      content: "Bem-vindos a landing page da Furina Bot!",
    },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto">
      <Nav />

      <main className="flex-1">
        <section className="relative container py-4 ">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bot de música para o seu servidor Discord
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforme sua experiência no Discord com a Furina. Um bot de
                  música completo, fácil de usar e com alta qualidade de som!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center sm:justify-start">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-300 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  to={""}
                >
                  Comece agora
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-900 px-8 text-sm font-medium shadow-sm transition-colors text-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  to={""}
                >
                  Saiba mais
                </Link>
              </div>
            </div>
            <img
              alt="Furina"
              className="hidden sm:block"
              src="/assets/furina1.png"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
