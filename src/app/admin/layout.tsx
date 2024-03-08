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
      <div className='flex flex-col'>
        <Header
          title='Admin dashborad'
          links={admin_sidebar_links_mobile}
          rightContent={<AdminSearchBar />}
        />
        {children}
      </div>
    </div>
  );
}
