import SubmitButton from '@/components/shared/submit-btn';
import { db } from '@/lib/db';
import { Session } from 'next-auth';

export default function WishlistButton({
  productId,
  session,
}: {
  productId: string;
  session: Session | null;
}) {
  const addToWishlist = async () => {
    'use server';

    const userId = session?.user?.id;
    if (!userId) return;

    const wishlist = await db.wishlist.findFirst({
      where: { userId },
    });

    if (!wishlist) {
      const newWishlist = await db.wishlist.create({
        data: { userId },
      });
      await db.wishlistItem.create({
        data: { wishlistId: newWishlist.id, productId },
      });
    } else {
      const existingItem = await db.wishlistItem.findFirst({
        where: { wishlistId: wishlist.id, productId },
      });

      if (!existingItem) {
        await db.wishlistItem.create({
          data: { wishlistId: wishlist.id, productId },
        });
      } else {
        return;
      }
    }
  };

  return (
    <form action={addToWishlist}>
      <SubmitButton variant='outline' disabled={!session}>
        Add to wishlist
      </SubmitButton>
    </form>
  );
}
