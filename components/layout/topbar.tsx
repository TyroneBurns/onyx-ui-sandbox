'use client';

import { Bell, Command, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatusPill } from '@/components/ui/status-pill';

export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="sticky top-0 z-20 mb-8 flex flex-col gap-4 rounded-[24px] border border-white/8 bg-[rgba(7,11,17,0.74)] px-4 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-5">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h1>
          <StatusPill label="Live metrics" tone="positive" />
        </div>
        <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white">
          <Search className="h-4 w-4" />
          Search
          <span className="ml-2 hidden rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-slate-500 md:inline-flex">
            <Command className="mr-1 h-3 w-3" />K
          </span>
        </button>
        <Button variant="secondary">
          <Sparkles className="mr-2 h-4 w-4" />
          Quick actions
        </Button>
        <button className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/8 hover:text-white">
          <Bell className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
