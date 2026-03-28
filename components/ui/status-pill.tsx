import { cn } from '@/lib/utils';

type StatusTone = 'positive' | 'warning' | 'danger' | 'info' | 'neutral';

const tones: Record<StatusTone, string> = {
  positive: 'bg-emerald-500/12 text-emerald-300 ring-1 ring-emerald-500/20',
  warning: 'bg-amber-500/12 text-amber-300 ring-1 ring-amber-500/20',
  danger: 'bg-rose-500/12 text-rose-300 ring-1 ring-rose-500/20',
  info: 'bg-cyan-500/12 text-cyan-300 ring-1 ring-cyan-500/20',
  neutral: 'bg-white/6 text-white/70 ring-1 ring-white/10'
};

export function StatusPill({ label, tone = 'neutral' }: { label: string; tone?: StatusTone }) {
  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.14em] uppercase', tones[tone])}>
      {label}
    </span>
  );
}
