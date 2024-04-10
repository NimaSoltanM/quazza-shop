'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

interface Customer {
  name: string | null;
  email: string | null;
  dataJoined: string | null;
  orderCount: number;
  totalSpent: string;
}

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
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
    accessorKey: 'orderCount',
    header: 'Order Count',
  },
  {
    accessorKey: 'totalSpent',
    header: 'Total Spent',
  },
];
