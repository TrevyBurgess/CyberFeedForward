import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ id, title, subtitle }: PageHeaderProps) {
  return (
    <header id={id} className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-950/30">
      <Container id={`${id}-container`} className="py-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p> : null}
      </Container>
    </header>
  );
}
