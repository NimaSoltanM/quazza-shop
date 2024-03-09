'use client';

import {
  changeProductStatusAction,
  removeProductAction,
} from '@/actions/admin/products/actions';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { TableCell } from '@/components/ui/table';

import { useTransition } from 'react';
import { toast } from 'sonner';

export default function DropdownActions({ productId }: { productId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size='icon' variant='ghost'>
            <MoreHorizontalIcon className='w-4 h-4' />
            <span className='sr-only'>Actions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
            onClick={() => {
              startTransition(async () => {
                await removeProductAction(productId);
                toast.success('Product Removed');
              });
            }}>
            Remove Product
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              startTransition(async () => {
                await changeProductStatusAction(productId);
                toast.success('Product Status Changed ');
              });
            }}>
            Change Status
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
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
