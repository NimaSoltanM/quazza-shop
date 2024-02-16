'use client';

import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SortBy() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSorting = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('orderBy', value);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Label htmlFor='sort'>Order by</Label>
      <Select
        onValueChange={(value) => handleSorting(value)}
        value={searchParams.get('orderBy')?.toString() || 'newest'}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='newest'>Newest</SelectItem>
          <SelectItem value='price-asc'>Price: Low to High</SelectItem>
          <SelectItem value='price-desc'>Price: High to Low</SelectItem>
          <SelectItem value='name-asc'>Name: A to Z</SelectItem>
          <SelectItem value='name-desc'>Name: Z to A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
