import { auth } from '@/auth/auth';
import { db } from './db';

export const getCurrentUserDetail = async () => {
  'use server';

  const session = await auth();

  if (!session) return;

  const user = await db.user.findUnique({
    where: {
      id: session.user?.id,
    },
    include: {
      UserDetails: {
        include: {
          cart: true,
          reviews: true,
          wishlist: true,
          orders: true,
        },
      },
    },
  });

  return user;
};
