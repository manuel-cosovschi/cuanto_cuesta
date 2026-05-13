import Link from "next/link";

export function AdDisclosure() {
  return (
    <p className="text-xs text-ink-500">
      Este sitio puede mostrar anuncios identificados. Los anuncios{" "}
      <Link href="/publicidad/" className="text-brand-700 hover:underline">
        no influyen
      </Link>{" "}
      en el contenido editorial.
    </p>
  );
}
