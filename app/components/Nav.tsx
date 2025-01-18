import { Link } from "@remix-run/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const menuItems = [
  { name: "Sobre", href: "/" },
  { name: "Suporte", href: "/" },
  { name: "Documentação", href: "/" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-row items-center justify-between mt-4 container mx-auto">
      <Link to="/" className="flex flex-row items-center gap-2">
        <img src="/favicon.ico" className="w-[50px]" />
        <span className="font-medium text-xl">Amadeus</span>
      </Link>

      <ul className="hidden md:flex space-x-6 rounded-full px-8 py-2 border border-1 border-gray-800 font-poppins uppercase">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.href}>
              <span className="cursor-pointer hover:text-[#FE9001] brightness-90   text-sm">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Button
        variant={"outline"}
        className="rounded-md text-white border border-[#FE9001]/50 hover:bg-slate-800/50 "
      >
        Adicionar Bot
      </Button>
    </nav>
  );
}
