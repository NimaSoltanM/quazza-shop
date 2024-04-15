import { db } from '@/lib/db';

export async function calculateSalesData() {
  const currentDate = new Date();
  const currentWeekStart = new Date(currentDate);
  currentWeekStart.setDate(
    currentWeekStart.getDate() - currentWeekStart.getDay()
  );
  currentWeekStart.setHours(0, 0, 0, 0);

  const previousWeekStart = new Date(currentWeekStart);
  previousWeekStart.setDate(previousWeekStart.getDate() - 7);

  const currentMonthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const previousMonthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );

  const currentWeekOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: currentWeekStart,
        lt: new Date(currentWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000),
      },
    },
    include: {
      items: true,
    },
  });

  const previousWeekOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: previousWeekStart,
        lt: currentWeekStart,
      },
    },
    include: {
      items: true,
    },
  });

  const currentMonthOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: currentMonthStart,
        lt: new Date(
          currentMonthStart.getFullYear(),
          currentMonthStart.getMonth() + 1,
          1
        ),
      },
    },
    include: {
      items: true,
    },
  });

  const previousMonthOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: previousMonthStart,
        lt: currentMonthStart,
      },
    },
    include: {
      items: true,
    },
  });

  const thisWeekTotal = currentWeekOrders.reduce(
    (total, order) => total + order.total,
    0
  );
  const previousWeekTotal = previousWeekOrders.reduce(
    (total, order) => total + order.total,
    0
  );
  const weekPercentChange =
    previousWeekTotal === 0
      ? 100
      : ((thisWeekTotal - previousWeekTotal) / previousWeekTotal) * 100;

  const thisMonthTotal = currentMonthOrders.reduce(
    (total, order) => total + order.total,
    0
  );
  const previousMonthTotal = previousMonthOrders.reduce(
    (total, order) => total + order.total,
    0
  );
  const monthPercentChange =
    previousMonthTotal === 0
      ? 100
      : ((thisMonthTotal - previousMonthTotal) / previousMonthTotal) * 100;

  return {
    thisWeekTotal,
    weekPercentChange,
    thisMonthTotal,
    monthPercentChange,
  };
}
