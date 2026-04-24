import Link from "next/link";

import { Container } from "@/components/ui/Container";

const navItems = [
  { id: "nav-home", href: "/", label: "Home" },
  { id: "nav-about", href: "/about", label: "About" },
  { id: "nav-blog", href: "/blog", label: "Blog" },
  { id: "nav-contact", href: "/contact", label: "Contact" }
] as const;

export function SiteHeader() {
  return (
    <header id="site-header" className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container id="site-header-container" className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link id="site-logo" href="/" className="font-semibold tracking-tight">
            Cyber Feed Forward
          </Link>

          <nav id="site-nav" aria-label="Primary" className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                id={item.id}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
