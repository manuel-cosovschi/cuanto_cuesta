import Link from "next/link";
import { MainContainer, Section } from "@/components/layout/MainContainer";

export default function NotFound() {
  return (
    <MainContainer>
      <Section className="mt-6 text-center">
        <p className="text-sm font-semibold text-brand-700">Error 404</p>
        <h1 className="mt-2 text-3xl font-bold text-ink-900 sm:text-4xl">
          No encontramos esa página
        </h1>
        <p className="mt-3 text-ink-700">
          Puede que el enlace esté roto o que la guía haya cambiado de dirección.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            href="/"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Ir al inicio
          </Link>
          <Link
            href="/autos/"
            className="rounded-md border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-brand-300"
          >
            Ver guías de autos
          </Link>
        </div>
      </Section>
    </MainContainer>
  );
}
