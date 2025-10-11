export default function Hero() {
  return (
    <section className="section container text-center">
      {/* Texto principal */}
      <h1 className="h1">
        Desarrollo webs dinámicas y modernas para negocios locales.
      </h1>
      <p className="lead mt-3">
        Entrega rápida, profesional y con un proceso claro: <br></br> BRIEFING → ADAPTACIÓN AL NEGOCIO → DISEÑO → PUBLICACIÓN.
      </p>

      {/* --- NUEVA SECCIÓN DE PRESENTACIÓN PERSONAL --- */}
      <div className="mt-10 flex flex-col items-center gap-4">
        {/* Foto */}
        <img
          src="/assets/foto_dni.jpg" // cambia la ruta según tu carpeta
          alt=""
          className="w-32 h-32 rounded-full object-cover shadow-md border border-gray-200"
        />

        {/* Frase personal */}
        <p className="text-gray-700 text-base max-w-md">
          Hola, soy <span className="font-semibold text-blue-600">Arián Mohammadian</span>, 
          desarrollador web freelance. Ayudo a negocios locales a digitalizarse con soluciones modernas, simples y efectivas.
        </p>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arian-mohammadian/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          {/* Icono LinkedIn */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
            2.761 2.239 5 5 5h14c2.761 0 5-2.239 
            5-5v-14c0-2.761-2.239-5-5-5zm-11 
            19h-3v-10h3v10zm-1.5-11.268c-.966 
            0-1.75-.784-1.75-1.75s.784-1.75 
            1.75-1.75 1.75.784 1.75 
            1.75-.784 1.75-1.75 
            1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 
            0-2.154 1.46-2.154 2.969v5.698h-3v-10h2.881v1.367h.041c.401-.757 
            1.379-1.555 2.838-1.555 3.034 0 
            3.593 1.997 3.593 4.593v5.595z" />
          </svg>
          Conecta en LinkedIn
        </a>
      </div>

      {/* Botones CTA */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <a href="#proyectos" className="btn btn-primary">
          Ver proyectos
        </a>
        <a href="#servicios" className="btn btn-ghost">
          Ver servicios
        </a>
      </div>
    </section>
  );
}
