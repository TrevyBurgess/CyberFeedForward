import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export const metadata = {
  title: "Settings"
};

export default function SettingsPage() {
  return (
    <div>
      <PageHeader id="settings-hero" title="Settings" subtitle="Application preferences and configuration." />
      <Container id="settings-content" className="py-10">
        <section id="settings-card" className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
          <h2 className="text-lg font-semibold">General</h2>
          <div id="settings-theme" className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">Theme</p>
              <p className="mt-1 text-sm text-slate-300">Toggle between light and dark mode.</p>
            </div>
            <ThemeToggle />
          </div>
        </section>
      </Container>
    </div>
  );
}
