'use client';

import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { CartItem } from '@prisma/client';
import { useTransition } from 'react';
import { changeCartItemQuantityAction } from './_actions/change-quantity';

export default function QuantitySelect({ cartItem }: { cartItem: CartItem }) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];

  for (let index = 1; index <= 99; index++) {
    const key = Math.random().toString(36).substring(2, 15);
    quantityOptions.push(
      <SelectItem value={index.toString()} key={key}>
        {index}
      </SelectItem>
    );
  }

  const changeQuantityHandler = async (value: string) => {
    const newQuantity = parseInt(value);
    startTransition(async () => {
      await changeCartItemQuantityAction(cartItem.id, newQuantity);
    });
  };

  return (
    <Select
      disabled={isPending}
      defaultValue={cartItem.quantity.toString()}
      onValueChange={(e) => changeQuantityHandler(e)}>
      <SelectTrigger className='md:w-1/2 ml-auto'>
        <SelectValue placeholder='Select' />
      </SelectTrigger>
      <SelectContent>{quantityOptions}</SelectContent>
    </Select>
  );
}
