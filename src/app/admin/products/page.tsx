import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { db } from '@/lib/db';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import DropdownActions from './dropdown-actions';

export default async function Component() {
  const products = await db.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
      <div className='flex items-center'>
        <h1 className='font-semibold text-lg md:text-2xl'>Products</h1>
        <Button className='ml-auto' size='sm' asChild>
          <Link href='/admin/products/add-product'>Add Product</Link>
        </Button>
      </div>
      <div className='border shadow-sm rounded-lg'>
        <Table className='w-full overflow-auto'>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className='font-medium'>
                  <Image
                    src={product.imageUrl}
                    width={30}
                    height={30}
                    alt={product.name}
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {product.inStock ? (
                    <Badge variant='outline'>In Stock</Badge>
                  ) : (
                    <Badge variant='destructive'>Out of Stock</Badge>
                  )}
                </TableCell>
                <TableCell>{formatPrice(product.price)}</TableCell>
                <DropdownActions productId={product.id} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
