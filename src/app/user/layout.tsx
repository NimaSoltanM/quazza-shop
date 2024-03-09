import {
  user_sidebar_links,
  user_sidebar_links_mobile,
} from '@/constants/user';
import Sidebar from '@/components/layout/sidebar';
import Header from '@/components/layout/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid min-h-screen bg-gray-100/40 lg:grid-cols-[280px_1fr] dark:bg-gray-800/40'>
      <Sidebar links={user_sidebar_links} />
      <div>
        <Header links={user_sidebar_links_mobile} title='User Dashboard' />
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          <div className='border shadow-sm rounded-lg p-4'>{children}</div>
        </main>
      </div>
    </div>
  );
}
