import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';

export default function Component() {
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
        <div className='border shadow-sm rounded-lg p-2'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Order</TableHead>
                <TableHead className='min-w-[150px]'>Customer</TableHead>
                <TableHead className='hidden md:table-cell'>Channel</TableHead>
                <TableHead className='hidden md:table-cell'>Date</TableHead>
                <TableHead className='text-right'>Total</TableHead>
                <TableHead className='hidden sm:table-cell'>Status</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>#3210</TableCell>
                <TableCell>Olivia Martin</TableCell>
                <TableCell className='hidden md:table-cell'>
                  Online Store
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  February 20, 2022
                </TableCell>
                <TableCell className='text-right'>$42.25</TableCell>
                <TableCell className='hidden sm:table-cell'>Shipped</TableCell>
                <TableCell className='text-right'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <MoreHorizontalIcon className='w-4 h-4' />
                        <span className='sr-only'>Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>#3209</TableCell>
                <TableCell>Ava Johnson</TableCell>
                <TableCell className='hidden md:table-cell'>Shop</TableCell>
                <TableCell className='hidden md:table-cell'>
                  January 5, 2022
                </TableCell>
                <TableCell className='text-right'>$74.99</TableCell>
                <TableCell className='hidden sm:table-cell'>Paid</TableCell>
                <TableCell className='text-right'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size='icon' variant='ghost'>
                        <MoreHorizontalIcon className='w-4 h-4' />
                        <span className='sr-only'>Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Customer details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}

function MoreHorizontalIcon(props: any) {
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
      <circle cx='12' cy='12' r='1' />
      <circle cx='19' cy='12' r='1' />
      <circle cx='5' cy='12' r='1' />
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
