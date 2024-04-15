import { db } from '@/lib/db';
import { formatPrice } from '@/lib/utils';

export async function getOrdersData() {
  const currentDate = new Date();
  const lastWeekStart = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );
  const lastMonthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );
  const lastYearStart = new Date(currentDate.getFullYear() - 1, 0, 1);

  const lastWeekOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: lastWeekStart,
        lt: currentDate,
      },
    },
    include: {
      User: true,
      items: true,
    },
  });

  const lastMonthOrders = await db.order.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      createdAt: {
        gte: lastMonthStart,
        lt: currentDate,
      },
    },
    include: {
      User: true,
      items: true,
    },
  });

  const lastYearOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: lastYearStart,
        lt: currentDate,
      },
    },
    include: {
      User: true,
      items: true,
    },
  });

  const lastWeekData = lastWeekOrders.map((order) => ({
    orderId: order.digitId,
    type: 'Sale',
    status: order.status.toLowerCase(),
    customerName: order.User.name,
    date: order.createdAt.toDateString(),
    total: formatPrice(order.total),
  }));

  const lastMonthData = lastMonthOrders.map((order) => ({
    orderId: order.digitId,
    type: 'Sale',
    status: order.status.toLowerCase(),
    customerName: order.User.name,
    date: order.createdAt.toDateString(),
    total: formatPrice(order.total),
  }));

  const lastYearData = lastYearOrders.map((order) => ({
    orderId: order.digitId,
    type: 'Sale',
    status: order.status.toLowerCase(),
    customerName: order.User.name,
    date: order.createdAt.toDateString(),
    total: formatPrice(order.total),
  }));

  return {
    lastWeekOrders: lastWeekData,
    lastMonthOrders: lastMonthData,
    lastYearOrders: lastYearData,
  };
}
