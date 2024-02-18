'use client';

import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { useTransition } from 'react';
import { deleteCartItemAction } from './cart-action';

export default function RemoveBtn({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const removeProduct = async () => {
    startTransition(async () => {
      await deleteCartItemAction(id);
      window.location.reload();
    });
  };

  return (
    <Button
      size='icon'
      variant='outline'
      disabled={isPending}
      onClick={removeProduct}>
      <Trash width='17' height='17' />
    </Button>
  );
}
