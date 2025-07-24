import '@/app/globals.css';
import { Toaster } from '@/components/ui/toaster';
import MarketingHeader from './components/MarketingHeader';
import MarketingFooter from './components/MarketingFooter';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <MarketingHeader />
    <main className="p-4">
      {children}
    </main>
    <MarketingFooter />
    <Toaster />
  </>
  );
}