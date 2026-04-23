import { Link } from "react-router";

import { paths } from "~/lib/paths";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Portal Fake News</strong>
          <p className="note">Projeto academico em React Router.</p>
        </div>
        <div>
          <strong>Paginas</strong>
          <p>
            <Link to={paths.news}>Noticias</Link>
          </p>
          <p>
            <Link to={paths.login}>Login</Link>
          </p>
          <p>
            <Link to={paths.register}>Cadastro</Link>
          </p>
        </div>
        <div>
          <strong>Areas</strong>
          <p>
            <Link to={paths.readerFeed}>Leitor</Link>
          </p>
          <p>
            <Link to={paths.authorNews}>Autor</Link>
          </p>
          <p>
            <Link to={paths.adminDashboard}>Superadmin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
