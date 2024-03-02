'use client';

import { Button } from '@/components/ui/button';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function ClearButton({
  hasSearchParams,
}: {
  hasSearchParams: boolean;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  if (!hasSearchParams) return null;

  const params = new URLSearchParams(searchParams);

  const clearParams = () => {
    // params.delete('category');
    params.delete('availability');
    params.delete('price-range');
    params.delete('minPrice');
    params.delete('maxPrice');
    params.delete('orderBy');
    // params.delete('price');
    // params.delete('search');

    // searchParams.set('page', '1');

    // searchParams.set('sort', 'newest');

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button className='w-full' variant='destructive' onClick={clearParams}>
      Clear All the Filters
    </Button>
  );
}
