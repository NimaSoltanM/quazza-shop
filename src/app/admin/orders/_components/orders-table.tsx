import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataTable } from '@/components/ui/data-table';
import { db } from '@/lib/db';
import { orderCols } from '@/components/data-table-cols/admin/order-cols';
import { formatPrice } from '@/lib/utils';
import ExportButton from '@/components/shared/export-button';

export default async function OrdersTable() {
  async function getUserName(userId: string) {
    const user = await db.user.findUnique({ where: { id: userId } });
    return user?.name;
  }

  const currentDate = new Date();

  const getOrdersInRange = (range: 'week' | 'month' | 'year') => {
    let start, end;

    switch (range) {
      case 'week':
        start = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - 7
        );
        end = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        );
        break;
      case 'month':
        start = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          currentDate.getDate()
        );
        end = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        );
        break;
      case 'year':
        start = new Date(
          currentDate.getFullYear() - 1,
          currentDate.getMonth(),
          currentDate.getDate()
        );
        end = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        );
        break;
      default:
        throw new Error('Invalid range provided');
    }

    return db.order.findMany({
      where: {
        createdAt: {
          gte: start,
          lt: end,
        },
      },
      include: {
        items: true,
      },
    });
  };

  const getModifiedOrders = async (range: 'week' | 'month' | 'year') => {
    const orders = await getOrdersInRange(range);
    const modifiedOrdersPromises = orders.map(async (order) => {
      const customerName = await getUserName(order.userId);
      return {
        orderId: order.digitId,
        type: 'Sale',
        status: order.status.toLowerCase(),
        customerName,
        date: order.createdAt.toDateString(),
        total: formatPrice(order.total),
      };
    });
    return Promise.all(modifiedOrdersPromises);
  };

  const lastWeekOrders = await getModifiedOrders('week');
  const lastMonthOrders = await getModifiedOrders('month');
  const lastYearOrders = await getModifiedOrders('year');

  return (
    <Tabs defaultValue='week'>
      <div className='flex items-center'>
        <TabsList>
          <TabsTrigger value='week'>Week</TabsTrigger>
          <TabsTrigger value='month'>Month</TabsTrigger>
          <TabsTrigger value='year'>Year</TabsTrigger>
        </TabsList>
        <div className='ml-auto'>
          <ExportButton data={lastYearOrders} />
        </div>
      </div>
      <TabsContent value='week'>
        <DataTable
          data={lastWeekOrders}
          columns={orderCols}
          colSearch='orderId'
        />
      </TabsContent>
      <TabsContent value='month'>
        <DataTable
          data={lastMonthOrders}
          columns={orderCols}
          colSearch='orderId'
        />
      </TabsContent>
      <TabsContent value='year'>
        <DataTable
          data={lastYearOrders}
          columns={orderCols}
          colSearch='orderId'
        />
      </TabsContent>
    </Tabs>
  );
}
