import { auth } from '@/auth/auth';
import { getCurrentUserId } from '@/lib/auth';
import { db } from '@/lib/db';

export const addReviewAction = async (
  productId: string,
  comment: string,
  rating: number
) => {
  'use server';

  if (!productId || !rating) {
    return;
  }
  const session = await auth();

  if (!session?.user?.name) {
    throw new Error('no session');
  }

  const userId = await getCurrentUserId();
  if (!userId) {
    throw new Error('no user');
  }

  await db.review.create({
    data: {
      productId,
      comment,
      rating,
      username: session.user.name,
      userId,
    },
  });
};
