# arian-portfolio — One-page Portfolio (Next.js + Tailwind + TS)

Portfolio base para Arián Mohammadian: claro, moderno y listo para desplegar en Vercel.

## Requisitos
- Node.js 18+

## Empezar
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Personalizar
- Textos: edita los componentes en `components/`.
- Colores: `tailwind.config.js` (`theme.extend.colors.brand`).
- Imágenes de proyectos: reemplaza `public/images/placeholder-*.jpg`.
- Enlaces "Ver Demo": en `components/Projects.tsx` cambia `href: "#"` por tus URLs (Vercel/Netlify).

## Secciones
- Hero (presentación + CTA Ver proyectos)
- Proyectos (2 demos con placeholder + botón Ver Demo)
- Servicios (3 planes con precios "desde")
- Proceso (4 pasos)
- Contacto (botón mailto)
- Footer

## Notas
- El código usa licencias permisivas (Next.js/React/Tailwind MIT). Puedes comercializar tus webs basadas en esta plantilla.