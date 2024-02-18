'use client';

import { ShoppingCart } from 'lucide-react';
import { useState, useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { Session } from 'next-auth';
import { toast } from 'sonner';
import { addToCartAction } from './add-to-cart-action';

export default function CartBtn({
  productId,
  session,
}: {
  productId: string;
  session: Session | null;
}) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const addToCartHandler = async () => {
    if (!session) {
      toast.warning('Please sign in to add to cart');
    } else {
      setSuccess(false);

      startTransition(async () => {
        await addToCartAction(productId);
        setSuccess(true);
        toast.success('Added to cart');
      });
    }
  };

  return (
    <Button className='w-full' onClick={addToCartHandler} disabled={isPending}>
      <ShoppingCart className='mr-2 h-4 w-4' /> Add To Cart
    </Button>
  );
}
