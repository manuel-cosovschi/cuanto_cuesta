import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/content/Badge";
import { QuickAnswerBox } from "@/components/content/QuickAnswerBox";
import { LastUpdated } from "@/components/content/LastUpdated";
import { CostTable } from "@/components/tables/CostTable";
import { SimpleTable } from "@/components/tables/SimpleTable";
import { DisclaimerBox } from "@/components/content/DisclaimerBox";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { ReportPriceCTA } from "@/components/content/ReportPriceCTA";
import { CalculatorCTA } from "@/components/content/CalculatorCTA";
import { SourceList } from "@/components/content/SourceList";
import { AdSlot } from "@/components/ads/AdSlot";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
} from "@/components/seo/JsonLd";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getArticlesByCategory,
} from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticleSlugs()
    .filter((s) => s.category === "autos")
    .map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug("autos", params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/autos/${article.slug}/`,
    ogType: "article",
    publishedTime: article.lastUpdated,
    modifiedTime: article.lastUpdated,
    keywords: [article.keyword],
  });
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug("autos", params.slug);
  if (!article) notFound();

  const otherInCategory = getArticlesByCategory("autos").filter(
    (a) => a.slug !== article.slug,
  );

  return (
    <MainContainer>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Autos", path: "/autos/" },
          { name: article.title, path: `/autos/${article.slug}/` },
        ]}
      />
      <ArticleJsonLd article={article} />
      <FAQPageJsonLd faqs={article.faqs} />

      <Breadcrumbs
        items={[
          { href: "/", label: "Inicio" },
          { href: "/autos/", label: "Autos" },
          { label: article.title },
        ]}
      />

      <header className="mt-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">Autos</Badge>
          <Badge tone="neutral">Argentina</Badge>
          <Badge tone="warn">Precios estimativos</Badge>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-2 max-w-3xl text-base text-ink-700">{article.description}</p>
        <div className="mt-3">
          <LastUpdated iso={article.lastUpdated} />
        </div>
      </header>

      <Section className="mt-4">
        <QuickAnswerBox
          estimatedRange={article.estimatedRange}
          answer={article.quickAnswer}
        />
      </Section>

      <Section>
        <AdSlot slot={`article-${article.slug}-top`} label="Anuncio" />
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-ink-900">Tabla resumen de costos</h2>
        <p className="mt-2 max-w-3xl text-sm text-ink-700">
          Rangos estimativos. Cada ítem incluye una nota cuando aplica. Los valores
          marcados como <em>estimativo</em> no son precios oficiales.
        </p>
        <div className="mt-3">
          <CostTable items={article.costItems} caption={`Costos: ${article.title}`} />
        </div>
      </Section>

      {article.sections.map((s, idx) => {
        const adAfter = idx === 1; // anuncio a mitad del contenido
        return (
          <Section key={`${s.heading}-${idx}`}>
            <h2 className="text-2xl font-semibold text-ink-900" id={s.id}>
              {s.heading}
            </h2>
            {s.paragraphs?.map((p, pi) => (
              <p
                key={pi}
                className="mt-3 max-w-3xl text-base leading-relaxed text-ink-700"
              >
                {p}
              </p>
            ))}
            {s.bullets && s.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-6 text-ink-700">
                {s.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            )}
            {s.table && (
              <div className="mt-4">
                <SimpleTable
                  caption={s.table.caption}
                  headers={s.table.headers}
                  rows={s.table.rows}
                />
              </div>
            )}
            {adAfter && (
              <div className="mt-6">
                <AdSlot slot={`article-${article.slug}-mid`} label="Anuncio" />
              </div>
            )}
          </Section>
        );
      })}

      {article.relatedCalculatorSlug && (
        <Section>
          <CalculatorCTA />
        </Section>
      )}

      <Section>
        <h2 className="text-2xl font-semibold text-ink-900">Preguntas frecuentes</h2>
        <div className="mt-3">
          <FAQAccordion items={article.faqs} idPrefix={`faq-${article.slug}`} />
        </div>
      </Section>

      <Section>
        <AdSlot slot={`article-${article.slug}-pre-faq`} label="Anuncio" />
      </Section>

      <Section>
        <SourceList sources={article.sources} />
      </Section>

      <Section>
        <MethodologyBox notes={article.methodologyNotes} />
      </Section>

      <Section className="grid gap-4 md:grid-cols-2">
        <DisclaimerBox extra={article.extraDisclaimer} />
        <ReportPriceCTA />
      </Section>

      <Section>
        <RelatedLinks
          items={[
            ...article.relatedArticles,
            ...otherInCategory
              .filter(
                (a) => !article.relatedArticles.some((r) => r.slug === a.slug),
              )
              .slice(0, 2)
              .map((a) => ({
                slug: a.slug,
                title: a.title,
                category: a.category,
              })),
          ].slice(0, 4)}
        />
      </Section>
    </MainContainer>
  );
}
