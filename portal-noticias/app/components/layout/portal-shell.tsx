import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PortalShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="page">{children}</main>
      <SiteFooter />
    </>
  );
}
