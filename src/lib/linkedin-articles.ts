import { XMLParser } from "fast-xml-parser";

import type { LinkedInArticle } from "@/lib/types";

type LinkedInFeedConfig = {
  /** RSS/Atom URL from a LinkedIn newsletter/public profile feed bridge */
  feedUrl?: string;
  /** Fallback static links shown when feed is unavailable */
  fallbackArticles: LinkedInArticle[];
  /** Maximum number of latest posts to show */
  maxItems?: number;
};

type FeedItem = {
  title?: string;
  link?: string | { href?: string };
  pubDate?: string;
  published?: string;
  description?: string;
  summary?: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  trimValues: true,
});

function normalizeArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function extractFeedItems(payload: unknown): FeedItem[] {
  if (!payload || typeof payload !== "object") {
    return [];
  }

  const root = payload as {
    rss?: { channel?: { item?: FeedItem | FeedItem[] } };
    feed?: { entry?: FeedItem | FeedItem[] };
  };

  if (root.rss?.channel?.item) {
    return normalizeArray(root.rss.channel.item);
  }

  if (root.feed?.entry) {
    return normalizeArray(root.feed.entry);
  }

  return [];
}

function cleanText(value?: string): string | undefined {
  if (!value) {
    return undefined;
  }

  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export async function getLatestLinkedInArticles(
  config: LinkedInFeedConfig
): Promise<LinkedInArticle[]> {
  const maxItems = config.maxItems ?? 6;

  if (!config.feedUrl) {
    return config.fallbackArticles.slice(0, maxItems);
  }

  try {
    const response = await fetch(config.feedUrl, {
      next: { revalidate: 1800 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      throw new Error(`Feed request failed with ${response.status}`);
    }

    const xml = await response.text();
    const parsed = parser.parse(xml);
    const items = extractFeedItems(parsed);

    const articles = items
      .map((item): LinkedInArticle | null => {
        const title = cleanText(item.title);
        const link =
          typeof item.link === "string"
            ? item.link
            : typeof item.link?.href === "string"
            ? item.link.href
            : undefined;

        if (!title || !link) {
          return null;
        }

        return {
          title,
          url: link,
          publishedAt: item.pubDate ?? item.published,
          summary: cleanText(item.description ?? item.summary),
        };
      })
      .filter((item): item is LinkedInArticle => item !== null)
      .slice(0, maxItems);

    if (articles.length > 0) {
      return articles;
    }

    return config.fallbackArticles.slice(0, maxItems);
  } catch {
    return config.fallbackArticles.slice(0, maxItems);
  }
}
