import { Badge } from '@/components/ui/badge';
import { Product } from '@prisma/client';
import { CardHeader, CardContent, Card } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { slugifyString } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({
  product,
  category,
}: {
  product: Product;
  category: string;
}) {
  return (
    <Card>
      <CardHeader>
        <Image
          alt='Product 1'
          className='w-full h-48 object-cover'
          height='400'
          src={product.imageUrl ?? '/placeholder.svg'}
          style={{
            aspectRatio: '200/200',
            objectFit: 'cover',
          }}
          width='400'
        />
      </CardHeader>
      <CardContent className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
        <h3 className='font-semibold text-lg mb-2'>{product.name}</h3>
        <div className='flex items-center justify-between mb-2'>
          <span className='font-bold text-lg'>
            {formatPrice(product.price)}
          </span>
          {product.inStock ? (
            <Badge variant='secondary'>In Stock</Badge>
          ) : (
            <Badge variant='destructive'>Out of Stock</Badge>
          )}
        </div>
        <div className='flex items-center gap-0.5 mb-4'>
          <StarIcon className='w-5 h-5 fill-primary' />
          <StarIcon className='w-5 h-5 fill-primary' />
          <StarIcon className='w-5 h-5 fill-primary' />
          <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
          <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
        </div>
        <Button
          className='w-full py-2 text-white bg-primary rounded-md hover:bg-primary-dark'
          asChild>
          <Link href={`/products/${category}/${slugifyString(product.name)}`}>
            Buy Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}
