import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DisclaimerBox } from "@/components/content/DisclaimerBox";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Metodología de precios",
  description:
    "Cómo calculamos los rangos estimativos de precios publicados en Cuánto Cuesta Argentina: fuentes, revisión, criterios de bajo/medio/alto y limitaciones.",
  path: "/metodologia/",
});

export default function MetodologiaPage() {
  return (
    <MainContainer>
      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Metodología" }]} />
      <Section className="mt-3">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Metodología de precios</h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          Esta página describe cómo calculamos los rangos de precios publicados en Cuánto Cuesta Argentina. Buscamos ser útiles sin engañar: por eso preferimos rangos antes que valores únicos y aclaramos cuándo la información es estimativa.
        </p>
      </Section>

      <Section className="prose-cc">
        <h2>1. Tipos de precio</h2>
        <ul>
          <li>
            <strong>Oficial:</strong> el valor proviene de una fuente oficial (organismo público, normativa, tarifario publicado). Indicamos la fuente.
          </li>
          <li>
            <strong>Mercado:</strong> surge de relevamientos públicos en proveedores, cotizadores online o listas de precios privadas.
          </li>
          <li>
            <strong>Estimado:</strong> es un cálculo propio basado en supuestos. Lo aclaramos siempre que aplica.
          </li>
        </ul>

        <h2>2. Cómo construimos los rangos bajo / medio / alto</h2>
        <p>
          Para cada concepto definimos tres niveles:
        </p>
        <ul>
          <li>
            <strong>Bajo:</strong> escenario eficiente (proveedor económico, uso bajo, sin extras).
          </li>
          <li>
            <strong>Medio:</strong> escenario típico para un usuario promedio en grandes centros urbanos.
          </li>
          <li>
            <strong>Alto:</strong> escenario premium o exigente (auto más caro, zona cara, mayor cobertura, uso intensivo).
          </li>
        </ul>
        <p>
          Cuando hay datos suficientes, el valor medio se aproxima al percentil 50 del relevamiento. El bajo y el alto buscan reflejar el 25% y el 75% respectivamente.
        </p>

        <h2>3. Fuentes</h2>
        <p>
          Combinamos:
        </p>
        <ul>
          <li>Sitios oficiales (organismos provinciales y nacionales, registros, organismos viales).</li>
          <li>Tarifarios públicos de operadores habilitados (VTV, seguros, peajes, etc.).</li>
          <li>Cotizadores online de aseguradoras y proveedores.</li>
          <li>Listas y presupuestos públicos de talleres y concesionarios.</li>
          <li>Reportes recibidos de usuarios.</li>
        </ul>

        <h2>4. Frecuencia de actualización</h2>
        <p>
          Los precios cambian seguido por inflación, dólar y políticas comerciales. Revisamos los artículos periódicamente y dejamos visible la fecha de última actualización. Cuando recibimos reportes de precios desactualizados, los priorizamos.
        </p>

        <h2>5. Limitaciones</h2>
        <ul>
          <li>Los rangos son orientativos: tu situación particular puede caer fuera del rango.</li>
          <li>Algunos servicios cambian por jurisdicción; lo indicamos cuando aplica.</li>
          <li>Las cotizaciones de seguros dependen de perfil y vehículo: no reemplazan una cotización real.</li>
          <li>Los aranceles oficiales pueden actualizarse entre nuestras revisiones.</li>
        </ul>

        <h2>6. Cómo reportar un precio desactualizado</h2>
        <p>
          Si viste un valor desactualizado, escribinos desde la página de{" "}
          <a href="/contacto/?motivo=precio-desactualizado">contacto</a> con el dato y, si podés, una referencia o captura.
        </p>
      </Section>

      <Section>
        <DisclaimerBox />
      </Section>
    </MainContainer>
  );
}
