'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface Order {
  orderId: string;
  customerName: any;
  type: string;
  status: string;
  date: string;
  total: string;
}

const addOrderIdToUrl = (id: string) => {
  const orderId = id.replace('#', '');

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('orderId', orderId);
  window.history.replaceState({}, '', `?${searchParams.toString()}`);
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
    cell(props) {
      //@ts-ignore
      const value = props.getValue();

      if (value === 'pending')
        return <Badge variant='default'>{value.toUpperCase()}</Badge>;
      else if (value === 'cancelled')
        return <Badge variant='destructive'>{value.toUpperCase()}</Badge>;
      else if (value === 'completed')
        return <Badge variant='secondary'>{value.toUpperCase()}</Badge>;
    },
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
