import type { Article, CategorySlug } from "@/types/article";
import { mantenerUnAuto } from "./mantener-un-auto";
import { transferirUnAuto } from "./transferir-un-auto";
import { vtvAuto } from "./vtv";
import { seguroAuto } from "./seguro-auto";
import { serviceAuto } from "./service-auto";

export const articles: Article[] = [
  mantenerUnAuto,
  transferirUnAuto,
  vtvAuto,
  seguroAuto,
  serviceAuto,
];

export function getArticleBySlug(
  category: CategorySlug,
  slug: string,
): Article | undefined {
  return articles.find((a) => a.category === category && a.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getAllArticleSlugs(): Array<{ category: CategorySlug; slug: string }> {
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}
