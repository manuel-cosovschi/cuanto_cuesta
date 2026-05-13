import Link from "next/link";
import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/content/Badge";
import { DisclaimerBox } from "@/components/content/DisclaimerBox";
import { MethodologyBox } from "@/components/content/MethodologyBox";
import { AutoCostCalculator } from "@/components/calculator/AutoCostCalculator";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { AdSlot } from "@/components/ads/AdSlot";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Calculadora de costo mensual de auto en Argentina",
  description:
    "Calculadora simple para estimar cuánto cuesta tener un auto en Argentina por mes, por año y por kilómetro. Cargá tus gastos reales y obtené un desglose claro.",
  path: "/calculadoras/costo-mensual-auto/",
  keywords: [
    "calculadora costo auto argentina",
    "cuánto sale tener un auto",
    "costo por kilómetro auto",
  ],
});

export default function AutoCostCalculatorPage() {
  return (
    <MainContainer>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Calculadoras", path: "/calculadoras/costo-mensual-auto/" },
          { name: "Costo mensual de auto", path: "/calculadoras/costo-mensual-auto/" },
        ]}
      />

      <Breadcrumbs
        items={[
          { href: "/", label: "Inicio" },
          { label: "Calculadora de costo mensual de auto" },
        ]}
      />

      <header className="mt-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">Calculadora</Badge>
          <Badge tone="neutral">Argentina</Badge>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">
          Calculadora de costo mensual de auto
        </h1>
        <p className="mt-2 max-w-3xl text-base text-ink-700">
          Cargá tus gastos reales y estimá cuánto te cuesta tener auto: mensual, anual y por kilómetro. No guardamos nada: el cálculo corre 100% en tu dispositivo.
        </p>
      </header>

      <Section>
        <AutoCostCalculator />
      </Section>

      <Section className="grid gap-4 md:grid-cols-2">
        <MethodologyBox
          notes={[
            "El service y la VTV se prorratean dividiendo el valor anual por 12.",
            "El combustible se calcula como km × consumo / 100 × precio por litro.",
            "Los valores por defecto son orientativos: cargá los tuyos para mayor precisión.",
            "No se envía información a ningún servidor.",
          ]}
        />
        <DisclaimerBox extra="Esta calculadora es una herramienta informativa. No reemplaza el asesoramiento de un profesional contable o financiero." />
      </Section>

      <Section>
        <AdSlot slot="calc-bottom" label="Anuncio" />
      </Section>

      <Section>
        <p className="text-sm text-ink-700">
          ¿Querés profundizar?{" "}
          <Link
            href="/autos/cuanto-cuesta-mantener-un-auto-en-argentina/"
            className="font-medium text-brand-700 hover:underline"
          >
            Leé la guía completa sobre cuánto cuesta mantener un auto en Argentina
          </Link>
          .
        </p>
      </Section>
    </MainContainer>
  );
}
