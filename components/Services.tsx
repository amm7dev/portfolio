export default function Services() {
  const plans = [
    {
      title: "Básico",
      price: "Desde 390€",
      monthly: "29€/mes",
      features: [
        "One-page moderna y responsive",
        "Formulario de contacto anti-spam",
        "SEO básico y despliegue gestionado"
      ]
    },
    {
      title: "SQL (1 caso de uso)",
      price: "Desde 690€",
      monthly: "39€/mes",
      features: [
        "Todo lo del plan Básico",
        "Base de datos para reservas/catálogo/blog",
        "Panel sencillo y emails de confirmación"
      ]
    },
    {
      title: "E-commerce (a medida)",
      price: "Auditoría gratuita",
      features: [
        "Carrito + checkout",
        "Pasarela de pago (Stripe u otras)",
        "Gestión de productos, stock y envíos"
      ]
    }
  ];
  return (
    <section id="servicios" className="section container">
      <h2 className="h2">Servicios</h2>
      <p className="lead mt-2">Tres caminos según tus necesidades de negocio.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {plans.map((p,i)=> (
          <div key={i} className="card bg-gradient-to-tl from-white to-gold">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <div className="mt-2 text-2xl font-bold">{p.price} <span className="text-sm text-slate-500"> · {p.monthly}</span></div>
            <ul className="mt-4 space-y-1 text-slate-700">
              {p.features.map((f,j)=>(<li key={j} className="flex items-start gap-2"><span aria-hidden>•</span>{f}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500 mt-4">* Precios cerrados, IVA incluido.
      €/mes corresponde a mantenimiento mensual de la página. Incluye pago de dominio propio
      + correción de bugs y pequeños cambios</p>
    </section>
  );
}