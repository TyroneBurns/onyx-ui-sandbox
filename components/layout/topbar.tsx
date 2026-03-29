'use client';

import { Bell, Command, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatusPill } from '@/components/ui/status-pill';

export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="sticky top-0 z-20 mb-8 overflow-hidden rounded-[24px] border border-white/8 bg-[rgba(7,11,17,0.78)] px-4 py-4 backdrop-blur-xl md:px-5">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-[radial-gradient(circle_at_right,rgba(34,197,94,0.18),transparent_68%)]" />
      <div className="relative flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="truncate text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h1>
            <StatusPill label="Live metrics" tone="positive" pulse />
          </div>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">{subtitle}</p>
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <button className="inline-flex min-w-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white">
            <Search className="h-4 w-4 shrink-0" />
            <span className="truncate">Search</span>
            <span className="ml-2 hidden rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-slate-500 md:inline-flex">
              <Command className="mr-1 h-3 w-3" />K
            </span>
          </button>
          <Button variant="secondary" className="max-w-full">
            <Sparkles className="mr-2 h-4 w-4 shrink-0" />
            Quick actions
          </Button>
          <button className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/8 hover:text-white">
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
