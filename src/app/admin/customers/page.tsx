/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kVQEOy13bBk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
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
  TableCell,
} from '@/components/ui/table';
import Image from 'next/image';
import { db } from '@/lib/db';

interface PageProps {
  params: { category: string };
  searchParams?: {
    query?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.query?.toString();

  const whereCondition = {
    email: {
      contains: query,
    },
  };

  const customers = await db.user.findMany({
    where: whereCondition,
  });

  return (
    <>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold text-lg md:text-2xl'>Customers</h1>
          <div className='flex flex-col md:flex-row gap-4'>
            <Button>Add New Customer</Button>
            <Button>Export Customer List</Button>
          </div>
        </div>
        <div className='border shadow-sm rounded-lg'>
          <Table className='w-full'>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date Joined</TableHead>
                <TableHead>Order Count</TableHead>
                <TableHead>Total Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className='font-medium'>{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.emailVerified!.toLocaleDateString()}</TableCell>
                  <TableCell>order count</TableCell>
                  <TableCell>total spent</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
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
