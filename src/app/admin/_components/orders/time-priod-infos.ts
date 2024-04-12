import { db } from '@/lib/db';

export async function getThisWeekOrdersValues() {
  const currentDate = new Date();
  const startOfWeek = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay()
  );
  const endOfWeek = new Date(startOfWeek.getTime() + 6 * 24 * 60 * 60 * 1000);

  const startOfLastWeek = new Date(
    startOfWeek.getTime() - 7 * 24 * 60 * 60 * 1000
  );
  const endOfLastWeek = startOfWeek;

  const thisWeekOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: startOfWeek,
        lt: endOfWeek,
      },
    },
    select: {
      total: true,
    },
  });

  const lastWeekOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: startOfLastWeek,
        lt: endOfLastWeek,
      },
    },
    select: {
      total: true,
    },
  });

  const thisWeekTotal = thisWeekOrders.reduce(
    (acc, order) => acc + order.total,
    0
  );
  const lastWeekTotal = lastWeekOrders.reduce(
    (acc, order) => acc + order.total,
    0
  );

  //round this up to 2 digits
  const rawPercentChange =
    ((thisWeekTotal - lastWeekTotal) / lastWeekTotal) * 100;
  const weekPercentChange = Math.round(rawPercentChange * 100) / 100;

  return { thisWeekTotal, weekPercentChange };
}

export async function getThisMonthOrdersValues() {
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const startOfLastMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );
  const endOfLastMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );

  const thisMonthOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: startOfMonth,
        lt: endOfMonth,
      },
    },
    select: {
      total: true,
    },
  });

  const lastMonthOrders = await db.order.findMany({
    where: {
      createdAt: {
        gte: startOfLastMonth,
        lt: endOfLastMonth,
      },
    },
    select: {
      total: true,
    },
  });

  const thisMonthTotal = thisMonthOrders.reduce(
    (acc, order) => acc + order.total,
    0
  );
  const lastMonthTotal = lastMonthOrders.reduce(
    (acc, order) => acc + order.total,
    0
  );

  const rawPercentChange =
    lastMonthTotal === 0
      ? thisMonthTotal * 100
      : ((thisMonthTotal - lastMonthTotal) / lastMonthTotal) * 100;
  const monthPercentChange = Math.round(rawPercentChange * 100) / 100;

  //export percentChange as monthPercentageChange
  return { thisMonthTotal, monthPercentChange };
}
