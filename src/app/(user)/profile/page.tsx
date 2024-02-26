import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ProfileCards from './profile-cards';

export default function Component() {
  return (
    <div
      key='1'
      className='grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]'>
      <div className='grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]'>
        <div className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40'>
          <div className='flex flex-col gap-2'>
            <div className='flex h-[60px] items-center px-6'>
              <Link className='flex items-center gap-2 font-semibold' href='#'>
                <Package2Icon className='h-6 w-6' />
                <span>Acme Inc</span>
              </Link>
            </div>
            <div className='flex-1'>
              <nav className='grid items-start px-4 text-sm font-medium'>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <ShoppingCartIcon className='h-4 w-4' />
                  Orders
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <HeartIcon className='h-4 w-4' />
                  Wishlist
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <MessageSquareIcon className='h-4 w-4' />
                  Comments
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <MapPinIcon className='h-4 w-4' />
                  Addresses
                </Link>
                <Link
                  className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'>
                  <SettingsIcon className='h-4 w-4' />
                  Settings
                </Link>
              </nav>
            </div>
            <div className='flex h-[60px] items-center border-t px-6'>
              <Button className='rounded-full mx-auto' variant='outline'>
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
            <h1 className='font-semibold text-lg'>My Account</h1>
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
          </header>
          <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='grid gap-1.5'>
                <CardHeader>
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>View your orders</CardDescription>
                </CardHeader>
                <CardContent className='h-[200px] flex items-center justify-center'>
                  <Link className='text-sm' href='#'>
                    View
                  </Link>
                </CardContent>
              </Card>
              <Card className='grid gap-1.5'>
                <CardHeader>
                  <CardTitle>Wishlist</CardTitle>
                  <CardDescription>View your wishlist</CardDescription>
                </CardHeader>
                <CardContent className='h-[200px] flex items-center justify-center'>
                  <Link className='text-sm' href='#'>
                    View
                  </Link>
                </CardContent>
              </Card>
              <Card className='grid gap-1.5'>
                <CardHeader>
                  <CardTitle>Comments</CardTitle>
                  <CardDescription>View your comments</CardDescription>
                </CardHeader>
                <CardContent className='h-[200px] flex items-center justify-center'>
                  <Link className='text-sm' href='#'>
                    View
                  </Link>
                </CardContent>
              </Card>
              <Card className='grid gap-1.5'>
                <CardHeader>
                  <CardTitle>Addresses</CardTitle>
                  <CardDescription>View your addresses</CardDescription>
                </CardHeader>
                <CardContent className='h-[200px] flex items-center justify-center'>
                  <Link className='text-sm' href='#'>
                    View
                  </Link>
                </CardContent>
              </Card>
              <Card className='grid gap-1.5'>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Update your settings</CardDescription>
                </CardHeader>
                <CardContent className='h-[200px] flex items-center justify-center'>
                  <Link className='text-sm' href='#'>
                    View
                  </Link>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
          <Link className='lg:hidden' href='#'>
            <Package2Icon className='h-6 w-6' />
            <span className='sr-only'>Home</span>
          </Link>
          <h1 className='font-semibold text-lg'>My Account</h1>
        </header>

        <ProfileCards />
      </div>
    </div>
  );
}

function HeartIcon(props: any) {
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
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
    </svg>
  );
}

function MapPinIcon(props: any) {
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
      <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
      <circle cx='12' cy='10' r='3' />
    </svg>
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

function MessageSquareIcon(props: any) {
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
      <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
    </svg>
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

function SettingsIcon(props: any) {
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
      <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
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
      <circle cx='8' cy='21' r='1' />
      <circle cx='19' cy='21' r='1' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </svg>
  );
}
