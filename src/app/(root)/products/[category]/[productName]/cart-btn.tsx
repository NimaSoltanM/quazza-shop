'use client';

import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

export default function CartBtn({
  productId,
  session,
}: {
  productId: string;
  session: Session | null;
}) {
  const addToCartHandler = async () => {
    if (!session) {
      toast.warning('Please sign in to add to cart');
    } else {
    }
  };

  return (
    <Button className='w-full' onClick={addToCartHandler}>
      <ShoppingCart className='mr-2 h-4 w-4' /> Add To Cart
    </Button>
  );
}
