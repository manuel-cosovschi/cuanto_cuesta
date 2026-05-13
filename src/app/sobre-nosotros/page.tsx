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
          Reunimos rangos de precios estimativos, tablas, ejemplos y calculadoras
          simples para que tomes mejores decisiones. La idea es que en menos de 5
          segundos sepas si algo está dentro de tu presupuesto y, si te interesa,
          puedas profundizar en el desglose, las preguntas frecuentes y las
          fuentes en la misma página.
        </p>
        <p>
          Empezamos con la categoría <Link href="/autos/" className="font-medium text-brand-700 hover:underline">Autos</Link>{" "}
          porque es una de las consultas más frecuentes en Argentina: ¿cuánto sale
          mantener un auto?, ¿cuánto cuesta la VTV en mi provincia?, ¿cómo cotizar
          un seguro? A partir de ahí escalamos a vivienda, trámites, mascotas,
          construcción y otras consultas con alto interés de búsqueda.
        </p>

        <h2>Para qué te sirve</h2>
        <ul>
          <li>Saber si un presupuesto que recibiste está dentro de mercado.</li>
          <li>Planificar gastos mensuales y anuales con un piso y un techo.</li>
          <li>Comparar entre opciones (auto chico vs SUV, terceros vs todo riesgo, etc.).</li>
          <li>Detectar gastos que se suelen olvidar (cubiertas, VTV, imprevistos).</li>
        </ul>

        <h2>Cómo trabajamos</h2>
        <ul>
          <li>Cada artículo tiene fecha de última actualización visible.</li>
          <li>Los precios se publican como rangos, no como valores únicos.</li>
          <li>Diferenciamos precio oficial, precio de mercado y precio estimado.</li>
          <li>Incluimos disclaimers y referencias cuando corresponde.</li>
          <li>Los reportes de usuarios nos ayudan a mantener todo al día.</li>
          <li>
            Aplicamos una{" "}
            <Link href="/metodologia/" className="font-medium text-brand-700 hover:underline">
              metodología
            </Link>{" "}
            consistente para construir cada rango bajo/medio/alto.
          </li>
        </ul>

        <h2>Lo que no hacemos</h2>
        <ul>
          <li>No damos asesoramiento legal, financiero, mecánico o profesional como definitivo.</li>
          <li>No inventamos precios oficiales ni presentamos estimaciones como exactas.</li>
          <li>No mezclamos contenido editorial con anuncios.</li>
          <li>No publicamos artículos repetidos cambiando solo una palabra.</li>
          <li>No usamos titulares clickbait ni promesas exageradas.</li>
        </ul>

        <h2>Independencia editorial</h2>
        <p>
          Este sitio puede mostrar publicidad para sostenerse económicamente, pero
          los anuncios{" "}
          <Link href="/publicidad/" className="font-medium text-brand-700 hover:underline">
            no influyen en el contenido editorial
          </Link>
          . Los rangos, las recomendaciones y los enlaces internos se deciden por
          su utilidad para el usuario, no por acuerdos comerciales.
        </p>

        <h2>Quién está detrás</h2>
        <p>
          Cuánto Cuesta Argentina es un proyecto editorial independiente con base
          en Argentina. Trabajamos con relevamientos manuales, fuentes oficiales y
          reportes de la comunidad. Si querés sumar tu experiencia, podés escribirnos
          con un dato actualizado de tu zona.
        </p>

        <h2>Contacto</h2>
        <p>
          Podés{" "}
          <Link href="/contacto/" className="font-medium text-brand-700 hover:underline">
            escribirnos
          </Link>{" "}
          para reportar precios desactualizados, sugerir temas o cuestiones
          comerciales. Respondemos en español argentino.
        </p>
      </Section>
    </MainContainer>
  );
}
