import { db } from '@/lib/db';
import { DataTable } from '@/components/ui/data-table';
import { orderCols } from '@/components/data-table-cols/admin/order-cols';

export default async function Page() {
  async function getUserName(userId: string) {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    return user?.name;
  }

  const orders = await db.order.findMany({
    include: {
      items: true,
    },
  });

  const modifiedOrdersPromises = orders.map(async (order) => {
    const customerName = await getUserName(order.userId);

    return {
      orderId: order.digitId,
      customerName,
      dataJoined: order.createdAt.toDateString(),
      total: order.total,
      status: order.status,
    };
  });

  const modifiedOrders = await Promise.all(modifiedOrdersPromises);

  return <DataTable columns={orderCols} data={modifiedOrders} />;
}
