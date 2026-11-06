import { Suspense } from "react";
import { site } from "@/lib/site";
import { Container } from "./container";
import { CopyrightYear } from "./copyright-year";
import { NavLink } from "./nav-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          &copy; <Suspense fallback={null}><CopyrightYear /></Suspense> {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
