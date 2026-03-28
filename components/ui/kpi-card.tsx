'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Dot } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function KpiCard({
  label,
  value,
  delta,
  detail,
  tone,
  index = 0
}: {
  label: string;
  value: string;
  delta: string;
  detail: string;
  tone: 'positive' | 'warning' | 'info';
  index?: number;
}) {
  const positive = delta.startsWith('+');

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay: index * 0.06 }}
    >
      <Card className="group overflow-hidden p-5 transition-transform duration-200 hover:-translate-y-0.5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
            <div className="mt-4 flex items-end gap-2">
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">{value}</h3>
            </div>
          </div>
          <div
            className={cn(
              'rounded-full p-2',
              tone === 'positive' && 'bg-emerald-500/12 text-emerald-300',
              tone === 'warning' && 'bg-amber-500/12 text-amber-300',
              tone === 'info' && 'bg-cyan-500/12 text-cyan-300'
            )}
          >
            {positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
          <span className={cn(positive ? 'text-emerald-300' : 'text-amber-300')}>{delta}</span>
          <Dot className="h-4 w-4 text-slate-600" />
          <span className="text-slate-400">{detail}</span>
        </div>
      </Card>
    </motion.div>
  );
}
