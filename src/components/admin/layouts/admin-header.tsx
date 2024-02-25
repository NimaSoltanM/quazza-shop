import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import AdminSearchBar from './admin-search-bar';

export default function AdminHeader() {
  return (
    <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
      <Link className='lg:hidden' href='#'>
        <Package2Icon className='h-6 w-6' />
        <span className='sr-only'>Home</span>
      </Link>
      <div className='flex-1'>
        <h1 className='font-semibold text-lg'>Products</h1>
      </div>
      <div className='flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <AdminSearchBar />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800'
              size='icon'
              variant='ghost'>
              <Image
                alt='Avatar'
                className='rounded-full'
                height='32'
                src='/placeholder.svg'
                style={{
                  aspectRatio: '32/32',
                  objectFit: 'cover',
                }}
                width='32'
              />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
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
