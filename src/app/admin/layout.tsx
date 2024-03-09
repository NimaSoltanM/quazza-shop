import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import {
  admin_sidebar_links,
  admin_sidebar_links_mobile,
} from '@/constants/admin';
import AdminSearchBar from './_components/layouts/admin-search-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid min-h-screen bg-gray-100/40 lg:grid-cols-[280px_1fr] dark:bg-gray-800/40'>
      <Sidebar links={admin_sidebar_links} />
      <div>
        <Header
          title='Admin dashborad'
          links={admin_sidebar_links_mobile}
          rightContent={<AdminSearchBar />}
        />
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          <div className='border shadow-sm rounded-lg p-4'>{children}</div>
        </main>
      </div>
    </div>
  );
}
