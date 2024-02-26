import { db } from '@/lib/db';
import { slugifyString } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-cart';

export default async function Page() {
  const categories = await db.category.findMany();

  return (
    <div className='mx-2 overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {categories.map((item) => (
          <CardContainer className='inter-var' key={item.id}>
            <CardBody className='relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'>
                {item.name}
              </CardItem>
              <CardItem
                as='p'
                translateZ='60'
                className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                {item.description}
              </CardItem>
              <CardItem translateZ='100' className='w-full mt-4'>
                <Image
                  src={`/assests/images/products/${item.imageUrl}.webp`}
                  height='1000'
                  width='1000'
                  className='h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>
              <div className='flex justify-between items-center mt-20'>
                <Link href={`/products/${slugifyString(item.name)}`}>
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'>
                    Explore
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
