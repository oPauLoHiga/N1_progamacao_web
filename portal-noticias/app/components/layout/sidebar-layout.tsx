import type { ReactNode } from "react";

import type { NavItem } from "~/lib/nav-types";

import { NavItemsList } from "./nav-items-list";

export function SidebarLayout({
  children,
  items,
}: {
  children: ReactNode;
  items: NavItem[];
}) {
  return (
    <div className="container layout">
      <aside className="sidebar">
        <NavItemsList items={items} />
      </aside>
      <section className="content">{children}</section>
    </div>
  );
}
