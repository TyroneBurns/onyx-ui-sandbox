import { AppShell } from '@/components/layout/app-shell';
import { SectionHeading } from '@/components/ui/section-heading';
import { TradesTable } from '@/components/table/trades-table';
import { Card } from '@/components/ui/card';

export default function TradesPage() {
  return (
    <AppShell title="Trades" subtitle="Execution history, trade reasons, and live exposure across ONYX.">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Execution layer"
          title="Trade ledger"
          description="A cleaner high-trust table treatment with mono numerics, softer density, and stronger hierarchy."
        />

        <div className="grid gap-4 xl:grid-cols-3">
          {[
            ['Realised today', '£6,120'],
            ['Open positions', '8'],
            ['Avg trade duration', '2h 14m']
          ].map(([label, value]) => (
            <Card key={label} className="p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-4 font-mono text-3xl text-white">{value}</p>
            </Card>
          ))}
        </div>

        <TradesTable />
      </section>
    </AppShell>
  );
}
