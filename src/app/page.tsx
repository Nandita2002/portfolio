import { PortfolioShell } from "@/components/portfolio/portfolio-shell";
import { getLatestLinkedInArticles } from "@/lib/linkedin-articles";
import { linkedinFallbackArticles } from "@/lib/portfolio-data";

export default async function Home() {
  const linkedinArticles = await getLatestLinkedInArticles({
    feedUrl: process.env.LINKEDIN_ARTICLES_FEED_URL,
    fallbackArticles: linkedinFallbackArticles,
    maxItems: 6,
  });

  return <PortfolioShell linkedinArticles={linkedinArticles} />;
}
