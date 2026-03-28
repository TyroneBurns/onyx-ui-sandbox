import { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';
import { MobileNav } from '@/components/layout/mobile-nav';

export function AppShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.06),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:52px_52px] opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <Sidebar />
        <main className="flex-1 px-4 py-4 pb-28 md:px-6 lg:px-8 lg:pb-8">
          <Topbar title={title} subtitle={subtitle} />
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
