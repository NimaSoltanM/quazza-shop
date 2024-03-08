import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Header() {
  return (
    <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
      <Link className='lg:hidden' href='#'>
        <Package2Icon className='h-6 w-6' />
        <span className='sr-only'>Home</span>
      </Link>
      <h1 className='font-semibold text-lg'>My Account</h1>
      <div className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
        <Sheet>
          <SheetTrigger asChild>
            <Button className='lg:hidden' size='icon' variant='outline'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <Link href='/'>
              <Package2Icon className='h-6 w-6' />
              <span className='sr-only'>TechShop</span>
            </Link>
            <div className='grid gap-2 py-6'>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='/profile'>
                Home
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='/profile/orders'>
                Orders
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='/profile/wishlist'>
                Wishlist
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='/profile/comments'>
                Comments
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='/profile/addresses'>
                Addresses
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='/profile/settings'>
                Settings
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold mt-10'
                href='/profile/orders'>
                Logout
              </Link>
            </div>
          </SheetContent>
        </Sheet>
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
