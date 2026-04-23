export function AuthorCrudListPanel() {
  return (
    <section className="panel" id="listar">
      <h1>Listar noticias</h1>
      <p className="note">Tabela simples para visualizar materias cadastradas.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plano de mobilidade prioriza transporte publico</td>
              <td>Cidade</td>
              <td>
                <span className="status">Publicada</span>
              </td>
            </tr>
            <tr>
              <td>Festival ocupa espacos publicos durante tres dias</td>
              <td>Cultura</td>
              <td>
                <span className="status">Rascunho</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function AuthorCrudCreatePanel() {
  return (
    <section className="panel" id="criar">
      <h2>Criar noticia</h2>
      <form className="form-grid">
        <div className="field">
          <label htmlFor="titulo">Titulo</label>
          <input id="titulo" placeholder="Digite o titulo da noticia" type="text" />
        </div>
        <div className="field">
          <label htmlFor="resumo">Resumo</label>
          <textarea id="resumo" placeholder="Escreva um resumo" />
        </div>
        <div className="actions">
          <button className="button" type="button">
            Salvar
          </button>
        </div>
      </form>
    </section>
  );
}

export function AuthorCrudShowPanel() {
  return (
    <section className="panel" id="exibir">
      <h2>Exibir noticia</h2>
      <p>Materia selecionada: Plano de mobilidade prioriza transporte publico.</p>
    </section>
  );
}

export function AuthorCrudUpdatePanel() {
  return (
    <section className="panel" id="atualizar">
      <h2>Atualizar noticia</h2>
      <form className="form-grid">
        <div className="field">
          <label htmlFor="titulo-editar">Titulo</label>
          <input
            defaultValue="Plano de mobilidade prioriza transporte publico"
            id="titulo-editar"
            type="text"
          />
        </div>
        <div className="actions">
          <button className="button" type="button">
            Atualizar
          </button>
        </div>
      </form>
    </section>
  );
}

export function AuthorCrudDeletePanel() {
  return (
    <section className="panel" id="apagar">
      <h2>Apagar noticia</h2>
      <p>Noticia selecionada: Festival ocupa espacos publicos durante tres dias.</p>
      <button className="button danger" type="button">
        Confirmar exclusao
      </button>
    </section>
  );
}
