# Portal Fake News

Projeto acadêmico da disciplina de Programação para Web: portal de notícias em **React**, **TypeScript** e **Vite**, com roteamento em **React Router v7** (SPA). Os dados são **estáticos** (arrays/objetos em `src/data/`); não há backend. O CSS é **manual** (`src/index.css`), sem Tailwind, Bootstrap ou bibliotecas de UI.

Áreas do sistema:

- **Público** — home, login, cadastro, buscas, detalhe da notícia
- **Leitor** — perfil e comentários
- **Autor** — perfil, minhas notícias, nova/editar notícia, comentários
- **Editor** — painel, perfil, publicar/despublicar, editar qualquer notícia
- **Superadmin (Admin)** — dashboard e CRUDs em `/admin/...`

O visual usa preto, branco e vermelho como base. Imagens de capa e avatar vêm de serviços de placeholder (ex.: Picsum / Pravatar) apenas para demonstração.

## Tecnologias

- React 19
- React Router 7 (`import` a partir de `react-router`, não usar `react-router-dom`)
- TypeScript
- Vite 8 + `@vitejs/plugin-react`

## Como executar

### Instalar dependências

```bash
npm install
```

### Modo desenvolvimento

```bash
npm run dev
```

O Vite exibe a URL local (por exemplo `http://localhost:5173`).

### Build de produção

```bash
npm run build
```

Saída em `dist/`.

### Pré-visualizar o build

```bash
npm run preview
```

### Checagem de tipos

```bash
npm run typecheck
```

## Rotas

Todas as rotas estão declaradas em `src/App.tsx` com `<BrowserRouter>`, `<Routes>` e `<Route>`.

### Público

| Rota | Página |
|------|--------|
| `/` | Home |
| `/sobre`, `/contato`, `/termos` | Páginas institucionais |
| `/login` | Login |
| `/cadastro` | Cadastro |
| `/lembrar-senha` | Lembrar senha |
| `/busca/uf/:sigla` | Busca por UF |
| `/busca/tag/:slug` | Busca por tag |
| `/noticia/:id` | Detalhe da notícia |

### Leitor

| Rota | Página |
|------|--------|
| `/leitor/perfil` | Perfil do leitor |
| `/leitor/comentar/:noticiaId` | Comentar (leitor) |

### Autor

| Rota | Página |
|------|--------|
| `/autor/perfil` | Perfil do autor |
| `/autor/comentar/:noticiaId` | Comentar (autor) |
| `/autor/noticias` | Minhas notícias |
| `/autor/noticias/nova` | Nova notícia |
| `/autor/noticias/:id/editar` | Editar notícia |

### Editor

| Rota | Página |
|------|--------|
| `/editor/painel` | Painel do editor |
| `/editor/perfil` | Perfil do editor |
| `/editor/publicar/:id` | Publicar / despublicar |
| `/editor/noticias/:id/editar` | Editar qualquer notícia |

### Admin (superadmin)

| Rota | Página |
|------|--------|
| `/admin` | Redireciona para `/admin/dashboard` |
| `/admin/dashboard` | Dashboard |
| `/admin/ufs`, `/admin/ufs/nova`, `/admin/ufs/:id/editar` | UFs |
| `/admin/cidades`, `/admin/cidades/nova`, `/admin/cidades/:id/editar` | Cidades |
| `/admin/tags`, `/admin/tags/nova`, `/admin/tags/:id/editar` | Tags |
| `/admin/perfis` | Perfis (somente leitura) |
| `/admin/noticias`, `/admin/noticias/:id/editar` | Notícias |
| `/admin/usuarios`, `/admin/usuarios/:id/editar` | Usuários |
| `/admin/comentarios` | Comentários |

Qualquer outra URL cai na página **404** (`*`).

## Estrutura de pastas

```text
portal-noticias/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts          # alias ~ → src/
└── src/
    ├── main.tsx            # entrada React
    ├── App.tsx             # BrowserRouter + rotas
    ├── index.css           # estilos globais
    ├── types/              # tipos TypeScript
    ├── data/               # mocks (notícias, usuários, UFs, etc.)
    ├── lib/                # paths, slugify, nav, etc.
    ├── components/
    │   ├── layout/         # Header, Footer, Sidebar, MainLayout
    │   ├── ui/             # Button, InputField, NoticiaCard, TagBadge, …
    │   ├── home/           # Hero
    │   ├── auth/           # DevQuickAccess (login)
    │   └── autor/          # AutorNoticiaForm
    └── pages/
        ├── publico/
        ├── leitor/
        ├── autor/
        ├── editor/
        └── superadmin/
```

## Observações

- O alias de importação `~/` aponta para `src/` (configurado no Vite e no `tsconfig.json`).
- Formulários e ações de CRUD são **demonstrativos** (sem persistência).
- Projeto para fins acadêmicos na disciplina de Programação para Web.
