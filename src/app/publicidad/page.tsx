import Link from "next/link";
import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Publicidad y monetización",
  description:
    "Cómo se muestran los anuncios en Cuánto Cuesta Argentina, cómo mantenemos la independencia editorial y cómo contactarnos para campañas.",
  path: "/publicidad/",
});

export default function PublicidadPage() {
  return (
    <MainContainer>
      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Publicidad" }]} />
      <Section className="mt-3">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Publicidad</h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          {SITE_NAME} puede mostrar anuncios para sostener el proyecto. Trabajamos para
          que la experiencia no se vea afectada y para mantener la línea editorial
          independiente.
        </p>
      </Section>

      <Section className="prose-cc">
        <h2>Cómo identificamos los anuncios</h2>
        <ul>
          <li>Cada bloque publicitario está etiquetado con la palabra &quot;Anuncio&quot;.</li>
          <li>Los anuncios no se mezclan con el contenido editorial.</li>
          <li>Nunca pedimos clics ni promovemos interactuar con los anuncios.</li>
          <li>No usamos popups, intersticiales ni formatos que tapen el contenido.</li>
        </ul>

        <h2>Google AdSense</h2>
        <p>
          Cuando el sitio esté aprobado por Google AdSense, los anuncios pueden ser
          personalizados en función de tu actividad de navegación. Podés gestionar tus
          preferencias desde la{" "}
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

        <h2>Independencia editorial</h2>
        <p>
          Los anuncios no influyen en qué temas cubrimos, en los rangos publicados ni en
          los enlaces internos. El contenido editorial se decide en función de su utilidad
          para usuarios argentinos.
        </p>

        <h2>Campañas y partners</h2>
        <p>
          Si te interesa una campaña de medios o contenido patrocinado claramente
          etiquetado, escribinos a{" "}
          <a className="font-medium text-brand-700 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . Cualquier contenido pagado se identifica como tal.
        </p>

        <h2>Reportar un anuncio</h2>
        <p>
          Si viste un anuncio engañoso o inapropiado, avisanos desde la página de{" "}
          <Link href="/contacto/" className="font-medium text-brand-700 hover:underline">
            contacto
          </Link>
          .
        </p>
      </Section>

      <Section>
        <p className="rounded-md border border-ink-200 bg-white p-3 text-sm text-ink-700">
          Nota: este sitio no promete generación automática de ingresos. La monetización
          depende del tráfico orgánico, las aprobaciones de cada red publicitaria y de
          cumplir con sus políticas.
        </p>
      </Section>
    </MainContainer>
  );
}
