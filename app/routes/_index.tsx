import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import Footer from "~/components/Footer";
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
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-950/95 to-transparent rounded-full bg-blend-overlay blur-3xl" />

          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bot de música para o seu servidor Discord
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforme sua experiência no Discord com a Furina. Um bot de
                  música completo, fácil de usar e com alta qualidade de som!
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-2 min-[400px]:flex-row justify-center sm:justify-start"
              >
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
              </motion.div>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              alt="Furina"
              className="hidden sm:block"
              src="/assets/furina.png"
            />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
