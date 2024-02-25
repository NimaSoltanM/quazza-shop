import { Badge } from '@/components/ui/badge';
import { Product, Review } from '@prisma/client';
import { CardHeader, CardContent, Card } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { slugifyString } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export default function ProductCard({
  product,
  category,
  reviews,
}: {
  product: Product;
  category: string;
  reviews: Review[];
}) {
  // Calculate the average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Render stars based on the average rating
  const renderStars = () => {
    const fullStars = Math.floor(averageRating);
    const halfStars = Math.ceil(averageRating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    // Render the stars using fullStars, halfStars, and emptyStars
    return (
      <div className='flex items-center gap-0.5 mb-4'>
        {/* Render full stars */}
        {Array(fullStars).fill(<StarIcon className='w-5 h-5 fill-primary' />)}
        {/* Render half stars */}
        {Array(halfStars).fill(<StarIcon className='w-5 h-5 fill-primary' />)}
        {/* Render empty stars */}
        {Array(emptyStars).fill(
          <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
        )}
      </div>
    );
  };

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
          renderStars()
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
