'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { MoreHorizontal } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { revalidatePath } from 'next/cache';

interface Order {
  orderId: string;
  customerName: any;
  type: string;
  status: string;
  date: string;
  total: string;
}

const addOrderIdToUrl = (id: string) => {
  // Remove the '#' from the beginning of the id
  const orderId = id.replace('#', '');

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('orderId', orderId);
  window.history.replaceState({}, '', `?${searchParams.toString()}`);
  window.location.reload();
};

export const orderCols: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order',
  },
  {
    accessorKey: 'customerName',
    header: 'Name',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'total',
    header: 'Total',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { orderId } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => addOrderIdToUrl(orderId)}>
              View order details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
