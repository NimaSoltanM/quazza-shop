import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import UserButton from '../auth/user-button';
import { getCurrentUserRole } from '@/lib/auth';
import { LayoutDashboard } from 'lucide-react';
import { Link } from 'next-view-transitions';

export default async function Navbar() {
  const userRole = await getCurrentUserRole();

  return (
    <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-10 border-b'>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='lg:hidden' size='icon' variant='outline'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <Link href='/'>
            <MountainIcon className='h-6 w-6' />
            <span className='sr-only'>TechShop</span>
          </Link>
          <div className='grid gap-2 py-6'>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/'>
              Home
            </Link>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/products'>
              Products
            </Link>
            <Link
              className='flex w-full items-center py-2 text-lg font-semibold'
              href='/about'>
              About
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className='w-[150px]'>
        <Link className='mr-6 hidden lg:flex' href='/'>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>TechShop</span>
        </Link>
      </div>
      <div className='flex w-full justify-center'>
        <nav className='hidden lg:flex'>
          <Link
            className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            href='/'>
            Home
          </Link>
          <Link
            className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            href='/products'>
            Products
          </Link>
          <Link
            className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            href='/about'>
            About
          </Link>
        </nav>
      </div>
      <div className='ml-auto'>
        {userRole === 'ADMIN' ? (
          <div className='flex gap-x-3'>
            <Button variant='link' asChild>
              <Link href='/admin'>
                <LayoutDashboard className='mr-2 h-4 w-4' />
                Admin Dashboard
              </Link>
            </Button>
            <UserButton />
          </div>
        ) : (
          <UserButton />
        )}
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
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
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function MountainIcon(props: any) {
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
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}
