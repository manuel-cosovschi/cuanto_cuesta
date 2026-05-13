import type { Article } from "@/types/article";

export const transferirUnAuto: Article = {
  slug: "cuanto-cuesta-transferir-un-auto-en-argentina",
  category: "autos",
  title: "Cuánto cuesta transferir un auto en Argentina",
  seoTitle: "Cuánto cuesta transferir un auto en Argentina",
  description:
    "Aranceles, formularios, verificación policial e informe de dominio: cuánto cuesta transferir un auto usado en Argentina y qué factores hacen variar el precio.",
  keyword: "cuánto cuesta transferir un auto en argentina",
  lastUpdated: "2026-05-13",
  estimatedRange:
    "La transferencia de un auto usado en Argentina cuesta, en promedio, entre 1,5% y 3% del valor del vehículo, según jurisdicción y si se usa gestoría.",
  quickAnswer:
    "Transferir un auto usado en Argentina suele costar entre el 1,5% y el 3% del valor del vehículo. Incluye aranceles del Registro Automotor (DNRPA), formularios, verificación policial (cuando corresponde), informe de dominio, certificación de firmas y, opcionalmente, gestoría. El costo final depende de la jurisdicción y de la valuación fiscal del auto.",
  costItems: [
    {
      name: "Aranceles DNRPA (formulario 08 + transferencia)",
      low: 60000,
      medium: 120000,
      high: 250000,
      frequency: "única",
      note: "Depende de la valuación del vehículo según tabla del Registro.",
      sourceType: "oficial",
      isEstimate: true,
    },
    {
      name: "Verificación policial (cuando corresponde)",
      low: 15000,
      medium: 30000,
      high: 60000,
      frequency: "única",
      note: "Obligatoria en muchas jurisdicciones para usados.",
      sourceType: "oficial",
      isEstimate: true,
    },
    {
      name: "Informe de dominio histórico",
      low: 8000,
      medium: 15000,
      high: 25000,
      frequency: "única",
      note: "Recomendado para verificar deudas, embargos e historial.",
      sourceType: "oficial",
      isEstimate: true,
    },
    {
      name: "Certificación de firmas",
      low: 10000,
      medium: 25000,
      high: 60000,
      frequency: "única",
      note: "Suele exigirse cuando el comprador o vendedor no firma presencialmente.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Gestoría (opcional)",
      low: 0,
      medium: 80000,
      high: 200000,
      frequency: "única",
      note: "Si gestionás vos mismo es 0. Conviene si no podés perder días hábiles.",
      sourceType: "mercado",
      isEstimate: true,
    },
  ],
  sections: [
    {
      heading: "Qué incluye la transferencia de un auto",
      paragraphs: [
        "La transferencia es el trámite por el que el auto pasa legalmente a nombre del comprador. Se hace en un Registro Seccional del DNRPA y combina aranceles oficiales con costos privados (verificación, gestoría, certificaciones).",
        "El monto principal lo determina el arancel del Registro Automotor, que depende de la valuación fiscal del vehículo. Por eso un auto más caro tiene una transferencia más cara, incluso si los trámites son los mismos.",
      ],
    },
    {
      heading: "Cuánto sale: desglose típico",
      paragraphs: [
        "Para un auto usado de gama media (entre ARS 8 y 18 millones), los costos típicos rondan estos valores. Son orientativos: la tabla oficial de aranceles se actualiza varias veces al año.",
      ],
      table: {
        caption: "Desglose estimativo de costos de transferencia (ARS).",
        headers: ["Concepto", "Mínimo", "Promedio", "Máximo"],
        rows: [
          ["Aranceles DNRPA", "ARS 60.000", "ARS 120.000", "ARS 250.000"],
          ["Verificación policial", "ARS 15.000", "ARS 30.000", "ARS 60.000"],
          ["Informe de dominio", "ARS 8.000", "ARS 15.000", "ARS 25.000"],
          ["Certificación de firmas", "ARS 10.000", "ARS 25.000", "ARS 60.000"],
          ["Gestoría (opcional)", "ARS 0", "ARS 80.000", "ARS 200.000"],
          ["Total estimado", "ARS 93.000", "ARS 270.000", "ARS 595.000"],
        ],
      },
    },
    {
      heading: "Factores que modifican el costo",
      bullets: [
        "Valuación fiscal del vehículo: define el arancel principal del Registro.",
        "Jurisdicción del Registro Seccional: hay diferencias por provincia.",
        "Si hacés el trámite con gestoría o por tu cuenta.",
        "Si firma una sola parte y se necesita certificación notarial.",
        "Si el auto tiene deudas, multas o embargos pendientes.",
        "Si se actualizaron los aranceles oficiales recientemente.",
      ],
    },
    {
      heading: "Cómo evitar sorpresas en la transferencia",
      bullets: [
        "Pedí siempre un informe de dominio antes de firmar.",
        "Verificá que no haya deudas de patente ni infracciones impagas.",
        "Confirmá que la verificación policial esté vigente.",
        "Llevá DNI original y libre deuda de infracciones cuando corresponda.",
        "Si pagás con transferencia, dejá constancia clara del precio acordado.",
      ],
    },
    {
      heading: "Quién paga la transferencia",
      paragraphs: [
        "Por costumbre y por la mayoría de los contratos tipo, la transferencia la paga el comprador. Sin embargo, esto se puede acordar diferente entre las partes. Aclará siempre por escrito quién asume cada gasto antes de seña.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Quién paga la transferencia, el comprador o el vendedor?",
      answer:
        "Por costumbre la paga el comprador, pero las partes pueden acordar otra cosa. Conviene dejar el acuerdo por escrito antes de la seña para evitar discusiones.",
    },
    {
      question: "¿Es obligatoria la verificación policial?",
      answer:
        "En la mayoría de las jurisdicciones sí, especialmente para vehículos usados. Verificá con el Registro Seccional o el sitio oficial de la DNRPA cuál aplica en tu caso.",
    },
    {
      question: "¿Puedo hacer la transferencia sin gestoría?",
      answer:
        "Sí. Podés gestionar el trámite vos mismo presentándote en el Registro Seccional. Ahorrás los honorarios pero implica tiempo y, según la zona, esperas largas.",
    },
    {
      question: "¿Cuánto tarda la transferencia?",
      answer:
        "El trámite presencial suele resolverse el mismo día si la documentación está completa. La cédula azul y el título nuevo pueden tardar entre 7 y 30 días en llegar.",
    },
  ],
  sources: [
    {
      name: "DNRPA — Dirección Nacional de los Registros Nacionales de la Propiedad del Automotor",
      type: "oficial",
      checkedAt: "2026-05-13",
      url: "https://www.argentina.gob.ar/justicia/registrosnacionales",
      note: "Sitio oficial para aranceles, formularios y trámites.",
    },
    {
      name: "Tabla pública de aranceles del Registro Automotor",
      type: "oficial",
      checkedAt: "2026-05-13",
      note: "Los aranceles se actualizan periódicamente. Verificá la tabla vigente.",
    },
  ],
  methodologyNotes: [
    "Tomamos como referencia un auto usado de gama media valuado entre ARS 8 y 18 millones.",
    "Los aranceles se ajustan varias veces al año, por lo que el valor exacto cambia.",
    "Algunos rubros (verificación, certificación) varían fuerte por provincia.",
  ],
  extraDisclaimer:
    "Los aranceles oficiales se actualizan con frecuencia. Antes de iniciar el trámite verificá los valores y formularios vigentes en la página oficial de la DNRPA y en el Registro Seccional donde harás la transferencia.",
  relatedArticles: [
    {
      slug: "cuanto-cuesta-la-vtv-en-argentina",
      title: "Cuánto cuesta la VTV",
      category: "autos",
    },
    {
      slug: "cuanto-cuesta-mantener-un-auto-en-argentina",
      title: "Cuánto cuesta mantener un auto",
      category: "autos",
    },
    {
      slug: "cuanto-cuesta-el-seguro-de-auto-en-argentina",
      title: "Cuánto cuesta el seguro de auto",
      category: "autos",
    },
  ],
};
