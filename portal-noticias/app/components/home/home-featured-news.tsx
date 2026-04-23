import { NewsCard } from "~/components/news-card";
import { SectionTitle } from "~/components/layout/section-title";
import { featuredNews } from "~/data/home";
import { paths } from "~/lib/paths";

export function HomeFeaturedNews() {
  return (
    <section className="section">
      <SectionTitle
        note="Cards simples com resumo, data e link."
        title="Noticias em destaque"
      />
      <div className="grid grid-3">
        {featuredNews.map((item) => (
          <NewsCard key={item.title} {...item} linkLabel="Abrir" to={paths.article} />
        ))}
      </div>
    </section>
  );
}
