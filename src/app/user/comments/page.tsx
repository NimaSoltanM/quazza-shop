/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZPg3BJ0DX32
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { db } from '@/lib/db';
import { getCurrentUser, getCurrentUserId } from '@/lib/auth';
import ReviewDropdown from './review-dropdown';

export default async function Page() {
  const userId = await getCurrentUserId();

  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      reviews: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Comments</CardTitle>
        <CardDescription>
          View or remove comments you&apos;ve left on our products
        </CardDescription>
      </CardHeader>
      <CardContent className='p-4'>
        <div className='grid gap-4'>
          {user?.reviews.map((review) => (
            <div key={review.id}>
              <div className='flex items-start gap-4' key={review.id}>
                <div className='flex-1'>
                  <div className='grid gap-2'>
                    <div>
                      <Link className='font-medium underline' href='#'>
                        {review.product.name}
                      </Link>
                    </div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      Posted on {review.createdAt.toDateString()}
                    </div>
                  </div>
                  <div className='mt-4 text-sm text-gray-700 dark:text-gray-300'>
                    {review.comment}
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontalIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <ReviewDropdown reviewId={review.id} />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className='border-t border-gray-200 dark:border-gray-800' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function MoreHorizontalIcon(props: any) {
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
      <circle cx='12' cy='12' r='1' />
      <circle cx='19' cy='12' r='1' />
      <circle cx='5' cy='12' r='1' />
    </svg>
  );
}
