export default function Projects() {
  const items = [
    {
      title: "Relojes On-Time",
      desc: "Web DEMO para relojería de barrio .",
      img: "/assets/demo_relojes-ontime.png",
      href: "https://relojes-ontime.vercel.app"
    },
    {
      title: "Cafe-del-Sol",
      desc: "Web DEMO para cafetería de barrio.",
      img: "/assets/demo_portfolio.png",
      href: "https://cafe-del-sol.vercel.app"
    },
    {
      title: "Mi portfolio",
      desc: "Web versátil para presentación de servicios o portfolio genérico.",
      img: "/assets/demo_portfolio.png",
      href: "#"
    }
  ];

  return (
    <section id="proyectos" className="section container">
      <h2 className="h2">Proyectos</h2>
      <p className="lead mt-2">Demos enfocadas en negocio local — listas para adaptar a tu marca.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((it, i)=> (
          <article key={i} className="card">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border bg-slate-100">
              <img src={it.img} alt={it.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
            <p className="mt-1 text-slate-700">{it.desc}</p>
            <div className="mt-4">
              <a href={it.href} className="btn btn-primary">Ver Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}