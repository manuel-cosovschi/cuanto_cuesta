import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const cols: Array<{ title: string; links: Array<{ href: string; label: string }> }> = [
  {
    title: "Categorías",
    links: [
      { href: "/autos/", label: "Autos" },
      { href: "/calculadoras/costo-mensual-auto/", label: "Calculadora de auto" },
    ],
  },
  {
    title: "Sitio",
    links: [
      { href: "/sobre-nosotros/", label: "Sobre nosotros" },
      { href: "/metodologia/", label: "Metodología" },
      { href: "/contacto/", label: "Contacto" },
      { href: "/publicidad/", label: "Publicidad" },
    ],
  },
  {
    title: "Legales",
    links: [
      { href: "/privacidad/", label: "Política de privacidad" },
      { href: "/terminos/", label: "Términos y condiciones" },
      { href: "/cookies/", label: "Política de cookies" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-ink-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-semibold text-ink-900">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-ink-500">
            Guías editoriales con rangos estimativos de costos en Argentina. Información práctica, sin promesas exageradas.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold text-ink-900">{c.title}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-700 hover:text-brand-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-ink-200">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-ink-500 sm:px-6">
          © {year} {SITE_NAME}. Todos los precios son estimativos y de referencia.
        </div>
      </div>
    </footer>
  );
}
