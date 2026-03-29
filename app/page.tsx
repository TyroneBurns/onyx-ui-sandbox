import { AppShell } from '@/components/layout/app-shell';
import { KpiCard } from '@/components/ui/kpi-card';
import { kpis } from '@/data/mock';
import { PerformanceChart } from '@/components/charts/performance-chart';
import { EquityChart } from '@/components/charts/equity-chart';
import { LiveActivity } from '@/components/dashboard/live-activity';
import { SignalGrid } from '@/components/dashboard/signal-grid';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { SystemHealth } from '@/components/dashboard/system-health';
import { TradesTable } from '@/components/table/trades-table';

export default function OverviewPage() {
  return (
    <AppShell title="ONYX Control Centre" subtitle="Premium sandbox rebuild for the trading dashboard UI.">
      <section className="space-y-8 overflow-safe">
        <div className="grid gap-4 xl:grid-cols-4">
          {kpis.map((item, index) => (
            <KpiCard key={item.label} index={index} {...item} />
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.6fr_0.95fr]">
          <PerformanceChart />
          <LiveActivity />
        </div>

        <div className="space-y-4">
          <SectionHeading
            eyebrow="Signal board"
            title="High-conviction opportunities"
            description="Top candidates ranked by regime stability, confidence, and execution quality."
            action={<Button>View signal queue</Button>}
          />
          <SignalGrid />
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <EquityChart />
          <SystemHealth />
        </div>

        <TradesTable />
      </section>
    </AppShell>
  );
}
