import { Link } from "react-router";

import { paths } from "~/lib/paths";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="note">Destaque principal</p>
        <h1>Portal simples para noticias, leitor, autor e superadmin</h1>
        <p>Projeto em React Router com visual basico, limpo e sem imagens.</p>
        <div className="actions">
          <Link className="button" to={paths.article}>
            Ler noticia
          </Link>
          <Link className="button secondary" to={paths.news}>
            Ver todas
          </Link>
        </div>
      </div>
    </section>
  );
}
