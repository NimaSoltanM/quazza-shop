import { db } from '@/lib/db';
import Image from 'next/image';
import CommentSection from '@/components/products/comment/comment-section';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { auth } from '@/auth/auth';
import CartBtn from './cart-btn';

export default async function Component({
  params: { productName },
}: {
  params: { productName: string };
}) {
  const defaultProductName = productName.replace(/-/g, ' ');

  const product = await db.product.findFirst({
    where: { name: defaultProductName },
    include: { reviews: true },
  });

  const session = await auth();

  if (!product)
    return (
      <main key='1' className='px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start'>
          <div className='grid gap-4 md:gap-10 items-start'>
            <h2 className='font-bold text-2xl lg:text-3xl'>
              Product not found
            </h2>
          </div>
        </div>
      </main>
    );

  return (
    <main key='1' className='px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start'>
        <div className='grid md:grid-cols-5 gap-3 items-start'>
          <div className='md:col-span-4'>
            <Image
              alt='Product Image'
              className='aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800'
              height='600'
              src={product.imageUrl}
              width='600'
            />
          </div>
        </div>
        <div className='grid gap-4 md:gap-10 items-start'>
          <div className='grid gap-4'>
            <h1 className='font-bold text-3xl lg:text-4xl'>{product.name}</h1>
            <div>
              <p>{product.description}</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-0.5'>
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
              </div>
              {product.inStock && (
                <div className='text-4xl font-bold ml-auto'>
                  {formatPrice(product.price)}
                </div>
              )}
            </div>
          </div>

          {product.inStock ? (
            <CartBtn productId={product.id} session={session} />
          ) : (
            <Button disabled size='lg' className='w-full cursor-not-allowed'>
              Out of Stock for now
            </Button>
          )}
        </div>
      </div>
      <CommentSection reviews={product.reviews} productId={product.id} />
    </main>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}
