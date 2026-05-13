import { MainContainer, Section } from "@/components/layout/MainContainer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { ReportPriceCTA } from "@/components/content/ReportPriceCTA";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contactanos para reportar precios desactualizados, sugerir temas o consultas comerciales. No almacenamos datos personales sin tu consentimiento.",
  path: "/contacto/",
});

export default function ContactPage() {
  return (
    <MainContainer>
      <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Contacto" }]} />
      <Section className="mt-3">
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Contacto</h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          Escribinos para reportar precios desactualizados, sugerir nuevos temas, avisar errores o coordinar publicidad. También podés mandarnos un correo directo a{" "}
          <a className="font-medium text-brand-700 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="space-y-4">
          <ReportPriceCTA />
          <aside className="rounded-lg border border-ink-200 bg-white p-4 text-sm text-ink-700">
            <p className="font-semibold text-ink-900">Política de datos del formulario</p>
            <p className="mt-1">
              Este formulario abre tu cliente de correo con un mensaje prellenado. No
              guardamos tus datos en nuestros servidores. Si en el futuro habilitamos
              envío directo, lo aclararemos en la{" "}
              <a href="/privacidad/" className="font-medium text-brand-700 hover:underline">
                política de privacidad
              </a>
              .
            </p>
          </aside>
        </div>
      </Section>
    </MainContainer>
  );
}
