import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const authorSidebarNews: NavItem[] = [
  { label: "Minhas noticias", to: paths.authorNews, end: true },
  { label: "Listar", to: `${paths.authorCrud}#listar` },
  { label: "Criar", to: `${paths.authorCrud}#criar` },
  { label: "Atualizar", to: `${paths.authorCrud}#atualizar` },
  { label: "Apagar", to: `${paths.authorCrud}#apagar` },
];

export const authorSidebarCrud: NavItem[] = [
  { label: "Minhas noticias", to: paths.authorNews, end: true },
  { label: "Listar", to: "#listar", current: true },
  { label: "Criar", to: "#criar" },
  { label: "Exibir", to: "#exibir" },
  { label: "Atualizar", to: "#atualizar" },
  { label: "Apagar", to: "#apagar" },
];
