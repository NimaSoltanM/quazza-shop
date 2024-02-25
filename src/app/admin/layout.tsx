import SideNav from '@/components/admin/layouts/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='grid min-h-screen bg-gray-100/40 lg:grid-cols-[280px_1fr] dark:bg-gray-800/40'>
        <SideNav />
        {children}
      </div>
    </>
  );
}
