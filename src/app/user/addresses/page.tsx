import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { getCurrentUserId } from '@/lib/auth';
import Link from 'next/link';

export default async function Component() {
  const id = await getCurrentUserId();

  const user = await db.user.findUnique({
    where: {
      id,
    },
    include: {
      addresses: true,
    },
  });

  return (
    <div>
      <div className='flex justify-between items-center my-8 mx-8'>
        <h1 className='font-bold'>My Addresses</h1>
        <Button className='ml-auto' asChild>
          <Link href='/user/addresses/add-address'>Add new address</Link>
        </Button>
      </div>
      <CardContent>
        <div className='grid gap-4 md:grid-cols-2'>
          {user?.addresses.map((address) => (
            <Card key={address.id}>
              <CardHeader className='pb-4'>
                <CardTitle>{address.name}</CardTitle>
                <CardDescription>
                  {address.zip}, {address.street1} St, {address.street2} St,{' '}
                  {address.city} City, {address.state},{' '}
                  {address.country.toUpperCase()}
                </CardDescription>
              </CardHeader>
              <CardFooter className='flex gap-4'>
                <Button size='sm'>Edit</Button>
                <Button size='sm' variant='outline'>
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
