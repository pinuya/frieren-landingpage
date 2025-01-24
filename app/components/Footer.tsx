import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto px-4 py-10 md:py-16 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div>
                <img src="/favicon.ico" className="w-16" />
              </div>
              <span className="text-xl font-bold">Amadeus Bot</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Oferecendo soluções inovadoras para um mundo em constante
              evolução.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Sobre", "Documentação", "Suporte"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#FE9001] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-500 text-sm w-full">
          © {new Date().getFullYear()} Amadeus bot. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
