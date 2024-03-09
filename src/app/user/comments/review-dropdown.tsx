'use client';

import { removeUserReview } from '@/actions/user/reviews';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { revalidatePath } from 'next/cache';
import { useTransition } from 'react';
import { toast } from 'sonner';

export default function ReviewDropdown({ reviewId }: { reviewId: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={async () => {
        startTransition(async () => {
          await removeUserReview(reviewId);
          toast.success('Review removed');
        });
      }}>
      Remove
    </DropdownMenuItem>
  );
}
