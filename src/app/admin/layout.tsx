import SideNav from '@/components/admin/ui/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='grid min-h-screen w-full overflow-hidden bg-gray-100/40 lg:grid-cols-[280px_1fr] dark:bg-gray-800/40'>
        <SideNav />
        {children}
      </div>
    </div>
  );
}
