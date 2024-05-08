import Availability from './availability';
import ClearButton from './clear-button';
import PriceRange from './price-range';
import { priceRange } from '@/types/types';
import SortBy from './sort-by';

export default function FilterSection({
  hasSearchParams,
  ranges,
}: {
  hasSearchParams: boolean;
  ranges: priceRange[];
}) {
  return (
    <div className='hidden lg:block sticky top-10'>
      <h1 className='text-2xl font-bold mb-4'>Products</h1>
      <div className='space-y-4'>
        <SortBy />
        <PriceRange ranges={ranges} />
        <Availability />
        <ClearButton hasSearchParams={hasSearchParams} />
      </div>
    </div>
  );
}
