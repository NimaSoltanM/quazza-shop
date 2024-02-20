/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kVQEOy13bBk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from '@/components/ui/table';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='flex flex-col'>
      <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
        <Link
          className='lg:hidden flex items-center gap-2 font-semibold'
          href='#'>
          <Package2Icon className='h-6 w-6' />
          <span className=''>Acme Inc</span>
        </Link>
        <Button className='rounded-lg border' size='icon' variant='ghost'>
          <SearchIcon className='h-4 w-4' />
          <span className='sr-only'>Toggle search</span>
        </Button>
        <div className='flex-1' />
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
      </header>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='flex items-center'>
          <h1 className='font-semibold text-lg md:text-2xl'>Customers</h1>
          <div className='ml-auto flex gap-4'>
            <Button>Add New Customer</Button>
            <Button>Export Customer List</Button>
          </div>
        </div>
        <div className='border shadow-sm rounded-lg'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Date Joined</TableHead>
                <TableHead>Order Count</TableHead>
                <TableHead>Total Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody />
          </Table>
        </div>
      </main>
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
