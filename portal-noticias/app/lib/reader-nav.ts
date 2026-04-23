import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const readerSidebarFeed: NavItem[] = [
  { label: "Meu feed", to: paths.readerFeed, end: true },
  { label: "Meu perfil", to: paths.readerProfile, end: true },
  { label: "Noticias publicas", to: paths.news },
  { label: "Sair", to: paths.login, end: true },
];

export const readerSidebarProfile: NavItem[] = [
  { label: "Meu feed", to: paths.readerFeed, end: true },
  { label: "Meu perfil", to: paths.readerProfile, end: true },
];
