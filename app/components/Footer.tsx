export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Frieren. Todos os direitos reservados.
      </div>
    </footer>
  );
}
