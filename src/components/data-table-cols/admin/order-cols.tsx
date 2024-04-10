'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

interface Order {
  orderId: string | null;
  customerName: string | null;
  dateJoind: string | null;
  total: number | null;
  status: string | null;
}

export const orderCols: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order',
    filterFn: 'includesString',
  },
  {
    accessorKey: 'customerName',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'dataJoined',
    header: 'Date Joined',
  },
  {
    accessorKey: 'total',
    header: 'Total',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];
