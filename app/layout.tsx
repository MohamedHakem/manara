// import { Geist } from 'next/font/google';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import MobileBottomNav from '@/components/mobile-bottom-nav';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';
import { Suspense } from 'react';

// const geistSans = Geist();

export const metadata: Metadata = {
  title: 'Manara Tech - concept',
  description: 'By Hakem'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="md:border md:border-neutral-200/80 max-h-[calc(100svh-theme(spacing.4))] overflow-auto">
            <Suspense>{children}</Suspense>
          </SidebarInset>
          <MobileBottomNav />
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
