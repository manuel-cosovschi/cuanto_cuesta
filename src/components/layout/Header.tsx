import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const navItems = [
  { href: "/autos/", label: "Autos" },
  { href: "/calculadoras/costo-mensual-auto/", label: "Calculadora" },
  { href: "/metodologia/", label: "Metodología" },
  { href: "/sobre-nosotros/", label: "Sobre nosotros" },
];

export function Header() {
  return (
    <header className="border-b border-ink-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-ink-900"
        >
          <span aria-hidden className="text-xl">💰</span>
          <span className="text-base sm:text-lg">{SITE_NAME}</span>
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2 py-1 text-ink-700 hover:bg-ink-100 hover:text-ink-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
