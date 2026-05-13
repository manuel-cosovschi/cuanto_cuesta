import type { Article } from "@/types/article";

export const seguroAuto: Article = {
  slug: "cuanto-cuesta-el-seguro-de-auto-en-argentina",
  category: "autos",
  title: "Cuánto cuesta el seguro de auto en Argentina",
  seoTitle: "Cuánto cuesta el seguro de auto en Argentina",
  description:
    "Precios estimados de responsabilidad civil, terceros completo y todo riesgo en Argentina. Factores que modifican el costo y cómo bajar la cuota sin perder cobertura.",
  keyword: "cuánto cuesta el seguro de auto en argentina",
  lastUpdated: "2026-05-13",
  estimatedRange:
    "El seguro de auto en Argentina cuesta, en promedio, entre ARS 25.000 y ARS 180.000 por mes según la cobertura, el modelo y el perfil del conductor.",
  quickAnswer:
    "El seguro de auto en Argentina cuesta, en promedio, entre ARS 25.000 y ARS 180.000 por mes. La responsabilidad civil (RC) básica arranca en el rango más bajo; terceros completo se ubica en valores medios; y el todo riesgo es el más caro. El precio depende del modelo, año, zona, uso, perfil del conductor y franquicia.",
  costItems: [
    {
      name: "Responsabilidad civil (RC) básica",
      low: 25000,
      medium: 35000,
      high: 55000,
      frequency: "mensual",
      note: "Solo cubre daños a terceros. Es el mínimo legal.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Terceros completo",
      low: 45000,
      medium: 70000,
      high: 110000,
      frequency: "mensual",
      note: "Suma robo total, incendio y cristales/granizo según póliza.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Todo riesgo con franquicia",
      low: 80000,
      medium: 120000,
      high: 180000,
      frequency: "mensual",
      note: "Cubre daños propios; la franquicia define qué pagás vos en cada siniestro.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Adicional GNC",
      low: 2500,
      medium: 5000,
      high: 10000,
      frequency: "mensual",
      note: "Si tu auto tiene equipo de GNC, suele cobrarse aparte.",
      sourceType: "mercado",
      isEstimate: true,
    },
  ],
  sections: [
    {
      heading: "Tipos de cobertura: qué incluye cada una",
      paragraphs: [
        "El precio del seguro depende, antes que nada, del tipo de cobertura. La diferencia entre RC básica y todo riesgo puede ser de 3 a 5 veces. Por eso es clave elegir bien antes de comparar precios.",
      ],
      bullets: [
        "Responsabilidad civil (RC): cubre daños que vos le causes a terceros. Es el mínimo legal pero no cubre tu auto.",
        "Terceros completo: agrega robo total, incendio, y muchas veces cristales y granizo.",
        "Todo riesgo con franquicia: cubre también tus propios daños, con un monto fijo a tu cargo por siniestro.",
        "Todo riesgo sin franquicia: cobertura máxima, también la prima más alta.",
      ],
    },
    {
      heading: "Cuánto cuesta cada cobertura",
      table: {
        caption: "Precio mensual estimado por cobertura para un auto mediano (ARS).",
        headers: ["Cobertura", "Mínimo", "Promedio", "Máximo"],
        rows: [
          ["RC básica", "ARS 25.000", "ARS 35.000", "ARS 55.000"],
          ["Terceros completo", "ARS 45.000", "ARS 70.000", "ARS 110.000"],
          ["Todo riesgo (con franquicia)", "ARS 80.000", "ARS 120.000", "ARS 180.000"],
        ],
      },
    },
    {
      heading: "Factores que modifican el precio",
      bullets: [
        "Modelo y año: los más buscados por el robo suelen tener cotizaciones más altas.",
        "Zona donde guardás el auto: CABA y GBA tienden a ser más caras que ciudades del interior.",
        "Uso: particular vs comercial. Apps como Uber o Cabify requieren póliza específica.",
        "Edad y antigüedad de licencia del conductor habitual.",
        "Historial de siniestros (recargo si tuviste varios).",
        "Si guardás en cochera o en la calle.",
        "Franquicia elegida en todo riesgo: a mayor franquicia, menor cuota.",
      ],
    },
    {
      heading: "Cómo bajar el costo sin perder cobertura",
      bullets: [
        "Pedí cotizaciones a por lo menos 3 aseguradoras. Las diferencias son grandes.",
        "Pagá anual o semestral si te dan descuento por adelantado.",
        "Sumá medidas antirrobo homologadas que la aseguradora reconozca.",
        "Indicá cochera fija si efectivamente la usás.",
        "Revisá la franquicia: a veces conviene subirla un escalón para bajar la cuota.",
        "Releí la póliza una vez por año: el contexto cambia y la cobertura debería ajustarse.",
      ],
    },
    {
      heading: "Errores comunes al contratar seguro",
      bullets: [
        "Mirar solo el precio sin comparar coberturas.",
        "Olvidarse de declarar GNC, modificaciones o uso laboral.",
        "Subestimar la franquicia (puede ser muy alta).",
        "No revisar la red de talleres y los plazos de gestión.",
        "Renovar a ciegas sin recotizar.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es la cobertura mínima obligatoria?",
      answer:
        "La responsabilidad civil (RC) es la cobertura mínima exigida por ley para circular en Argentina. Cubre daños a terceros pero no a tu auto.",
    },
    {
      question: "¿Conviene siempre el todo riesgo?",
      answer:
        "No siempre. Conviene en autos nuevos o caros, cuando el valor del vehículo justifica una prima alta. En autos más viejos, terceros completo suele dar mejor relación costo-beneficio.",
    },
    {
      question: "¿Qué es la franquicia?",
      answer:
        "Es el monto que pagás vos en cada siniestro antes de que la aseguradora cubra el resto. Una franquicia más alta baja la cuota pero te expone más en caso de daño.",
    },
    {
      question: "¿Cuánto puedo ahorrar comparando aseguradoras?",
      answer:
        "Es común encontrar diferencias del 20% al 40% entre cotizaciones para la misma cobertura y el mismo perfil. Recotizar al renovar suele ser uno de los ahorros más fáciles.",
    },
  ],
  sources: [
    {
      name: "Cotizaciones online de aseguradoras locales",
      type: "mercado",
      checkedAt: "2026-05-13",
      note: "Relevamiento manual sobre perfiles tipo en aseguradoras con presencia nacional.",
    },
    {
      name: "Superintendencia de Seguros de la Nación",
      type: "oficial",
      checkedAt: "2026-05-13",
      note: "Información oficial sobre coberturas, regulación y aseguradoras autorizadas.",
    },
  ],
  methodologyNotes: [
    "Los precios se relevan en cotizadores online para perfiles tipo: auto mediano, conductor de 35–45 años, sin siniestros, CABA o GBA.",
    "Los valores cambian semana a semana por inflación y por política comercial de cada aseguradora.",
  ],
  extraDisclaimer:
    "Los precios de seguro varían fuerte por cotizador y perfil. Para un valor real, pedí cotizaciones directas con tus datos. Este artículo no es un comparador de pólizas ni reemplaza el asesoramiento de un productor matriculado.",
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
      slug: "cuanto-cuesta-la-vtv-en-argentina",
      title: "Cuánto cuesta la VTV",
      category: "autos",
    },
  ],
};
