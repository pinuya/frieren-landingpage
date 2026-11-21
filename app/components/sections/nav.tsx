import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/utils";

const links = [
  { href: "#prologo", label: "Prólogo" },
  { href: "#temporadas", label: "Temporadas" },
  { href: "#cronicas", label: "Episódios" },
  { href: "#grimorio", label: "Personagens" },
  { href: "#assistir", label: "Onde Assistir" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-aura/10 bg-night/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <img src="/favicon.ico" alt="" className="h-7 w-7" />
          <span className="font-cinzel text-sm tracking-[0.3em] text-moon">
            FRIEREN
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-cinzel text-xs uppercase tracking-[0.25em] text-moon/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-moon md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-6 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-cinzel text-sm uppercase tracking-[0.25em] text-moon/80 hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
