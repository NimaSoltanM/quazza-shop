import StarRating from '@/components/shared/start-rating';
import { Button } from '@/components/ui/button';
import { getCurrentUser, getCurrentUserId } from '@/lib/auth';
import { db } from '@/lib/db';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import SubmitButton from '@/components/shared/submit-btn';
import { revalidatePath } from 'next/cache';

export default async function Page() {
  const userId = await getCurrentUserId();

  const wishlist = await db.wishlist.findFirst({
    where: {
      userId,
    },
    include: {
      items: {
        include: {
          product: {
            include: {
              reviews: true,
            },
          },
        },
      },
    },
  });
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-bold'>My Wishlist</h1>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {wishlist?.items.map((item) => (
          <div className='flex items-start gap-4' key={item.id}>
            <Image
              alt='Product image'
              className='aspect-square rounded-lg object-cover border border-gray-200 w-24 dark:border-gray-800'
              height='200'
              src={item.product.imageUrl}
              width='200'
            />
            <div className='grid gap-2.5'>
              <div className='flex items-start gap-2'>
                <h2 className='font-semibold text-lg sm:text-xl'>
                  {item.product.name}
                </h2>
                <form
                  action={async () => {
                    'use server';

                    await db.wishlistItem.delete({
                      where: {
                        id: item.id,
                      },
                    });

                    revalidatePath('/profile/wishlist');
                  }}>
                  <SubmitButton
                    className='h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800'
                    size='icon'
                    variant='ghost'>
                    <XIcon className='w-4 h-4' />
                  </SubmitButton>
                </form>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <StarRating
                  ratings={item.product.reviews.map((review) => review.rating)}
                />
                <span className='ml-auto font-semibold'>
                  {formatPrice(item.product.price)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
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

function XIcon(props: any) {
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
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}
