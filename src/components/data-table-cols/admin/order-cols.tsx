'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

interface Order {
  orderId: string;
  customerName: any;
  type: string;
  status: string;
  date: string;
  total: string;
}

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
];
