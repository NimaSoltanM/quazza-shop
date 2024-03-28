'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const changeCartItemQuantityAction = async (
  id: string,
  newQuantity: number
) => {
  // Start transaction
  await db.$transaction(async (tx) => {
    // Validate cart item exists
    const item = await tx.cartItem.findUnique({
      where: { id },
    });

    if (!item) {
      throw new Error('Cart item not found');
    }

    if (newQuantity === 0) {
      // Delete item
      await tx.cartItem.delete({
        where: { id },
      });
    } else if (newQuantity > 0) {
      // Update quantity
      await tx.cartItem.update({
        where: { id },
        data: { quantity: newQuantity },
      });
    } else {
      throw new Error('Invalid quantity');
    }
  });

  revalidatePath('/cart');
};

export const deleteCartItemAction = async (id: string) => {
  await db.cartItem.delete({ where: { id } });
  revalidatePath('/cart');
};
