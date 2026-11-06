import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./container";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-background/80 backdrop-blur dark:border-zinc-800">
      <Container className="relative flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="inline-block h-3 w-3 rounded-sm bg-cyan-500"
          />
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav items={site.nav} />
      </Container>
    </header>
  );
}
