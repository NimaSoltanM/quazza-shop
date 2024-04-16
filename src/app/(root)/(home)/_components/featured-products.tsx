import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/lib/db';
import { slugifyString } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { BackgroundGradient } from '@/components/ui/background-gradient';

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
            <div key={prod.id}>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <Image
                  src={prod.imageUrl}
                  alt='jordans'
                  height='300'
                  width='300'
                  className='object-contain'
                />
                <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
                  {prod.name}
                </p>

                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  The Air Jordan 4 Retro Reimagined Bred will release on
                  Saturday, February 17, 2024.
                </p>

                <Link
                  href={`/products/${slugifyString(
                    prod.category.name
                  )}/${slugifyString(prod.name)}`}>
                  <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                    <span>Buy now </span>
                    <span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
                      {formatPrice(prod.price)}
                    </span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
