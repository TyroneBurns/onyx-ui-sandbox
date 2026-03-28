import { trades } from '@/data/mock';
import { Card } from '@/components/ui/card';
import { StatusPill } from '@/components/ui/status-pill';

export function TradesTable() {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Trades</p>
          <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white">Execution log</h3>
        </div>
        <StatusPill label="5 rows" tone="neutral" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-white/[0.03] text-xs uppercase tracking-[0.16em] text-slate-500">
            <tr>
              {['Market', 'Side', 'Entry', 'Exit', 'P&L', 'Status', 'Reason'].map((head) => (
                <th key={head} className="px-5 py-4 font-medium md:px-6">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr key={`${trade.market}-${trade.entry}`} className="border-t border-white/6 text-sm text-slate-300 transition hover:bg-white/[0.03]">
                <td className="px-5 py-4 font-medium text-white md:px-6">{trade.market}</td>
                <td className="px-5 py-4 md:px-6">{trade.side}</td>
                <td className="px-5 py-4 font-mono md:px-6">{trade.entry}</td>
                <td className="px-5 py-4 font-mono md:px-6">{trade.exit}</td>
                <td className={`px-5 py-4 font-mono md:px-6 ${trade.pnl.startsWith('+') ? 'text-emerald-300' : 'text-rose-300'}`}>{trade.pnl}</td>
                <td className="px-5 py-4 md:px-6">
                  <StatusPill label={trade.status} tone={trade.status === 'Open' ? 'info' : 'neutral'} />
                </td>
                <td className="px-5 py-4 text-slate-400 md:px-6">{trade.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
