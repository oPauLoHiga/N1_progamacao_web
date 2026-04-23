import type { NavItem } from "./nav-types";
import { paths } from "./paths";

export const adminSidebar: NavItem[] = [
  { label: "Dashboard", to: paths.adminDashboard, end: true },
  { label: "UFs", to: paths.adminUfs, end: true },
  { label: "Cidades", to: paths.adminCities, end: true },
  { label: "Tags", to: paths.adminTags, end: true },
];
