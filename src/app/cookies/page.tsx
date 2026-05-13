import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de cookies",
  description:
    "Política de cookies de Cuánto Cuesta Argentina: tipos de cookies, analytics y publicidad. Cómo gestionarlas.",
  path: "/cookies/",
});

export default function CookiesPage() {
  return (
    <MainContainer>
      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Cookies" }]} />
      <Section className="mt-3">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Política de cookies</h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          Las cookies son pequeños archivos que se guardan en tu dispositivo cuando
          visitás un sitio web. Acá explicamos cómo las usamos.
        </p>
      </Section>

      <Section className="prose-cc">
        <h2>1. Cookies técnicas</h2>
        <p>
          Usamos cookies o almacenamiento local mínimos para que el sitio funcione
          correctamente (por ejemplo, preferencias visuales). No requieren consentimiento.
        </p>

        <h2>2. Cookies de analytics (futuras)</h2>
        <p>
          Cuando habilitemos un proveedor de analytics, usaremos cookies o identificadores
          anónimos para entender qué páginas son útiles. Lo informaremos en esta página y
          en la{" "}
          <a href="/privacidad/" className="font-medium text-brand-700 hover:underline">
            política de privacidad
          </a>
          .
        </p>

        <h2>3. Cookies de publicidad (Google AdSense)</h2>
        <p>
          Si activamos Google AdSense, Google y sus socios pueden usar cookies para
          mostrar anuncios más relevantes y medir su rendimiento. Podés gestionar tus
          preferencias desde el sitio oficial de Google.
        </p>

        <h2>4. Cómo gestionar las cookies</h2>
        <p>
          Podés configurar tu navegador para bloquear o eliminar cookies. Tené en cuenta
          que algunas funciones del sitio pueden no funcionar igual.
        </p>

        <h2>5. Consentimiento</h2>
        <p>
          Cuando habilitemos cookies no esenciales, sumaremos un banner para tu
          consentimiento. Mientras tanto, solo se usan cookies necesarias para el
          funcionamiento básico del sitio.
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
