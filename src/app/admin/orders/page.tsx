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
import { db } from '@/lib/db';
import { calculatePrice, formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export default async function Page() {
  async function getUserName(userId: string) {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    return user?.name;
  }

  const orders = await db.order.findMany({
    include: {
      items: true,
    },
  });

  return (
    <div className='flex flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='border shadow-sm rounded-lg p-2'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Order</TableHead>
                <TableHead className='min-w-[150px]'>Customer</TableHead>
                <TableHead className='hidden md:table-cell'>Date</TableHead>
                <TableHead className='text-right'>Total</TableHead>
                <TableHead className='hidden sm:table-cell'>Status</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className='font-medium'>{order.digitId}</TableCell>
                  <TableCell>{getUserName(order.userId)}</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {new Date(order.createdAt).toDateString()}
                  </TableCell>
                  <TableCell className='text-right'>
                    {calculatePrice(order.total)}
                  </TableCell>
                  <TableCell className='hidden sm:table-cell'>
                    <Badge>{order.status}</Badge>
                  </TableCell>
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
              ))}
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
