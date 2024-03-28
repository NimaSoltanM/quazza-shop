'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const removeUserReview = async (id: number) => {
  await db.review.delete({
    where: {
      id,
    },
  });

  revalidatePath('/user/comments');
};
