export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Arián Mohammadian — Todos los derechos reservados</p>
        <a className="hover:underline" href="mailto:arianmmbusiness@gmail.com">arianmmbusiness@gmail.com</a>
      </div>
    </footer>
  );
}