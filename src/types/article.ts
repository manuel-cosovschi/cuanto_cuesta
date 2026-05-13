import type { CostItem, PriceSource } from "./pricing";

export type CategorySlug =
  | "autos"
  | "vivienda"
  | "vida-diaria"
  | "construccion"
  | "viajes"
  | "mascotas"
  | "tramites"
  | "tecnologia"
  | "fitness"
  | "estudios"
  | "negocios";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Texto corto para cards de home/menú. */
  shortDescription: string;
  /** Indica si la categoría ya tiene contenido publicado. */
  available: boolean;
  /** Ícono representado como emoji simple (mejor performance que SVG inline). */
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ArticleSection {
  /** Encabezado H2 de la sección. */
  heading: string;
  /** Slug para anclas (#). */
  id?: string;
  /** Párrafos plain-text. */
  paragraphs?: string[];
  /** Listas con viñetas. */
  bullets?: string[];
  /** Tabla opcional embebida en la sección. */
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
}

export interface RelatedArticleRef {
  slug: string;
  title: string;
  category: CategorySlug;
}

export interface Article {
  /** Slug sin la categoría. */
  slug: string;
  /** Categoría a la que pertenece. */
  category: CategorySlug;
  /** Title visible (H1). */
  title: string;
  /** Title para metadata SEO. */
  seoTitle: string;
  /** Meta description. */
  description: string;
  /** Keyword principal de búsqueda. */
  keyword: string;
  /** ISO date yyyy-mm-dd. */
  lastUpdated: string;
  /** Respuesta rápida visible arriba del artículo. */
  quickAnswer: string;
  /** Rango estimado de costo total resumido (texto). */
  estimatedRange: string;
  /** Items de costo principales que arman la tabla resumen. */
  costItems: CostItem[];
  /** Cuerpo del artículo. */
  sections: ArticleSection[];
  /** FAQ específicas del artículo. */
  faqs: FAQ[];
  /** Fuentes y referencias. */
  sources: PriceSource[];
  /** Notas de metodología propias del artículo. */
  methodologyNotes: string[];
  /** Disclaimer extra opcional para casos sensibles (trámites, jurisdicciones). */
  extraDisclaimer?: string;
  /** Slugs/títulos relacionados para enlazado interno. */
  relatedArticles: RelatedArticleRef[];
  /** Slug de calculadora relacionada, si aplica. */
  relatedCalculatorSlug?: string;
}
