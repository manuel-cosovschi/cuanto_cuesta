import Link from "next/link";
import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CalculatorCTA } from "@/components/content/CalculatorCTA";
import { DisclaimerBox } from "@/components/content/DisclaimerBox";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { LastUpdated } from "@/components/content/LastUpdated";
import { ReportPriceCTA } from "@/components/content/ReportPriceCTA";
import { SimpleTable } from "@/components/tables/SimpleTable";
import { AdSlot } from "@/components/ads/AdSlot";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { getArticlesByCategory } from "@/data/articles";
import {
  autosCategoryFaqs,
  autosCategoryIntro,
  autosCategoryLastUpdated,
  autosCategorySummary,
} from "@/data/autos";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cuánto cuesta tener un auto en Argentina",
  description:
    "Guías y rangos estimativos para tener y mantener un auto en Argentina: seguro, patente, combustible, cochera, VTV, service y transferencia. Incluye calculadora.",
  path: "/autos/",
  keywords: [
    "cuánto cuesta un auto en argentina",
    "mantener un auto argentina",
    "vtv",
    "seguro auto",
    "transferir un auto",
  ],
});

export default function AutosPage() {
  const articles = getArticlesByCategory("autos");

  return (
    <MainContainer>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Autos", path: "/autos/" },
        ]}
      />
      <FAQPageJsonLd faqs={autosCategoryFaqs} />

      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Autos" }]} />

      <Section className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
          Categoría
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink-900 sm:text-4xl">
          Cuánto cuesta tener y mantener un auto en Argentina
        </h1>
        <p className="mt-3 max-w-3xl text-base text-ink-700">{autosCategoryIntro}</p>
        <div className="mt-3">
          <LastUpdated iso={autosCategoryLastUpdated} label="Categoría actualizada" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-ink-900">Resumen de gastos frecuentes</h2>
        <p className="mt-2 max-w-3xl text-sm text-ink-700">
          Tabla resumen con los principales costos asociados a tener un auto en Argentina.
          Los valores son rangos estimativos para autos chicos y medianos con uso urbano.
        </p>
        <div className="mt-3">
          <SimpleTable
            caption="Resumen estimativo de costos de un auto en Argentina."
            headers={["Concepto", "Rango estimado", "Frecuencia", "Notas"]}
            rows={autosCategorySummary.map((r) => [
              r.concept,
              r.costRange,
              r.frequency,
              r.note || "—",
            ])}
          />
        </div>
      </Section>

      <Section>
        <AdSlot slot="autos-cat-mid" label="Anuncio" />
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-ink-900">Guías de autos</h2>
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CalculatorCTA />
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-ink-900">Preguntas frecuentes</h2>
        <div className="mt-3">
          <FAQAccordion items={autosCategoryFaqs} idPrefix="autos-faq" />
        </div>
      </Section>

      <Section className="grid gap-4 md:grid-cols-2">
        <DisclaimerBox />
        <ReportPriceCTA />
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-ink-900">Más sobre el sitio</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          <li>
            <Link
              href="/metodologia/"
              className="block rounded-lg border border-ink-200 bg-white p-4 hover:border-brand-300 hover:shadow-card"
            >
              <span className="font-semibold text-ink-900">Cómo estimamos los precios</span>
              <span className="mt-1 block text-sm text-ink-700">
                Ver metodología completa y criterios de rangos bajo/medio/alto.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nosotros/"
              className="block rounded-lg border border-ink-200 bg-white p-4 hover:border-brand-300 hover:shadow-card"
            >
              <span className="font-semibold text-ink-900">Sobre nosotros</span>
              <span className="mt-1 block text-sm text-ink-700">
                Quiénes somos y para qué sirve Cuánto Cuesta Argentina.
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/publicidad/"
              className="block rounded-lg border border-ink-200 bg-white p-4 hover:border-brand-300 hover:shadow-card"
            >
              <span className="font-semibold text-ink-900">Publicidad</span>
              <span className="mt-1 block text-sm text-ink-700">
                Cómo se muestran anuncios y cómo mantenemos independencia editorial.
              </span>
            </Link>
          </li>
        </ul>
      </Section>
    </MainContainer>
  );
}
