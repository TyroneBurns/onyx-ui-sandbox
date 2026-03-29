'use client';

import { Bell, Command, Search, Sparkles, Activity, ShieldCheck, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatusPill } from '@/components/ui/status-pill';

const summary = [
  { label: 'Live models', value: '07', icon: Activity },
  { label: 'Risk state', value: 'Stable', icon: ShieldCheck },
  { label: 'Signal flow', value: 'Clean', icon: Waves }
];

export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="sticky top-0 z-20 mb-6 overflow-hidden rounded-[28px] border border-white/8 bg-[rgba(7,11,17,0.82)] px-4 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:mb-8 md:px-5 md:py-5">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[46%] overflow-hidden">
        <div className="absolute right-[-12%] top-[-18%] h-[190px] w-[190px] rounded-full bg-emerald-500/18 blur-2xl md:h-[240px] md:w-[240px]" />
        <div className="absolute right-[-5%] top-0 h-full w-[60%] rounded-l-[48px] border-l border-white/6 bg-[linear-gradient(180deg,rgba(34,197,94,0.18),rgba(34,197,94,0.04))]" />
      </div>

      <div className="relative flex min-w-0 flex-col gap-4">
        <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="max-w-full truncate text-[30px] font-semibold tracking-[-0.05em] text-white sm:text-[34px]">{title}</h1>
              <StatusPill label="Live metrics" tone="positive" pulse />
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-[15px]">{subtitle}</p>
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-2 sm:justify-start lg:max-w-[48%] lg:justify-end">
            <button className="inline-flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white sm:flex-none">
              <Search className="h-4 w-4 shrink-0" />
              <span className="truncate">Search</span>
              <span className="ml-1 hidden rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-slate-500 md:inline-flex">
                <Command className="mr-1 h-3 w-3" />K
              </span>
            </button>
            <Button variant="secondary" className="flex-1 sm:flex-none">
              <Sparkles className="mr-2 h-4 w-4 shrink-0" />
              Quick actions
            </Button>
            <button className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/8 hover:text-white">
              <Bell className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {summary.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="min-w-0 rounded-2xl border border-white/8 bg-black/18 px-3.5 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  <Icon className="h-3.5 w-3.5 text-emerald-300" />
                  <span className="truncate">{item.label}</span>
                </div>
                <p className="mt-2 truncate text-sm font-medium text-white">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
