import SalesInfo from './_components/sales-info';
import OrdersTable from './_components/orders-table';
import OrderDetails from './_components/order-details';
import { db } from '@/lib/db';
import { calculateTotalWithTaxAndShipping } from '@/lib/utils';

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: {
    orderId?: string;
  };
}) {
  const orderId = searchParams?.orderId || '';

  const fixedOrderId = `#${orderId}`;

  const orders = await db.order.findMany({ include: { items: true } });

  const order = await db.order.findFirst({
    where: { digitId: fixedOrderId },
    include: { items: true },
  });

  const user = await db.user.findFirst({
    where: { id: order?.userId },
    include: { addresses: true },
  });

  let orderItemsPricesAndQuantity: { price: number; quantity: number }[] = [];

  if (order && order.items) {
    orderItemsPricesAndQuantity = order.items.map((item) => ({
      price: item.price,
      quantity: item.quantity,
    }));
  }

  const { subTotal, total, tax, shipping } = calculateTotalWithTaxAndShipping(
    orderItemsPricesAndQuantity
  );

  const orderInfo = {
    subTotal,
    total,
    tax,
    shipping,
  };

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
            <SalesInfo />
            <OrdersTable />
          </div>
          {order ? (
            <OrderDetails order={order} user={user!} orderInfo={orderInfo} />
          ) : (
            <OrderDetails
              order={orders[0]}
              user={user!}
              orderInfo={orderInfo}
            />
          )}
        </main>
      </div>
    </div>
  );
}
