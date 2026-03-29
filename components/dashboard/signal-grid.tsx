import { ArrowDownRight, ArrowUpRight, Radar } from 'lucide-react';
import { signalCards } from '@/data/mock';
import { Card } from '@/components/ui/card';
import { StatusPill } from '@/components/ui/status-pill';
import { MarketIcon } from '@/components/ui/market-icon';

export function SignalGrid() {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {signalCards.map((signal) => {
        const longBias = signal.bias === 'Long';
        const statusTone: 'positive' | 'info' | 'warning' = signal.status === 'Live' ? 'positive' : signal.status === 'Queued' ? 'info' : 'warning';
        return (
          <Card key={signal.pair} className={longBias ? 'p-5 shadow-[0_0_40px_rgba(16,185,129,0.06)]' : 'p-5 shadow-[0_0_40px_rgba(59,130,246,0.06)]'}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <MarketIcon market={signal.pair} className="h-11 w-11 rounded-2xl" />
                <div className="min-w-0">
                  <p className="truncate text-xs uppercase tracking-[0.18em] text-slate-500">{signal.pair}</p>
                  <h3 className="mt-1 flex items-center gap-2 text-lg font-semibold text-white">
                    {longBias ? <ArrowUpRight className="h-4 w-4 text-emerald-300" /> : <ArrowDownRight className="h-4 w-4 text-cyan-300" />}
                    {signal.bias} bias
                  </h3>
                </div>
              </div>
              <StatusPill label={signal.status} tone={statusTone} pulse={signal.status === 'Live'} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/6 bg-white/4 p-3">
                <p className="text-xs text-slate-500">Confidence</p>
                <p className="mt-2 font-mono text-lg text-white">{signal.confidence}</p>
              </div>
              <div className="rounded-2xl border border-white/6 bg-white/4 p-3">
                <p className="text-xs text-slate-500">Quality</p>
                <p className="mt-2 font-mono text-lg text-white">{signal.quality}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Radar className="h-4 w-4 text-slate-500" />
              <span>{signal.regime}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
