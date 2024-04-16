import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className='flex h-[90vh] items-center justify-center'>
      <Loader2 className='size-16 animate-spin' />
    </div>
  );
}