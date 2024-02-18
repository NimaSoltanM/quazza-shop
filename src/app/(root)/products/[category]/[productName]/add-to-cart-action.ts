'use server';

import { auth } from '@/auth/auth';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const addToCartAction = async (productId: string) => {
  const session = await auth();

  const user = session?.user;

  if (!user) return;

  const userId = user.id;

  await db.$transaction(async (tx) => {
    let cart = await tx.cart.findFirst({
      where: {
        userId,
      },
    });

    if (!cart) {
      cart = await tx.cart.create({
        data: {
          userId,
        },
      });
    }

    const product = await tx.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw Error('Invalid product');
    }

    // Check for existing item INSIDE transaction
    const existingItem = await tx.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });

    if (existingItem) {
      // Increment quantity
      await tx.cartItem.update({
        where: {
          id: existingItem.id,
        },
        data: {
          quantity: existingItem.quantity + 1,
        },
      });
    } else {
      // Create new item
      await tx.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity: 1,
        },
      });
    }
  });

  revalidatePath('/cart');
};
