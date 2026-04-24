import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export default function NotFoundPage() {
  return (
    <div>
      <PageHeader id="not-found-hero" title="Not Found" subtitle="The page you requested does not exist." />
      <Container id="not-found-content" className="py-10">
        <Link
          id="not-found-home"
          href="/"
          className="rounded-md bg-cyan-500 px-4 py-2 text-slate-950 font-medium hover:bg-cyan-400"
        >
          Go Home
        </Link>
      </Container>
    </div>
  );
}
