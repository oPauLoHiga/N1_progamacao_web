import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const mainNav: NavItem[] = [
  { label: "Inicio", to: paths.home, end: true },
  { label: "Noticias", to: paths.news },
  { label: "Login", to: paths.login, end: true },
  { label: "Cadastro", to: paths.register, end: true },
  { label: "Leitor", to: paths.readerFeed },
  { label: "Autor", to: paths.authorNews },
  { label: "Superadmin", to: paths.adminDashboard },
];
