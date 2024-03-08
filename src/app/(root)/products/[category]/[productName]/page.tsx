import { db } from '@/lib/db';
import Image from 'next/image';
import CommentSection from '@/app/(root)/products/_components/comment/comment-section';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { auth } from '@/auth/auth';
import CartBtn from './cart-btn';
import StarRating from '@/components/shared/start-rating';
import { Label } from '@/components/ui/label';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group'; // Import the StarRating component4
import SubmitButton from '@/components/shared/submit-btn';
import { getCurrentUser } from '@/lib/auth';
import WishlistButton from './wishlist-button';

export default async function Page({
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
            <div>{product.description}</div>
            <div className='flex items-around'>
              <StarRating
                ratings={product.reviews.map((review) => review.rating)}
              />
              <div className='text-4xl font-bold ml-auto'>
                {formatPrice(product.price)}
              </div>
            </div>
            <div className='flex flex-col gap-2 lg:flex-row'>
              {product.inStock ? (
                <CartBtn productId={product.id} session={session} />
              ) : (
                <Button
                  disabled
                  size='lg'
                  className='w-full cursor-not-allowed'>
                  Out of Stock for now
                </Button>
              )}
              <WishlistButton productId={product.id} session={session} />
              <Button size='lg' variant='outline'>
                Share
              </Button>
            </div>
            <div className='grid gap-2'>
              <Label className='text-base' htmlFor='color'>
                Color
              </Label>
              <RadioGroup
                className='flex items-center gap-2'
                defaultValue='black'
                id='color'>
                <Label
                  className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='color-black'>
                  <RadioGroupItem id='color-black' value='black' />
                  Black
                </Label>
                <Label
                  className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='color-white'>
                  <RadioGroupItem id='color-white' value='white' />
                  White
                </Label>
                <Label
                  className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                  htmlFor='color-blue'>
                  <RadioGroupItem id='color-blue' value='blue' />
                  Blue
                </Label>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      <CommentSection reviews={product.reviews} productId={product.id} />
    </main>
  );
}
