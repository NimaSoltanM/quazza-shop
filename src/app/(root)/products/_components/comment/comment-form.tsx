import SubmitButton from '@/components/shared/submit-btn';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { revalidatePath } from 'next/cache';
import { addReviewAction } from '../../_actions/review-actions';

export default async function CommentForm({
  productId,
}: {
  productId: string;
}) {
  const addComment = async (formData: FormData) => {
    'use server';

    const comment = formData.get('comment')?.toString();
    const rating = Number(formData.get('rating'));

    if (!comment || !rating) return;

    await addReviewAction(productId, comment, rating);

    revalidatePath(`/products`);
  };

  return (
    <div className='grid gap-4 md:gap-10 items-start'>
      <h2 className='font-bold text-2xl lg:text-3xl'>Leave a comment</h2>
      <form className='grid gap-4 md:gap-10' action={addComment}>
        <textarea
          name='comment'
          required
          className='border border-gray-200 w-full rounded-lg p-2 dark:border-gray-800'
          placeholder='Your comment'
        />
        <Select required name='rating'>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Your score' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>1</SelectItem>
            <SelectItem value='2'>2</SelectItem>
            <SelectItem value='3'>3</SelectItem>
            <SelectItem value='4'>4</SelectItem>
            <SelectItem value='5'>5</SelectItem>
          </SelectContent>
        </Select>
        <SubmitButton>Submit Comment</SubmitButton>
      </form>
    </div>
  );
}
