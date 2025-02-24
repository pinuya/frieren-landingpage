import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="px-4 py-6 text-center text-gray-500 text-sm w-full">
        © {new Date().getFullYear()} Frieren bot. Todos os direitos reservados.
      </div>
    </footer>
  );
}
