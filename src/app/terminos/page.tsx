import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso de Cuánto Cuesta Argentina. Información estimativa, limitación de responsabilidad y enlaces externos.",
  path: "/terminos/",
});

export default function TermsPage() {
  return (
    <MainContainer>
      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Términos" }]} />
      <Section className="mt-3">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Términos y condiciones</h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          Al usar {SITE_NAME} aceptás estos términos. Si no estás de acuerdo, te pedimos no
          utilizar el sitio.
        </p>
        <p className="mt-2 text-sm text-ink-500">Última actualización: 13 de mayo de 2026.</p>
      </Section>

      <Section className="prose-cc">
        <h2>1. Uso del sitio</h2>
        <p>
          El contenido se publica con fines informativos. Está permitido leer, compartir el
          enlace y citar pequeños fragmentos con atribución. No está permitido republicar
          artículos completos sin autorización.
        </p>

        <h2>2. Información estimativa</h2>
        <p>
          Todos los precios, tablas y calculadoras se presentan como referencias
          estimativas. Pueden estar desactualizados o no aplicar a tu caso particular.
        </p>

        <h2>3. No es asesoramiento profesional</h2>
        <p>
          El contenido no constituye asesoramiento legal, financiero, fiscal, contable,
          mecánico, veterinario, médico ni de ningún tipo profesional. Para decisiones
          importantes consultá a un profesional matriculado.
        </p>

        <h2>4. Limitación de responsabilidad</h2>
        <p>
          {SITE_NAME} no se responsabiliza por daños directos o indirectos derivados del
          uso de la información publicada. El uso del sitio es bajo tu propio riesgo.
        </p>

        <h2>5. Enlaces externos</h2>
        <p>
          Podemos enlazar a sitios de terceros. No controlamos su contenido ni sus
          políticas y no nos responsabilizamos por su funcionamiento.
        </p>

        <h2>6. Publicidad</h2>
        <p>
          El sitio puede mostrar anuncios. Los anuncios están identificados como tales y
          no afectan la independencia editorial.
        </p>

        <h2>7. Cambios</h2>
        <p>
          Podemos actualizar estos términos. La fecha de última actualización se
          mostrará en esta página.
        </p>

        <h2>8. Jurisdicción</h2>
        <p>
          Cualquier controversia se rige por las leyes de la República Argentina y los
          tribunales competentes correspondientes.
        </p>
      </Section>

      <Section>
        <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          Estos textos son una base informativa. Antes de un uso comercial definitivo
          conviene que sean revisados por un profesional legal.
        </p>
      </Section>
    </MainContainer>
  );
}
