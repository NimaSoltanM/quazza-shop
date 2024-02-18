import { auth } from '@/auth/auth';

export const getCurrentUserId = async () => {
  'use server';

  const session = await auth();

  if (!session) return;

  const id = session.user?.id;

  return id;
};

export const getCurrentUser = async () => {
  'use server';

  const session = await auth();

  if (!session) return;

  const user = session.user;

  return user;
};
