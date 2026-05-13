import type { Article } from "@/types/article";

export const serviceAuto: Article = {
  slug: "cuanto-cuesta-un-service-de-auto-en-argentina",
  category: "autos",
  title: "Cuánto cuesta un service de auto en Argentina",
  seoTitle: "Cuánto cuesta un service de auto en Argentina",
  description:
    "Service básico, mayor y por kilometraje en Argentina. Precios de mano de obra, aceite, filtros y diferencias entre service oficial y taller independiente.",
  keyword: "cuánto cuesta un service de auto en argentina",
  lastUpdated: "2026-05-13",
  estimatedRange:
    "Un service básico cuesta, en promedio, entre ARS 90.000 y ARS 250.000. Un service mayor (correas, distribución, embrague) puede ir de ARS 350.000 a más de ARS 1.200.000.",
  quickAnswer:
    "Un service básico de auto (cambio de aceite, filtros y revisión) cuesta, en promedio, entre ARS 90.000 y ARS 250.000 en taller independiente, y hasta un 30–60% más en concesionario oficial. Un service mayor con correas o distribución sube fácilmente a ARS 350.000–1.200.000 según el modelo. El precio depende de la marca, los repuestos y la mano de obra de la zona.",
  costItems: [
    {
      name: "Service básico (aceite + filtros + revisión)",
      low: 90000,
      medium: 150000,
      high: 250000,
      frequency: "cada service",
      note: "Cada 10.000–15.000 km o 1 año aproximadamente.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Service oficial (concesionario)",
      low: 150000,
      medium: 280000,
      high: 500000,
      frequency: "cada service",
      note: "Más caro pero conserva garantía y trazabilidad.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Cambio de correa de distribución",
      low: 250000,
      medium: 450000,
      high: 900000,
      frequency: "cada service",
      note: "Suele recomendarse cada 60.000–100.000 km. Repuestos clave.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Cambio de embrague",
      low: 350000,
      medium: 650000,
      high: 1200000,
      frequency: "cada service",
      note: "Depende de la durabilidad del original y el uso urbano.",
      sourceType: "mercado",
      isEstimate: true,
    },
    {
      name: "Mano de obra por hora",
      low: 15000,
      medium: 25000,
      high: 40000,
      frequency: "por evento",
      note: "Concesionarios oficiales suelen estar arriba; el interior, abajo.",
      sourceType: "mercado",
      isEstimate: true,
    },
  ],
  sections: [
    {
      heading: "Qué incluye un service básico",
      paragraphs: [
        "El service básico es la atención periódica que mantiene el auto en condiciones. Incluye cambio de aceite, filtro de aceite, filtro de aire, revisión de niveles, frenos, suspensión, luces y un control general.",
        "La regla general es hacerlo cada 10.000–15.000 km, o una vez al año si manejás poco. Saltearlo suele terminar en reparaciones más caras a mediano plazo.",
      ],
    },
    {
      heading: "Service básico vs service mayor",
      table: {
        caption: "Tipos de service y precio estimado (ARS).",
        headers: ["Tipo de service", "Incluye", "Costo estimado"],
        rows: [
          ["Básico", "Aceite, filtros, revisión general", "ARS 90.000 – 250.000"],
          ["Intermedio", "Suma bujías, líquido de frenos, refrigerante", "ARS 180.000 – 400.000"],
          ["Mayor", "Distribución, embrague, accesorios mayores", "ARS 350.000 – 1.200.000"],
        ],
      },
    },
    {
      heading: "Service oficial vs taller independiente",
      paragraphs: [
        "El concesionario oficial es más caro pero usa repuestos originales, mantiene la garantía de fábrica y queda asentado en el historial del auto. Para autos nuevos en garantía suele ser la mejor opción.",
        "Un taller independiente de confianza puede ser 30–60% más barato. Es buena opción para autos fuera de garantía o con varios años de uso, siempre que uses repuestos de calidad y mecánico recomendado.",
      ],
    },
    {
      heading: "Service por kilometraje",
      bullets: [
        "10.000 km: aceite y filtro de aceite.",
        "20.000 km: + filtro de aire.",
        "30.000 km: + filtro de combustible y revisión de frenos.",
        "60.000 km: + bujías, líquido de frenos, refrigerante.",
        "100.000 km: + correa de distribución y accesorios (según fabricante).",
      ],
    },
    {
      heading: "Consejos para ahorrar sin comprometer seguridad",
      bullets: [
        "Llevá registro de cada service: fecha, km y repuestos usados.",
        "No estires el cambio de aceite por encima del intervalo recomendado.",
        "Pedí presupuesto por escrito antes de aceptar tareas extra.",
        "Si el taller no es oficial, exigí repuestos de calidad reconocida.",
        "Hacé service preventivo: cambiar a tiempo evita roturas mucho más caras.",
        "Compará precios en talleres recomendados de tu zona.",
      ],
    },
    {
      heading: "Errores comunes que encarecen el service",
      bullets: [
        "Atrasar el cambio de aceite hasta que aparece un ruido.",
        "Ignorar testigos del tablero por meses.",
        "No revisar frenos hasta sentirlos duros o ruidosos.",
        "Usar repuestos muy baratos en piezas críticas (frenos, suspensión).",
        "Hacer service en lugares sin recomendación ni historial verificable.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cada cuánto conviene hacer service?",
      answer:
        "La recomendación general es cada 10.000–15.000 km o cada 12 meses, lo que ocurra primero. Si manejás poco igual conviene hacer el service anual porque el aceite y los líquidos se degradan con el tiempo.",
    },
    {
      question: "¿El service oficial es siempre mejor?",
      answer:
        "Es mejor mientras tengas garantía o quieras mantener historial completo del auto. Para autos viejos o fuera de garantía, un taller de confianza puede dar igual de buen servicio a menor costo.",
    },
    {
      question: "¿Cuánto sale el cambio de aceite solo?",
      answer:
        "Para un auto chico-mediano, el cambio de aceite y filtro de aceite en taller independiente suele costar entre ARS 70.000 y ARS 150.000 según marca de aceite, calidad y zona.",
    },
    {
      question: "¿Cómo sé si un presupuesto es razonable?",
      answer:
        "Pedí desglose entre repuestos y mano de obra. Compará al menos 2 presupuestos. Si una tarea sale más del doble que la media de tu zona, vale la pena preguntar por qué.",
    },
  ],
  sources: [
    {
      name: "Relevamiento propio en talleres y concesionarios oficiales",
      type: "mercado",
      checkedAt: "2026-05-13",
      note: "Promedios de listas y presupuestos para autos chicos y medianos.",
    },
    {
      name: "Manuales de mantenimiento de fabricantes",
      type: "oficial",
      checkedAt: "2026-05-13",
      note: "Para los intervalos sugeridos por kilometraje.",
    },
  ],
  methodologyNotes: [
    "Los rangos asumen autos chicos y medianos con motorización naftera estándar.",
    "Las marcas premium y diesel modernos pueden tener costos más altos.",
    "Los precios incluyen mano de obra estándar de taller en grandes centros urbanos.",
  ],
  relatedArticles: [
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
    {
      slug: "cuanto-cuesta-la-vtv-en-argentina",
      title: "Cuánto cuesta la VTV",
      category: "autos",
    },
  ],
};
