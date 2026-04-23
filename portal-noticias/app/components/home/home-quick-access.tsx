import { Link } from "react-router";

import { SectionTitle } from "~/components/layout/section-title";
import { paths } from "~/lib/paths";

export function HomeQuickAccess() {
  return (
    <section className="section">
      <SectionTitle note="Atalhos para as areas do trabalho." title="Acesso rapido" />
      <div className="grid grid-3">
        <div className="panel">
          <h3>Area publica</h3>
          <p>Login, cadastro, listagem e detalhe da noticia.</p>
          <Link className="button" to={paths.login}>
            Entrar
          </Link>
        </div>
        <div className="panel">
          <h3>Area do autor</h3>
          <p>Lista de noticias e pagina de CRUD simples.</p>
          <Link className="button" to={paths.authorNews}>
            Ir para autor
          </Link>
        </div>
        <div className="panel">
          <h3>Area do superadmin</h3>
          <p>Painel geral e paginas de UFs, cidades e tags.</p>
          <Link className="button" to={paths.adminDashboard}>
            Ir para painel
          </Link>
        </div>
      </div>
    </section>
  );
}
