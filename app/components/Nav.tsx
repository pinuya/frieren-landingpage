import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

export default function Nav() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="flex items-center space-x-2">
          <img
            src="/favicon.ico"
            alt="Frieren Bot Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to={"#features"} className="hover:text-blue-400">
            Recursos
          </Link>
          <Link to={"#about"} className="hover:text-blue-400">
            Sobre
          </Link>
          <Link to={"add-blot"} className="hover:text-blue-400">
            Adicionar ao Discord
          </Link>
        </nav>
        <Button className="bg-blue-400 hover:bg-blue-600 text-white">
          Adicionar ao Discord
        </Button>
      </div>
    </header>
  );
}
