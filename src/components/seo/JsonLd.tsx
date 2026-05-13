import { absoluteUrl } from "@/lib/seo";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import type { Article, FAQ } from "@/types/article";

function script(data: unknown) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return script({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  });
}

export function WebsiteJsonLd() {
  return script({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es-AR",
  });
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; path: string }>;
}) {
  return script({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  });
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const url = absoluteUrl(`/${article.category}/${article.slug}/`);
  return script({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "es-AR",
    dateModified: article.lastUpdated,
    datePublished: article.lastUpdated,
    mainEntityOfPage: url,
    url,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  });
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQ[] }) {
  if (faqs.length === 0) return null;
  return script({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  });
}
