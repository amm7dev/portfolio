import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold">AMM7DEV - FULL-STACK WEB DEVELOPER</Link>
        <div className="flex items-center gap-6 text-slate-700">
          <Link href="#proyectos" className="hover:underline">Proyectos</Link>
          <Link href="#servicios" className="hover:underline">Servicios</Link>
          <Link href="#proceso" className="hover:underline">Proceso</Link>
          <a href="#contacto" className="btn btn-primary">Contactar</a>
        </div>
      </nav>
    </header>
  );
}