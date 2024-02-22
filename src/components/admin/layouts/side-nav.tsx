'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { links } from '@/app/constants/side-nav';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathName = usePathname();

  return (
    <div className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40'>
      <div className='flex flex-col gap-2'>
        <div className='flex h-[60px] items-center px-6'>
          <Link className='flex items-center gap-2 font-semibold' href='/admin'>
            <Package2Icon className='h-6 w-6' />
            <span>Acme Inc</span>
          </Link>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-4 text-sm font-medium'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                  {
                    'bg-gray-200  text-gray-900': pathName === link.href,
                  }
                )}>
                {link.icon}
                {link.name}
                {link.count}
                {link.count}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
      <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
      <path d='M12 3v6' />
    </svg>
  );
}
