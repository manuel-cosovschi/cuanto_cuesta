import Link from "next/link";
import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Sobre nosotros",
  description:
    "Qué es Cuánto Cuesta Argentina, su enfoque editorial y para qué le sirve a usuarios argentinos. Independencia editorial y precios estimativos.",
  path: "/sobre-nosotros/",
});

export default function AboutPage() {
  return (
    <MainContainer>
      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Sobre nosotros" }]} />
      <Section className="mt-3">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Sobre nosotros</h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          {SITE_NAME} es una guía editorial argentina enfocada en responder, con claridad, cuánto cuesta cada cosa importante de la vida cotidiana en el país: autos, vivienda, trámites, mascotas, construcción, viajes y más.
        </p>
      </Section>

      <Section className="prose-cc">
        <h2>Qué hacemos</h2>
        <p>
          Reunimos rangos de precios estimativos, tablas, ejemplos y calculadoras simples para que tomes mejores decisiones. La idea es que en menos de 5 segundos sepas si algo está dentro de tu presupuesto.
        </p>

        <h2>Cómo trabajamos</h2>
        <ul>
          <li>Cada artículo tiene fecha de última actualización visible.</li>
          <li>Los precios se publican como rangos, no como valores únicos.</li>
          <li>Diferenciamos precio oficial, precio de mercado y precio estimado.</li>
          <li>Incluimos disclaimers y referencias cuando corresponde.</li>
          <li>Los reportes de usuarios nos ayudan a mantener todo al día.</li>
        </ul>

        <h2>Lo que no hacemos</h2>
        <ul>
          <li>No damos asesoramiento legal, financiero, mecánico o profesional como definitivo.</li>
          <li>No inventamos precios oficiales ni presentamos estimaciones como exactas.</li>
          <li>No mezclamos contenido editorial con anuncios.</li>
        </ul>

        <h2>Independencia editorial</h2>
        <p>
          Este sitio puede mostrar publicidad para sostenerse económicamente, pero los anuncios{" "}
          <Link href="/publicidad/" className="font-medium text-brand-700 hover:underline">
            no influyen en el contenido editorial
          </Link>
          .
        </p>

        <h2>Contacto</h2>
        <p>
          Podés{" "}
          <Link href="/contacto/" className="font-medium text-brand-700 hover:underline">
            escribirnos
          </Link>{" "}
          para reportar precios desactualizados, sugerir temas o cuestiones comerciales.
        </p>
      </Section>
    </MainContainer>
  );
}
