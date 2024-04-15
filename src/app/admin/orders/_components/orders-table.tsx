import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataTable } from '@/components/ui/data-table';
import { db } from '@/lib/db';
import { orderCols } from '@/components/data-table-cols/admin/order-cols';
import { formatPrice } from '@/lib/utils';
import ExportButton from '@/components/shared/export-button';
import { getOrdersData } from './order-infos';

export default async function OrdersTable() {
  const { lastWeekOrders, lastMonthOrders, lastYearOrders } =
    await getOrdersData();

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
