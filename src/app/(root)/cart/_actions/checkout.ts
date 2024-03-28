import { getCurrentUserId } from '@/lib/auth';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const checkoutAction = async () => {
  'use server';

  const userId = await getCurrentUserId();

  if (!userId) return;

  //generate a 5 digit number with # at start like: #81910
  const generateNumber = () => {
    const num = Math.floor(Math.random() * 90000) + 10000;
    return `#${num}`;
  };

  // Get the current user's cart
  const cart = await db.cart.findFirst({
    where: {
      userId: userId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!cart) return;

  let total = 0;
  for (const item of cart?.items) {
    total += item.product.price * item.quantity;
  }

  // Create a new order
  const order = await db.order.create({
    data: {
      userId: userId,
      total,
      status: 'PENDING',
      digitId: generateNumber(),
    },
  });

  // Loop through cart items and add to order
  if (cart)
    for (const cartItem of cart.items) {
      // Create a new order item
      await db.orderItem.create({
        data: {
          productId: cartItem.productId,
          name: cartItem.product.name,
          price: cartItem.product.price,
          quantity: cartItem.quantity,
          order: { connect: { id: order.id } },
        },
      });
    }

  // Clear the cart
  if (cart) {
    await db.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });
  }

  revalidatePath('/cart');
};
