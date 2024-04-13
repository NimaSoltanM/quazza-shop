import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import { db } from '@/lib/db';
import { calculateTotalWithTaxAndShipping, formatPrice } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

export default async function OrderDetails({ orderId }: { orderId: string }) {
  //TODO: make it client side
  if (orderId === '') {
    return (
      <div>
        <h1>no item selected</h1>
      </div>
    );
  }

  const fixedOrderId = `#${orderId}`;

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

  return (
    <div>
      <Card className='overflow-hidden' x-chunk='dashboard-05-chunk-4'>
        <CardHeader className='flex flex-row items-center bg-muted/50'>
          <div className='grid gap-0.5'>
            <CardTitle className='group flex items-center gap-2 text-lg'>
              Order {order?.digitId}
              <Button
                size='icon'
                variant='outline'
                className='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'>
                <Copy className='h-3 w-3' />
                <span className='sr-only'>Copy Order ID</span>
              </Button>
            </CardTitle>
          </div>
          <div className='ml-auto flex items-center gap-1'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size='icon' variant='outline' className='h-8 w-8'>
                  <MoreVertical className='h-3.5 w-3.5' />
                  <span className='sr-only'>More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Trash</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className='p-6 text-sm'>
          <div className='grid gap-3'>
            <div className='font-semibold'>Order Details</div>
            <ul className='grid gap-3'>
              {order?.items.map((item) => (
                <li className='flex items-center justify-between' key={item.id}>
                  <span className='text-muted-foreground'>
                    {item.name + ' x ' + item.quantity}
                  </span>
                  <span>{formatPrice(item.price)}</span>
                </li>
              ))}
            </ul>
            <Separator className='my-2' />
            <ul className='grid gap-3'>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Subtotal</span>
                <span>{formatPrice(subTotal)}</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </li>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>Tax</span>
                <span>{formatPrice(tax)}</span>
              </li>
              <li className='flex items-center justify-between font-semibold'>
                <span className='text-muted-foreground'>Total</span>
                <span>{formatPrice(total)}</span>
              </li>
            </ul>
          </div>
          <Separator className='my-4' />
          <ScrollArea>
            <div className='font-semibold mb-4'>Shipping Information</div>
            <div className='h-[100px] w-[350px] rounded-md'>
              <address className='flex flex-col gap-y-2 not-italic text-muted-foreground'>
                <span>{user?.name}</span>
                <span>zip code: {user?.addresses[0].zip}</span>
                <span>street 1: {user?.addresses[0].street1}</span>
                <span>street 2: {user?.addresses[0].street2}</span>
                <span>city: {user?.addresses[0].city}</span>
                <span>state: {user?.addresses[0].state}</span>
                <span>country: {user?.addresses[0].country}</span>
              </address>
            </div>
          </ScrollArea>
          <Separator className='my-4' />
          <div className='grid gap-3'>
            <div className='font-semibold'>Customer Information</div>
            <dl className='grid gap-3'>
              <div className='flex items-center justify-between'>
                <dt className='text-muted-foreground'>Customer</dt>
                <dd>{user?.name}</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-muted-foreground'>Email</dt>
                <dd>
                  <a href='mailto:'>{user?.email}</a>
                </dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-muted-foreground'>Phone</dt>
                <dd>
                  <a href='tel:'>+1 234 567 890(fake)</a>
                </dd>
              </div>
            </dl>
          </div>
          <Separator className='my-4' />
          <div className='grid gap-3'>
            <div className='font-semibold'>Payment Information</div>
            <dl className='grid gap-3'>
              <div className='flex items-center justify-between'>
                <dt className='flex items-center gap-1 text-muted-foreground'>
                  <CreditCard className='h-4 w-4' />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div>
        </CardContent>
        <CardFooter className='flex flex-row items-center border-t bg-muted/50 px-6 py-3'>
          <div className='text-xs text-muted-foreground'>
            Created at{' '}
            <time dateTime={order?.createdAt.toDateString()}>
              {order?.createdAt.toDateString()}
            </time>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
