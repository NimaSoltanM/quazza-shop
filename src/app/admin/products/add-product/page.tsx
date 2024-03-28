/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JwSRO6MS6Np
 */
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { db } from '@/lib/db';
import SubmitButton from '@/components/shared/submit-btn';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getCurrentUserId } from '@/lib/auth';

export default async function Page() {
  const categories = await db.category.findMany();

  const addProduct = async (formData: FormData) => {
    'use server';

    const userId = await getCurrentUserId();

    const user = await db.user.findUnique({ where: { id: userId } });

    if (user?.role !== 'ADMIN') {
      console.log('Nah bro, you are hacking fam');
      return;
    }

    const name = formData.get('name')?.toString();
    const description = formData.get('description')?.toString();
    const price = Number(formData.get('price'));
    const imageUrl = formData.get('imageUrl')?.toString();
    const category = formData.get('category')?.toString();

    const foundCategory = await db.category.findFirst({
      where: { name: category },
    });

    if (!foundCategory) return;

    const categoryId = foundCategory.id;

    if (!name || !description || !price || !imageUrl || !category) {
      return;
    }

    await db.product.create({
      data: {
        name,
        description,
        price,
        imageUrl,
        inStock: true,
        categoryId,
      },
    });

    revalidatePath(`/products/${foundCategory.name}`);
    redirect(`/products/${foundCategory.name}`);
  };

  return (
    <div className='container my-4'>
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          {/* TODO: MAKE THIS CLIENT SIDE FORM WITH VALIDATION */}
          <form className='grid gap-4' action={addProduct}>
            <div className='grid gap-2'>
              <Label htmlFor='productName'>Product Name</Label>
              <Input
                id='productName'
                placeholder='Product Name'
                name='name'
                type='text'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='description'>Description</Label>
              <Textarea
                id='description'
                placeholder='Description'
                name='description'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='price'>Price</Label>
              <Input
                id='price'
                placeholder='Price'
                type='number'
                name='price'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='imageUrl'>Image url</Label>
              <Input
                id='imageUrl'
                placeholder='https://link.sample'
                type='url'
                name='imageUrl'
              />
            </div>
            <div className='grid gap-2'>
              <Label>Category</Label>
              <Select name='category' required>
                <SelectTrigger>
                  <SelectValue placeholder='Select a category' />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* <div className='grid gap-2'>
              <Label htmlFor='images'>Upload Images</Label>
              <Input className='mt-2' id='images' multiple type='file' />
            </div> */}
            <SubmitButton className='mt-4'>Add Product</SubmitButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
