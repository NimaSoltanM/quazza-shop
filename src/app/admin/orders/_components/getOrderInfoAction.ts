'use server';

import { db } from '@/lib/db';

export async function getOrderInfoAction(orderId: string) {
  const fixedOrderId = `#${orderId}`;

  const order = await db.order.findFirst({
    where: { digitId: fixedOrderId },
    include: { items: true },
  });

  return order;
}
