export function ReaderCommentsTable() {
  return (
    <section className="panel">
      <h2>Comentarios recentes</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Noticia</th>
              <th>Comentario</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plano de mobilidade prioriza transporte publico</td>
              <td>Gostei do resumo e quero acompanhar as proximas etapas.</td>
              <td>18/04/2026</td>
            </tr>
            <tr>
              <td>Festival ocupa espacos publicos</td>
              <td>Seria bom ver mais detalhes por bairro.</td>
              <td>17/04/2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
