'use client';

import { Input } from '@/components/ui/input';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function AdminSearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const generatePlaceHolder = () => {
    let placeHolder = 'Search ...';

    if (pathname === '/admin/orders') {
      placeHolder = 'Search by order id (#*****)';
    } else if (pathname === '/admin/products') {
      placeHolder = 'Search by name';
    } else if (pathname === '/admin/customers') {
      placeHolder = 'search by email';
    }

    return placeHolder;
  };

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='ml-auto flex-1 sm:flex-initial'>
      <div className='relative'>
        <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
        <Input
          className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white'
          placeholder={generatePlaceHolder()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
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
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}
