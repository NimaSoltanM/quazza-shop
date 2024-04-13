import { getCurrentUserId } from '@/lib/auth';
import { db } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import QuantitySelect from './quantity-select';
import RemoveBtn from './remove-btn';
import { calculateTotalWithTaxAndShipping, formatPrice } from '@/lib/utils';
import { checkoutAction } from './_actions/checkout';

export default async function Page() {
  const userId = await getCurrentUserId();

  const cart = await db.cart.findFirst({
    where: {
      userId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  const cartItems = cart?.items || [];

  let cartItemsPricesAndQuantity: { price: number; quantity: number }[] = [];

  if (cart && cart.items) {
    cartItemsPricesAndQuantity = cart.items.map((item) => ({
      price: item.product.price,
      quantity: item.quantity,
    }));
  }

  const { subTotal, total, tax, shipping } = calculateTotalWithTaxAndShipping(
    cartItemsPricesAndQuantity
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <div className='h-[80vh] flex flex-col justify-center items-center gap-4'>
          <p>No Item has been found</p>
          <Link href='/products' className='underline'>
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className='p-4 md:p-8'>
          <h1 className='text-2xl md:text-3xl font-semibold mb-6'>
            Shopping Cart
          </h1>
          <div className='border rounded-lg overflow-hidden'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className='text-right'>Price</TableHead>
                  <TableHead className='text-right'>Quantity</TableHead>
                  <TableHead className='text-right'>Total</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {cartItems.map((cartItem) => (
                  <TableRow key={cartItem.id}>
                    <TableCell>
                      <div className='flex items-center max-sm:flex-col gap-4'>
                        <Image
                          alt='Product image'
                          className='aspect-square rounded-md object-cover'
                          height='64'
                          src={cartItem.product.imageUrl}
                          width='64'
                        />
                        <span className='font-medium'>
                          {cartItem.product.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className='text-right'>
                      {formatPrice(cartItem.product.price)}
                    </TableCell>
                    <TableCell>
                      <QuantitySelect cartItem={cartItem} />
                    </TableCell>
                    <TableCell className='text-right'>
                      {formatPrice(cartItem.quantity * cartItem.product.price)}
                    </TableCell>
                    <TableCell className='text-right'>
                      <RemoveBtn id={cartItem.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className='mt-8'>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between mb-2'>
                  <span>Subtotal</span>
                  <span className='font-semibold'>{formatPrice(subTotal)}</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Taxes (5%)</span>
                  <span className='font-semibold'>{formatPrice(tax)}</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Shipping</span>
                  <span className='font-semibold'>{formatPrice(shipping)}</span>
                </div>
                <div className='flex justify-between border-t border-gray-200 pt-2 mt-2'>
                  <span className='font-bold'>Total</span>
                  <span className='font-bold'>
                    {formatPrice(subTotal + tax + shipping)}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <form className='w-full' action={checkoutAction}>
                  <Button className='w-full' type='submit'>
                    Proceed to Checkout
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
