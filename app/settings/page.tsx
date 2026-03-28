import { AppShell } from '@/components/layout/app-shell';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { settingsGroups } from '@/data/mock';

export default function SettingsPage() {
  return (
    <AppShell title="Settings" subtitle="Control thresholds, integrations, and system preferences for ONYX.">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Configuration"
          title="Trading controls and integrations"
          description="Grouped cards with better spacing and more premium controls than the current UI."
          action={<Button>Save changes</Button>}
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {settingsGroups.map((group) => (
            <Card key={group.title} className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Settings group</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-6 space-y-3">
                {group.items.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/4 px-4 py-3">
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="font-mono text-sm text-white">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Environment</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Sandbox release checklist</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ['App shell', 'Complete'],
              ['Dashboard views', 'Complete'],
              ['Motion layer', 'Complete'],
              ['Responsive pass', 'Ready'],
              ['Mock data', 'Included'],
              ['Design tokens', 'Included']
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/6 bg-white/4 p-4">
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-3 font-mono text-lg text-white">{value}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
