import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from '@/components/ui/card';
import Image from 'next/image';
import { db } from '@/lib/db';
import { slugifyString } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

export default async function FeaturedProducts() {
  const products = await db.product.findMany({
    take: 3,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      category: true,
    },
  });

  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Featured Products
            </h2>
            <p className='mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Check out our selection of popular tech products. These items are
              selling fast, so grab yours today!
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
          {products.map((prod) => (
            <Card key={prod.id}>
              <CardContent className='flex flex-col items-center gap-4'>
                <Image
                  alt='Product Image'
                  className='aspect-square object-cover w-full overflow-hidden'
                  height='400'
                  src={prod.imageUrl}
                  width='400'
                />
                <CardTitle>{prod.name}</CardTitle>
                <CardDescription>{formatPrice(prod.price)}</CardDescription>

                <Button asChild>
                  <Link
                    className='mt-auto'
                    href={`/products/${prod.category.name}/${slugifyString(
                      prod.name
                    )}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
