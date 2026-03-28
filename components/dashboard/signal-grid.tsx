import { signalCards } from '@/data/mock';
import { Card } from '@/components/ui/card';
import { StatusPill } from '@/components/ui/status-pill';

export function SignalGrid() {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {signalCards.map((signal) => (
        <Card key={signal.pair} className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{signal.pair}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{signal.bias} bias</h3>
            </div>
            <StatusPill
              label={signal.status}
              tone={signal.status === 'Live' ? 'positive' : signal.status === 'Queued' ? 'info' : 'warning'}
            />
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
          <p className="mt-4 text-sm text-slate-400">{signal.regime}</p>
        </Card>
      ))}
    </div>
  );
}
