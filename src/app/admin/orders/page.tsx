import SalesInfo from './_components/sales-info';
import OrdersTable from './_components/orders-table';
import OrderDetails from './_components/order-details';

export default function Dashboard({
  searchParams,
}: {
  searchParams?: {
    orderId?: string;
  };
}) {
  const orderId = searchParams?.orderId || '';

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <div>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
            <SalesInfo />
            <OrdersTable />
          </div>
          <OrderDetails orderId={orderId} />
        </main>
      </div>
    </div>
  );
}
