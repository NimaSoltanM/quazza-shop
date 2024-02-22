import { db } from '@/lib/db';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function Numbers() {
  const productCount = await db.product.count();
  const usersCount = await db.user.count();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className='text-lg font-semibold'>Number of Products</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-500'>{productCount}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className='text-lg font-semibold'>Number of Orders</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-500'>120</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className='text-lg font-semibold'>Number of Customers</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-500'>{usersCount}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className='text-lg font-semibold'>Revenue</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-500'>$1500</p>
        </CardContent>
      </Card>
    </>
  );
}
