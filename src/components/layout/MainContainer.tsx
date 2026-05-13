import type { ReactNode } from "react";

export function MainContainer({ children }: { children: ReactNode }) {
  return (
    <main id="contenido" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      {children}
    </main>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`my-8 ${className}`}>{children}</section>;
}
