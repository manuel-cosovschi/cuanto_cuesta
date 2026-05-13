import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QuickAnswerBox } from "@/components/content/QuickAnswerBox";
import { Badge } from "@/components/content/Badge";
import { LastUpdated } from "@/components/content/LastUpdated";
import { FAQAccordion } from "@/components/content/FAQAccordion";

describe("content components", () => {
  it("QuickAnswerBox muestra rango y respuesta", () => {
    render(
      <QuickAnswerBox
        estimatedRange="Entre ARS 100.000 y ARS 200.000"
        answer="Respuesta corta de prueba para validar."
      />,
    );
    expect(screen.getByText(/ARS 100.000/)).toBeInTheDocument();
    expect(screen.getByText(/Respuesta rápida/)).toBeInTheDocument();
    expect(screen.getByText(/Precio estimativo/)).toBeInTheDocument();
  });

  it("Badge renderiza el contenido", () => {
    render(<Badge tone="brand">Hola</Badge>);
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });

  it("LastUpdated muestra la fecha formateada", () => {
    render(<LastUpdated iso="2026-05-13" />);
    expect(screen.getByText(/2026/)).toBeInTheDocument();
  });

  it("FAQAccordion muestra preguntas", () => {
    render(
      <FAQAccordion
        items={[{ question: "¿Cuánto sale?", answer: "Depende." }]}
      />,
    );
    expect(screen.getByText("¿Cuánto sale?")).toBeInTheDocument();
  });
});
