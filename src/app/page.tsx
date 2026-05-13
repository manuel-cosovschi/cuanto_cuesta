import Link from "next/link";
import { MainContainer, Section } from "@/components/layout/MainContainer";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CalculatorCTA } from "@/components/content/CalculatorCTA";
import { ReportPriceCTA } from "@/components/content/ReportPriceCTA";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { AdSlot } from "@/components/ads/AdSlot";
import { SearchBox } from "@/components/forms/SearchBox";
import { categories } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cuánto Cuesta Argentina | Guías de costos y calculadoras",
  description:
    "Guías argentinas con rangos estimativos de costos, tablas y calculadoras simples para autos, vivienda, trámites y más. Información actualizada y disclaimers claros.",
  path: "/",
});

export default function HomePage() {
  const autosArticles = getArticlesByCategory("autos");

  return (
    <MainContainer>
      <Section className="mt-2 sm:mt-4">
        <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-10 shadow-card">
          <p className="text-sm font-medium text-brand-700">Cuánto Cuesta Argentina</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            Calculá cuánto cuesta mantener, comprar o usar algo en Argentina
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink-700 sm:text-lg">
            Guías actualizadas con rangos de precios, tablas, ejemplos y calculadoras
            simples para tomar mejores decisiones.
          </p>
          <div className="mt-6 max-w-2xl">
            <SearchBox />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink-500">
            <span className="rounded-full border border-ink-200 bg-ink-50 px-2 py-1">
              Precios estimativos
            </span>
            <span className="rounded-full border border-ink-200 bg-ink-50 px-2 py-1">
              Actualización periódica
            </span>
            <span className="rounded-full border border-ink-200 bg-ink-50 px-2 py-1">
              Argentina
            </span>
          </div>
        </div>
      </Section>

      <Section>
        <header className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-ink-900">Categorías</h2>
        </header>
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <li key={c.slug}>
              <CategoryCard category={c} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            Especial
          </p>
          <h2 className="mt-1 text-2xl font-bold text-ink-900">Autos</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-700">
            La categoría más buscada por argentinos: cuánto sale por mes, transferir, asegurar y mantener un auto en Argentina. Incluye calculadora interactiva.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/autos/"
              className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Ver todas las guías de Autos →
            </Link>
            <Link
              href="/calculadoras/costo-mensual-auto/"
              className="inline-flex items-center rounded-md border border-brand-300 bg-white px-4 py-2 text-sm font-semibold text-brand-700 hover:border-brand-500"
            >
              Abrir calculadora
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <header className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-ink-900">Últimas guías actualizadas</h2>
          <Link href="/autos/" className="text-sm font-medium text-brand-700 hover:underline">
            Ver todas →
          </Link>
        </header>
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {autosArticles.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CalculatorCTA />
      </Section>

      <Section className="grid gap-4 md:grid-cols-2">
        <MethodologyBox
          notes={[
            "Combinamos fuentes oficiales (cuando existen) con relevamiento de mercado y promedios.",
            "Cada artículo tiene fecha de actualización y aclara cuándo el valor es estimativo.",
            "Recibimos reportes de usuarios que detectan precios desactualizados.",
          ]}
        />
        <ReportPriceCTA />
      </Section>

      <Section>
        <AdSlot label="Anuncio" slot="home-bottom" />
      </Section>
    </MainContainer>
  );
}
