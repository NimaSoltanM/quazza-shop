import { Badge } from '@/components/ui/badge';
import { Product, Review } from '@prisma/client';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { slugifyString } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';
import StarRating from '../../../../components/shared/start-rating';

export default function ProductCard({
  product,
  category,
  reviews,
}: {
  product: Product;
  category: string;
  reviews: Review[];
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
        {reviews.length ? (
          <StarRating
            ratings={reviews.map((review) => review.rating)}
            className='my-3'
          />
        ) : (
          <small className='py-1.5 flex items-center gap-x-2'>
            <AlertCircle /> No rating yet
          </small>
        )}
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
