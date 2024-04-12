'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

interface Product {
  imageUrl: string;
  name: string;
  status: string;
  price: string;
}

export const customerColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'imageUrl',
    header: 'Date Joined',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
];
