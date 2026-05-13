import type { Article } from "@/types/article";

export const mantenerUnAuto: Article = {
  slug: "cuanto-cuesta-mantener-un-auto-en-argentina",
  category: "autos",
  title: "Cuánto cuesta mantener un auto en Argentina",
  seoTitle: "Cuánto cuesta mantener un auto en Argentina",
  description:
    "Conocé cuánto cuesta mantener un auto en Argentina: seguro, patente, combustible, cochera, VTV, service y gastos ocultos. Incluye tabla resumen y calculadora.",
  keyword: "cuánto cuesta mantener un auto en argentina",
  lastUpdated: "2026-05-13",
  estimatedRange:
    "Mantener un auto chico-mediano en Argentina cuesta, en promedio, entre ARS 300.000 y ARS 700.000 por mes según uso, zona y tipo de seguro.",
  quickAnswer:
    "Mantener un auto en Argentina cuesta, en promedio, entre ARS 300.000 y ARS 700.000 por mes para un auto chico o mediano con uso urbano moderado. El gasto depende sobre todo del seguro, la cochera, los kilómetros recorridos y el precio del combustible. Cargar 200 litros por mes ya representa alrededor de la mitad del costo total.",
  costItems: [
    {
      name: "Seguro (terceros completo)",
      low: 35000,
      medium: 60000,
      high: 110000,
      frequency: "mensual",
      note: "Varía por zona, modelo, año y perfil del conductor.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Patente / impuesto automotor",
      low: 8000,
      medium: 18000,
      high: 50000,
      frequency: "mensual",
      note: "Prorrateo mensual. Depende de jurisdicción y valuación.",
      sourceType: "estimado",
      isEstimate: true,
    },
    {
      name: "Combustible",
      low: 80000,
      medium: 160000,
      high: 280000,
      frequency: "mensual",
      note: "Considera 600–1.500 km/mes con consumo de 7–10 L/100 km.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Cochera",
      low: 0,
      medium: 60000,
      high: 140000,
      frequency: "mensual",
      note: "0 si guardás en la calle. En CABA y centros urbanos suele ser más alta.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Service (prorrateado)",
      low: 8000,
      medium: 20000,
      high: 45000,
      frequency: "mensual",
      note: "Equivale a un service anual de ~ARS 100.000–500.000 dividido en 12.",
      sourceType: "estimado",
      isEstimate: true,
    },
    {
      name: "VTV (prorrateada)",
      low: 1500,
      medium: 3500,
      high: 7000,
      frequency: "mensual",
      note: "Tarifa anual o semestral según jurisdicción dividida en 12.",
      sourceType: "estimado",
      isEstimate: true,
    },
    {
      name: "Lavado",
      low: 0,
      medium: 12000,
      high: 30000,
      frequency: "mensual",
      note: "Entre 1 y 3 lavados por mes; menos si lavás en casa.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Cubiertas (prorrateadas)",
      low: 5000,
      medium: 15000,
      high: 35000,
      frequency: "mensual",
      note: "Un juego cada 40.000–60.000 km dividido en meses de uso.",
      sourceType: "estimado",
      isEstimate: true,
    },
    {
      name: "Reparaciones e imprevistos",
      low: 5000,
      medium: 20000,
      high: 60000,
      frequency: "mensual",
      note: "Reserva para imprevistos: batería, suspensión, electrónica, etc.",
      sourceType: "estimado",
      isEstimate: true,
    },
  ],
  sections: [
    {
      heading: "Qué incluye realmente mantener un auto",
      paragraphs: [
        "Cuando hablamos de mantener un auto en Argentina no alcanza con sumar el combustible. Hay gastos fijos como seguro, patente y cochera, y gastos variables como service, VTV, cubiertas, lavados y reparaciones. La mayoría de los conductores subestima los gastos variables porque no aparecen todos los meses.",
        "Para tener una idea realista conviene pensar en costo total anual y después dividirlo por 12. Así, un service que cuesta ARS 250.000 una vez al año pesa ARS 20.833 por mes, aunque no lo pagues en ese momento.",
      ],
    },
    {
      heading: "Costo mensual estimado por tipo de auto",
      paragraphs: [
        "El tipo de auto cambia mucho el costo. Un auto chico (Fiat Cronos, Renault Kwid, Toyota Yaris) tiene menor consumo, seguro más barato y service más económico. Un mediano (Corolla, Cruze, 308) sube en seguro, patente y service. Una SUV o pickup (Toro, Amarok, Tracker) tiene patente más alta, mayor consumo y service más caro.",
      ],
      table: {
        caption:
          "Costo mensual estimado por tipo de auto con uso urbano moderado (1.000 km/mes). Valores en ARS.",
        headers: ["Tipo de auto", "Costo mensual bajo", "Costo mensual medio", "Costo mensual alto"],
        rows: [
          ["Auto chico", "ARS 250.000", "ARS 380.000", "ARS 550.000"],
          ["Auto mediano", "ARS 320.000", "ARS 480.000", "ARS 700.000"],
          ["SUV / pickup", "ARS 420.000", "ARS 650.000", "ARS 950.000"],
        ],
      },
    },
    {
      heading: "Cómo calcular tu costo por kilómetro",
      paragraphs: [
        "El costo por kilómetro te ayuda a comparar viajes propios contra alquiler, taxi o transporte público. Se calcula sumando los gastos totales del mes (fijos y variables) y dividiéndolos por los kilómetros recorridos.",
        "Para un auto mediano con gasto mensual de ARS 480.000 y 1.000 km recorridos, el costo por kilómetro es de ARS 480. Si manejás 2.000 km/mes, el costo por km baja a ARS 240 porque diluís los gastos fijos.",
      ],
    },
    {
      heading: "Auto chico vs mediano vs SUV: dónde gastás más",
      paragraphs: [
        "En autos chicos el gasto principal suele ser el combustible y el seguro. En medianos, el seguro y la patente toman más peso. En SUV/pickup la patente puede duplicarse o triplicarse respecto de un auto chico y el consumo sube fuerte. El service oficial también es más caro.",
      ],
      bullets: [
        "Combustible: pesa más mientras más km hagas. Es la variable más fácil de controlar.",
        "Seguro: depende mucho del modelo, zona y cobertura. Comparar 3 aseguradoras suele ahorrar 20–40%.",
        "Patente: la pagás aunque no uses el auto. Mudar la radicación puede cambiar el valor.",
        "Service oficial vs taller: la diferencia puede ser de 30–60% según marca.",
      ],
    },
    {
      heading: "Consejos para ahorrar sin comprometer seguridad",
      bullets: [
        "Compará al menos 3 cotizaciones de seguro una vez por año.",
        "Hacé service preventivo: cambiar aceite a tiempo evita reparaciones más caras.",
        "Mantené presión correcta de cubiertas: mejora consumo y vida útil.",
        "Evitá viajes cortos y arranques en frío repetidos: castigan el motor y el bolsillo.",
        "Si usás el auto menos de 500 km/mes, evaluá si la cochera o algún gasto fijo se justifica.",
        "Llevá registro mensual de gastos para detectar desvíos.",
      ],
    },
    {
      heading: "Errores comunes al estimar el costo",
      bullets: [
        "Sumar solo combustible y seguro, olvidando patente y service.",
        "No prorratear gastos anuales (service, VTV, cubiertas).",
        "No considerar reparaciones eventuales.",
        "Comparar precios sin contemplar la cobertura del seguro.",
        "Olvidar que el costo sube con la inflación durante el año.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto sale por mes tener un auto en Argentina en 2026?",
      answer:
        "Para un auto chico o mediano con uso urbano moderado, el costo mensual estimado va de ARS 300.000 a ARS 700.000. La cifra exacta depende del seguro contratado, kilómetros recorridos, jurisdicción de la patente y si tenés cochera paga.",
    },
    {
      question: "¿El seguro o el combustible: qué pesa más?",
      answer:
        "Depende de cuánto uses el auto. Si manejás menos de 500 km/mes, el seguro suele ser el gasto principal. Si manejás más de 1.500 km/mes, el combustible pasa a ser el costo más alto.",
    },
    {
      question: "¿Conviene tener auto si uso menos de 500 km al mes?",
      answer:
        "Hay que comparar. Sumá todos los gastos mensuales (incluso los prorrateados) y dividilos por los km. Si el costo por km supera lo que pagarías en taxi, viajes en aplicaciones o alquiler ocasional, podría no convenir económicamente. Igualmente, el auto suma comodidad y disponibilidad que no siempre se mide en plata.",
    },
    {
      question: "¿Cómo prorrateo el service o las cubiertas?",
      answer:
        "Sumá el costo total estimado anual y dividilo por 12. Por ejemplo, un service de ARS 240.000 equivale a ARS 20.000 por mes, aunque no lo pagues mensualmente.",
    },
  ],
  sources: [
    {
      name: "ACA — Costo Operativo del Automóvil (referencia metodológica)",
      type: "oficial",
      checkedAt: "2026-05-13",
      note: "Referencia metodológica pública del Automóvil Club Argentino sobre estructura de costos.",
    },
    {
      name: "Relevamiento propio de cotizaciones de seguros en Argentina",
      type: "mercado",
      checkedAt: "2026-05-13",
      note: "Cotizaciones online de aseguradoras locales para perfiles tipo. Solo referencia.",
    },
    {
      name: "Surtidores YPF/Axion/Shell — precios públicos en grandes centros urbanos",
      type: "mercado",
      checkedAt: "2026-05-13",
      note: "Precios públicos en surtidores; varían por provincia y semana.",
    },
  ],
  methodologyNotes: [
    "Los rangos surgen de cotizaciones públicas, surtidores, tarifarios de gestoría y promedios de talleres relevados manualmente.",
    "Los valores se prorratean a mes para comparar más fácil. Esto no significa que se paguen mensualmente.",
    "El rango medio asume un auto mediano, uso urbano de 1.000 km/mes y seguro de terceros completo.",
  ],
  relatedArticles: [
    {
      slug: "cuanto-cuesta-el-seguro-de-auto-en-argentina",
      title: "Cuánto cuesta el seguro de auto",
      category: "autos",
    },
    {
      slug: "cuanto-cuesta-un-service-de-auto-en-argentina",
      title: "Cuánto cuesta un service",
      category: "autos",
    },
    {
      slug: "cuanto-cuesta-la-vtv-en-argentina",
      title: "Cuánto cuesta la VTV",
      category: "autos",
    },
  ],
  relatedCalculatorSlug: "costo-mensual-auto",
};
