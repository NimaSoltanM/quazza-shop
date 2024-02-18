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
import { priceRange } from '@/types';

export default function PriceRange({ ranges }: { ranges: priceRange[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleRange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === 'all') {
      params.delete('price-range');
      params.delete('minPrice');
      params.delete('maxPrice');
    } else {
      const [min, max] = value.split('&').map((part) => {
        const [key, price] = part.split('=');
        if (key === 'min') {
          params.set('minPrice', price);
        } else if (key === 'max') {
          params.set('maxPrice', price);
        }
      });

      params.set('price-range', value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Label htmlFor='filter'>Filter by price</Label>
      <Select
        onValueChange={(value) => handleRange(value)}
        value={searchParams.get('price-range')?.toString() || 'all'}>
        <SelectTrigger>
          <SelectValue placeholder='Select' />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='all'>All</SelectItem>
          {ranges.map((range) => (
            <SelectItem
              key={range.label}
              value={`min=${range.min}&max=${range.max}`}>
              {range.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
