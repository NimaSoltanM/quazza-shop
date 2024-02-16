import CommentForm from './comment-form';
import { Button } from '../../ui/button';
import { Review } from '@prisma/client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import SubmitButton from '@/components/shared/submit-btn';

export default async function CommentSection({
  reviews,
  productId,
}: {
  reviews: Review[];
  productId: string;
}) {
  return (
    <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start mt-12'>
      <CommentForm productId={productId} />
      <div className='grid gap-4 md:gap-10 items-start'>
        <h2 className='font-bold text-2xl lg:text-3xl'>Comments</h2>
        <ScrollArea className='h-[300px]'>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                className='border border-gray-200 w-full rounded-lg p-4 dark:border-gray-800 flex flex-col gap-3'
                key={review.id}>
                <div className='flex justify-between'>
                  <h3 className='font-bold'>{review.username}</h3>
                  <Badge
                    variant={review.rating <= 2.5 ? 'destructive' : 'default'}>
                    {review.rating}
                  </Badge>
                </div>
                <p>{review.comment}</p>
                <div className='flex items-center gap-2'>
                  <form
                    action={async () => {
                      'use server';

                      await db.review.update({
                        where: { id: review.id },
                        data: {
                          likes: {
                            increment: 1,
                          },
                        },
                      });

                      revalidatePath('/products');
                    }}>
                    <SubmitButton size='sm' variant='ghost' type='submit'>
                      <ThumbsUpIcon className='w-4 h-4' />
                      Like ({review.likes}){'\n                  '}
                    </SubmitButton>
                  </form>

                  <form
                    action={async () => {
                      'use server';

                      await db.review.update({
                        where: { id: review.id },
                        data: {
                          dislikes: {
                            increment: 1,
                          },
                        },
                      });

                      revalidatePath('/products');
                    }}>
                    <SubmitButton size='sm' variant='ghost' type='submit'>
                      <ThumbsDownIcon className='w-4 h-4' />
                      Dislike ({review.dislikes}){'\n                  '}
                    </SubmitButton>
                  </form>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews found</p>
          )}
        </ScrollArea>
      </div>
    </div>
  );
}
function ThumbsDownIcon(props: any) {
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
      <path d='M17 14V2' />
      <path d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z' />
    </svg>
  );
}

function ThumbsUpIcon(props: any) {
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
      <path d='M7 10v12' />
      <path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z' />
    </svg>
  );
}
