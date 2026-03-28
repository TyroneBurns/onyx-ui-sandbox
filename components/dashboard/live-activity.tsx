import { activityFeed } from '@/data/mock';
import { Card } from '@/components/ui/card';
import { StatusPill } from '@/components/ui/status-pill';

export function LiveActivity() {
  return (
    <Card className="p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Activity</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">Live decision feed</h3>
        </div>
        <StatusPill label="Streaming" tone="positive" />
      </div>
      <div className="space-y-4">
        {activityFeed.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/6 bg-white/4 p-4">
            <div className="flex items-start gap-3">
              <span
                className={`mt-1 h-2.5 w-2.5 rounded-full ${
                  item.tone === 'positive'
                    ? 'bg-emerald-400'
                    : item.tone === 'warning'
                      ? 'bg-amber-400'
                      : 'bg-cyan-400'
                }`}
              />
              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-1 text-xs text-slate-400">{item.meta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
