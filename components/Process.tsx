export default function Process() {
  const steps = [
    { title: "Briefing", text: "Reunión con el cliente para entender su negocio, público y objetivos. La IA ayuda a resumir la conversación en un documento claro." },
    { title: "Wireframe", text: "Creación de la estructura visual inicial en Figma con ayuda de IA. Se define el orden de secciones y jerarquía de contenido." },
    { title: "Scaffold", text: "Montaje técnico en Next.js + Tailwind. La IA genera el esqueleto base con componentes estándar y deploy de prueba en Vercel." },
    { title: "Personalización", text: "Adaptación del diseño, colores, tipografías y textos reales del cliente. Se optimizan imágenes y accesibilidad." },
    { title: "Funciones Dinámicas", text: "Implementación de formularios, bases de datos SQL o paneles de administración. Conexión mediante rutas API seguras." },
    { title: "Optimización UX/SEO", text: "Pruebas de rendimiento, accesibilidad y experiencia de usuario. Ajustes basados en reportes Lighthouse." },
    { title: "Publicación", text: "Deploy final en Vercel con dominio propio y SSL. Entrega de guía de uso al cliente y comprobación de formularios." },
    { title: "Mantenimiento", text: "Actualizaciones mensuales, copias de seguridad, cambios ligeros y seguimiento de tráfico con Vercel Analytics." },
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