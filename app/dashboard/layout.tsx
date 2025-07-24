import '@/app/globals.css';
import { Toaster } from '@/components/ui/toaster';
import DashboardHeader from './components/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <DashboardHeader />
    <DashboardSidebar />
    <main className="p-4">
      {children}
    </main>
    
    <Toaster />
  </>
  );
}