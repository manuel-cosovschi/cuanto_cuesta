import Link from "next/link";
import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Política de privacidad",
  description:
    "Política de privacidad de Cuánto Cuesta Argentina: qué datos podemos recopilar, cómo usamos analytics y publicidad, y cuáles son tus derechos.",
  path: "/privacidad/",
});

export default function PrivacyPage() {
  return (
    <MainContainer>
      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Privacidad" }]} />
      <Section className="mt-3">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Política de privacidad</h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          Esta política describe cómo {SITE_NAME} maneja la información de quienes
          visitan el sitio. Buscamos minimizar datos y ser transparentes.
        </p>
        <p className="mt-2 text-sm text-ink-500">
          Última actualización: 13 de mayo de 2026.
        </p>
      </Section>

      <Section className="prose-cc">
        <h2>1. Datos que podríamos recopilar</h2>
        <ul>
          <li>
            <strong>Datos de uso anónimos:</strong> páginas visitadas, dispositivo y país,
            recopilados a través de herramientas de analytics (cuando estén activadas).
          </li>
          <li>
            <strong>Datos de formularios:</strong> los datos que ingreses voluntariamente
            en el formulario de contacto. Hoy el formulario abre tu cliente de correo,
            por lo que esos datos no se guardan en nuestros servidores.
          </li>
          <li>
            <strong>Cookies:</strong> ver{" "}
            <Link href="/cookies/" className="font-medium text-brand-700 hover:underline">
              política de cookies
            </Link>
            .
          </li>
        </ul>

        <h2>2. Analytics</h2>
        <p>
          Cuando activemos un proveedor de analytics (por ejemplo, Google Analytics 4 o
          Plausible) lo informaremos aquí. Por el momento, no enviamos información a
          terceros para fines de medición.
        </p>

        <h2>3. Publicidad (Google AdSense)</h2>
        <p>
          Este sitio puede mostrar anuncios a través de Google AdSense. Google y sus
          socios pueden usar cookies para servir anuncios basados en visitas previas a
          este u otros sitios. Podés configurar el uso de cookies de publicidad de
          Google desde la{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            rel="noopener nofollow"
            target="_blank"
            className="font-medium text-brand-700 hover:underline"
          >
            página oficial de Google
          </a>
          .
        </p>

        <h2>4. Bases legales</h2>
        <p>
          Tratamos datos en función de tu consentimiento al usar el sitio y aceptar
          cookies cuando corresponda. Cumplimos con la Ley 25.326 de Protección de Datos
          Personales de Argentina cuando aplica.
        </p>

        <h2>5. Derechos</h2>
        <p>
          Tenés derecho a solicitar acceso, rectificación o supresión de cualquier dato
          personal que pudieras habernos enviado. Para ejercerlos, escribinos a{" "}
          <a className="font-medium text-brand-700 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2>6. Cambios</h2>
        <p>
          Podemos actualizar esta política. Las versiones futuras se publicarán en esta
          misma página con su fecha de actualización.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Cualquier consulta sobre privacidad, escribinos a{" "}
          <a className="font-medium text-brand-700 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
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
