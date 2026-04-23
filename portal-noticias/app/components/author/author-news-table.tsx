import { Link } from "react-router";

import { paths } from "~/lib/paths";

export function AuthorNewsTable() {
  return (
    <section className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Status</th>
            <th>Data</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plano de mobilidade prioriza transporte publico</td>
            <td>
              <span className="status">Publicada</span>
            </td>
            <td>18/04/2026</td>
            <td className="table-actions">
              <Link className="button secondary" to={paths.article}>
                Ver
              </Link>
              <Link className="button secondary" to={`${paths.authorCrud}#atualizar`}>
                Editar
              </Link>
            </td>
          </tr>
          <tr>
            <td>Festival ocupa espacos publicos durante tres dias</td>
            <td>
              <span className="status">Rascunho</span>
            </td>
            <td>17/04/2026</td>
            <td className="table-actions">
              <Link className="button secondary" to={`${paths.authorCrud}#exibir`}>
                Ver
              </Link>
              <Link className="button secondary" to={`${paths.authorCrud}#atualizar`}>
                Editar
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
