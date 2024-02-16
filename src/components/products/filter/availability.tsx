'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { Label } from '@/components/ui/label';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';

export default function Availability() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleInStock = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === 'all') {
      params.delete('availability');
    } else if (value) {
      params.set('availability', value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Label htmlFor='availability'>Availability</Label>
      <Select
        onValueChange={(value) => handleInStock(value)}
        value={searchParams.get('availability')?.toString() || 'all'}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All</SelectItem>
          <SelectItem value='in-stock'>In Stock</SelectItem>
          <SelectItem value='out-of-stock'>Out of Stock</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
