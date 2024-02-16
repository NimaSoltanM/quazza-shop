import { db } from '@/lib/db';
import ProductCard from '@/components/products/product-card';
import FilterSection from '@/components/products/filter/filter-section';
import MobileFilterSection from '@/components/products/filter/mobile-filter-section';
import { deSlugifyString, generatePriceRanges } from '@/lib/utils';
import { Prisma } from '@prisma/client';

interface PageProps {
  params: { category: string };
  searchParams?: {
    availability?: string;
    minPrice?: string;
    maxPrice?: string;
    orderBy?: string;
  };
}

export default async function Page({
  params: { category },
  searchParams,
}: PageProps) {
  const availability = searchParams?.availability?.toString();
  const minPrice = parseInt(searchParams?.minPrice || '0');
  const maxPrice = parseInt(searchParams?.maxPrice || '9999999');
  const orderBy = searchParams?.orderBy?.toString();

  let inStock: boolean | undefined;

  if (availability === 'in-stock') {
    inStock = true;
  } else if (availability === 'out-of-stock') {
    inStock = false;
  }

  const deSlugifiedCategory = deSlugifyString(category);

  function getOrderBy(orderBy: any) {
    if (orderBy) {
      switch (orderBy) {
        case 'newest':
          return { createdAt: 'desc' as Prisma.SortOrder };
        case 'price-asc':
          return { price: 'asc' as Prisma.SortOrder };
        case 'price-desc':
          return { price: 'desc' as Prisma.SortOrder };
        case 'name-asc':
          return { name: 'asc' as Prisma.SortOrder };
        case 'name-desc':
          return { name: 'desc' as Prisma.SortOrder };
        default:
          return {
            createdAt: 'desc' as Prisma.SortOrder,
          }; // Handle the default case as per your requirement
      }
    } else {
      return { createdAt: 'desc' as Prisma.SortOrder }; // Handle the case when sortBy is not provided
    }
  }

  const products = await db.product.findMany({
    where: {
      category: { name: deSlugifiedCategory },
      inStock: inStock,
      price: {
        gte: minPrice,
        lte: maxPrice,
      },
    },
    orderBy: getOrderBy(orderBy),
  });

  const pricesInCategory = await db.product.findMany({
    where: {
      category: { name: deSlugifiedCategory },
    },
    select: {
      price: true, // Select only the price field
    },
    orderBy: getOrderBy(orderBy),
  });

  const prices = pricesInCategory.map((p) => p.price);
  const ranges = generatePriceRanges(prices);

  const hasSearchParams = !!Object.keys(searchParams ?? {}).length;

  return (
    <div key='1' className='container mx-auto px-4 md:px-6 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start'>
        <MobileFilterSection
          hasSearchParams={hasSearchParams}
          ranges={ranges}
        />
        <FilterSection hasSearchParams={hasSearchParams} ranges={ranges} />
        <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {products.length ? (
            products.map((prod) => (
              <ProductCard product={prod} key={prod.id} category={category} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}
