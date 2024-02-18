import { auth } from '@/auth/auth';
import { db } from '@/lib/db';

export default async function Page() {
  const session = await auth();
  if (!session) return;

  const cart = await db.userDetails.findUnique({
    where: { userId: session.user?.id },
  });

  return <div></div>;
}
