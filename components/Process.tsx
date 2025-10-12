export default function Process() {
  const steps = [
    { title: "Briefing", text: "Reunión para entender negocio, objetivos, público y alcance. Documento de requisitos y calendario." },
    { title: "Wireframe", text: "Estructura de la web en Figma: orden de secciones, jerarquía y versión mobile/desktop." },
    { title: "Scaffold técnico", text: "Arranque del proyecto (Next.js + Tailwind), rutas, layout, componentes base y control de versiones." },
    { title: "Contenido y estilo", text: "Redacción de textos, selección/optimización de imágenes, colores y tipografías; accesibilidad básica." },
    { title: "Funciones dinámicas", text: "Formularios, validaciones, rutas API y conexión a base de datos/panel si aplica." },
    { title: "Optimización UX/SEO", text: "Rendimiento, accesibilidad, metadatos, Open Graph, sitemap y microajustes de usabilidad." },
    { title: "Despliegue", text: "Deploy en Vercel, dominio/SSL, pruebas de rutas y formularios, verificación final." },
    { title: "Mantenimiento", text: "Actualizaciones, copias de seguridad, cambios ligeros y monitoreo de métricas." },
  ];


  return (
    <section id="proceso" className="section container">
      <h2 className="h2">Proceso de trabajo</h2>
      <p className="lead mt-2">Método rápido, transparente y enfocado en resultados.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s,i)=>(
          <div key={i} className="card">
            <div className="text-2xl font-bold">{String(i+1).padStart(2,'0')}</div>
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-slate-700">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}