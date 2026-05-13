import type { Article } from "@/types/article";

export const vtvAuto: Article = {
  slug: "cuanto-cuesta-la-vtv-en-argentina",
  category: "autos",
  title: "Cuánto cuesta la VTV en Argentina",
  seoTitle: "Cuánto cuesta la VTV en Argentina",
  description:
    "Precio estimado de la VTV (Verificación Técnica Vehicular) en Argentina, diferencias por provincia, frecuencia y qué pasa si circulás sin VTV vigente.",
  keyword: "cuánto cuesta la vtv en argentina",
  lastUpdated: "2026-05-13",
  estimatedRange:
    "Una VTV de auto particular cuesta, según jurisdicción, entre ARS 25.000 y ARS 90.000. Las motos suelen ser más baratas y las pickups más caras.",
  quickAnswer:
    "Una VTV para auto particular en Argentina cuesta, según la jurisdicción, entre ARS 25.000 y ARS 90.000 aproximadamente. La VTV no se paga todos los meses: la frecuencia depende de la antigüedad del vehículo (cada 1 a 2 años en la mayoría de los casos). El precio se actualiza con regularidad y cambia entre Provincia de Buenos Aires, CABA y otras jurisdicciones.",
  costItems: [
    {
      name: "VTV auto particular",
      low: 25000,
      medium: 50000,
      high: 90000,
      frequency: "anual",
      note: "Provincia de Buenos Aires y CABA tienen tarifas distintas.",
      sourceType: "oficial",
      isEstimate: true,
    },
    {
      name: "VTV moto",
      low: 12000,
      medium: 22000,
      high: 40000,
      frequency: "anual",
      note: "Tarifas menores que para autos en la mayoría de las provincias.",
      sourceType: "oficial",
      isEstimate: true,
    },
    {
      name: "VTV pickup / utilitario liviano",
      low: 35000,
      medium: 65000,
      high: 110000,
      frequency: "anual",
      note: "Tarifa más alta por peso y tipo de uso.",
      sourceType: "oficial",
      isEstimate: true,
    },
    {
      name: "Reverificación tras rechazo",
      low: 5000,
      medium: 15000,
      high: 30000,
      frequency: "por evento",
      note: "Si te rechazan, podés volver a verificar a un valor reducido.",
      sourceType: "oficial",
      isEstimate: true,
    },
  ],
  sections: [
    {
      heading: "Qué es la VTV y por qué es obligatoria",
      paragraphs: [
        "La Verificación Técnica Vehicular (VTV) es un control obligatorio del estado mecánico, ambiental y de seguridad de un vehículo. Verifica frenos, luces, suspensión, emisiones, dirección, cinturones y otros puntos críticos.",
        "El objetivo es reducir siniestros viales y emisiones contaminantes. Por eso es obligatoria en la mayoría de las jurisdicciones para circular legalmente.",
      ],
    },
    {
      heading: "Cuánto sale por jurisdicción",
      paragraphs: [
        "La VTV no tiene un precio único nacional. Cada provincia define la tarifa y la frecuencia. Estos son rangos estimativos a la fecha de actualización del artículo.",
      ],
      table: {
        caption: "VTV estimativa por jurisdicción para auto particular (ARS).",
        headers: ["Jurisdicción", "Auto particular", "Frecuencia típica"],
        rows: [
          ["Provincia de Buenos Aires", "ARS 35.000 – 70.000", "Anual o bienal según antigüedad"],
          ["Ciudad de Buenos Aires (CABA)", "ARS 40.000 – 80.000", "Anual o bienal según antigüedad"],
          ["Córdoba (RTO)", "ARS 25.000 – 60.000", "Anual"],
          ["Santa Fe", "ARS 30.000 – 65.000", "Anual"],
          ["Mendoza", "ARS 28.000 – 60.000", "Anual"],
        ],
      },
    },
    {
      heading: "Frecuencia: cada cuánto se hace",
      bullets: [
        "Autos 0 km: el primer control suele ser a los 3 años (varía por jurisdicción).",
        "Autos hasta 10 años: en general una vez por año o cada 2 años.",
        "Autos de más de 10 años: en general una vez por año.",
        "Vehículos comerciales y de servicio: con más frecuencia (semestral en muchos casos).",
      ],
    },
    {
      heading: "Qué pasa si circulás sin VTV",
      paragraphs: [
        "Circular sin VTV vigente es una infracción de tránsito. Las multas varían por jurisdicción y suelen actualizarse con el valor de la Unidad Fija. Además, podés tener problemas en controles, peajes, seguros y al transferir el auto.",
        "En la práctica, manejar sin VTV puede salir mucho más caro que hacerla a tiempo.",
      ],
    },
    {
      heading: "Cómo prepararte para que no te rechacen",
      bullets: [
        "Revisá luces, balizas y giros antes de ir.",
        "Controlá nivel de líquidos y estado de neumáticos.",
        "Llevá cinturones, balizas reglamentarias, matafuegos vigente y rueda de auxilio.",
        "Asegurate de tener la cédula, póliza y patente legibles.",
        "Si tenés dudas con frenos o emisiones, hacé service previo.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿La VTV es la misma en todo el país?",
      answer:
        "No. Cada jurisdicción define la tarifa, frecuencia y operador habilitado. Provincia de Buenos Aires y CABA tienen sistemas distintos, igual que Córdoba con la RTO o Santa Fe con su propio régimen.",
    },
    {
      question: "¿Cuánto dura la VTV?",
      answer:
        "Depende de la antigüedad del vehículo. En general, autos relativamente nuevos verifican cada 2 años y autos más viejos cada año. La oblea indica la fecha de vencimiento.",
    },
    {
      question: "¿Qué pasa si me rechazan la VTV?",
      answer:
        "Recibís un informe con las fallas detectadas y un plazo para corregirlas. Cuando volvés, podés acceder a una reverificación a un costo menor que la VTV completa.",
    },
    {
      question: "¿La multa por no tener VTV es muy alta?",
      answer:
        "Sí, suele ser bastante más cara que la propia VTV. Además, podés tener problemas en peajes, controles y al renovar la licencia o transferir el auto.",
    },
  ],
  sources: [
    {
      name: "Sitios oficiales de cada jurisdicción (VTV PBA, VTV CABA, RTO Córdoba, etc.)",
      type: "oficial",
      checkedAt: "2026-05-13",
      note: "Las tarifas y frecuencias se publican oficialmente en cada operador habilitado.",
    },
  ],
  methodologyNotes: [
    "Los rangos cruzan tarifarios públicos de operadores habilitados de las principales jurisdicciones.",
    "No publicamos un precio único porque la VTV se define por jurisdicción.",
  ],
  extraDisclaimer:
    "La VTV se rige por normativa provincial y de CABA, y sus tarifas se actualizan con frecuencia. Antes de turnarte verificá el valor vigente en el sitio oficial de la jurisdicción donde está radicado tu vehículo.",
  relatedArticles: [
    {
      slug: "cuanto-cuesta-mantener-un-auto-en-argentina",
      title: "Cuánto cuesta mantener un auto",
      category: "autos",
    },
    {
      slug: "cuanto-cuesta-un-service-de-auto-en-argentina",
      title: "Cuánto cuesta un service",
      category: "autos",
    },
    {
      slug: "cuanto-cuesta-transferir-un-auto-en-argentina",
      title: "Cuánto cuesta transferir un auto",
      category: "autos",
    },
  ],
};
