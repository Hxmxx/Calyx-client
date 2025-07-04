'use client';

import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { GlobalStylesProvider } from '@/components/ui/GlobalStylesProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GlobalStylesProvider />
      {children}
    </ThemeProvider>
  );
}
