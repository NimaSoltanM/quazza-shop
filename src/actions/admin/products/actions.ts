'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const removeProductAction = async (productId: string) => {
  await db.product.delete({ where: { id: productId } });

  revalidatePath('/admin/product');
  revalidatePath('/products');
};

export const changeProductStatusAction = async (productId: string) => {
  const product = await db.product.findUnique({ where: { id: productId } });

  if (product) {
    const updatedInStockStatus = !product.inStock;

    await db.product.update({
      where: { id: productId },
      data: {
        inStock: updatedInStockStatus,
      },
    });
  } else {
    throw new Error('Product not found');
  }

  revalidatePath('/admin/product');
  revalidatePath('/products');
};
