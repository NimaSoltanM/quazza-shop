import { Button } from '@/components/ui/button';
import {
  DrawerTrigger,
  DrawerTitle,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
  DrawerContent,
  Drawer,
} from '@/components/ui/drawer';
import Availability from './availability';
import ClearButton from './clear-button';
import PriceRange from './price-range';
import { priceRange } from '@/types';
import SortBy from './sort-by';

export default function MobileFilterSection({
  hasSearchParams,
  ranges,
}: {
  hasSearchParams: boolean;
  ranges: priceRange[];
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className='fixed bottom-4 right-4 lg:hidden' variant='default'>
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent className='lg:hidden'>
        <DrawerHeader>
          <DrawerTitle>Product Filters</DrawerTitle>
        </DrawerHeader>
        <div className='space-y-4 px-4'>
          <SortBy />
          <PriceRange ranges={ranges} />
          <Availability />
        </div>
        <DrawerFooter>
          <ClearButton hasSearchParams={hasSearchParams} />
          <DrawerClose asChild>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
