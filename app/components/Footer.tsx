import { Link } from "@remix-run/react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div>
              <img src="/favicon.ico" className="w-24" />
            </div>
            <p className="text-gray-300 mt-4">
              Oferecendo soluções inovadoras para um mundo em constante
              evolução.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to={""} className="hover:text-gray-300 transition-colors">
                  Adicione o bot ao seu servidor
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-gray-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-gray-300 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-gray-300 transition-colors">
                  Documentacao
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Github />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} FurinaBot. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
