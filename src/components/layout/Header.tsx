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
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-ink-900"
        >
          <span aria-hidden className="text-xl">💰</span>
          <span className="text-base sm:text-lg">{SITE_NAME}</span>
        </Link>
        <nav aria-label="Navegación principal" className="-mx-2 overflow-x-auto sm:mx-0 sm:overflow-visible">
          <ul className="flex items-center gap-1 px-2 text-sm sm:gap-3 sm:px-0">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-1 text-ink-700 hover:bg-ink-100 hover:text-ink-900"
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
