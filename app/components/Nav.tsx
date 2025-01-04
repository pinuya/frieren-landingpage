import { Link } from "@remix-run/react";
import { Menu } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Add bot", href: "/" },
  { name: "Suporte", href: "/" },
  { name: "Documentação", href: "/" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-row items-center justify-between mt-4">
      <a href="/">
        <img src="/assets/furinabotlogo.png" className="w-[130px]" />
      </a>

      <ul className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.href}>
              <span className="relative cursor-pointer group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-foreground hover:text-blue-300 focus:outline-none"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Abrir menu</span>
      </button>

      {isOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
