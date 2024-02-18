import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import FeaturedProducts from './featured-products';
import { signOut } from '@/auth/auth';

export default function Home() {
  return (
    <div key='1' className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        <section className='w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Discover th e Latest Tech
                  </h1>
                  <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                    Explore our collection of cutting-edge devices and gadgets.
                    Upgrade your tech game today.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <button className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Explore Our Categories
                </h2>
                <p className='mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  From smartphones to smart homes, we have got you covered.
                  Choose a category to start browsing.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
              <Card className='pt-4'>
                <CardContent className='flex flex-col items-center gap-4'>
                  <SmartphoneIcon className='h-12 w-12' />
                  <CardTitle>Smartphones</CardTitle>
                  <CardDescription>
                    Explore the latest smartphones from top brands.
                  </CardDescription>
                  <Link className='mt-auto' href='/products/smartphones'>
                    <Button>Shop Now</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className='pt-4'>
                <CardContent className='flex flex-col items-center gap-4'>
                  <LaptopIcon className='h-12 w-12' />
                  <CardTitle>Laptops</CardTitle>
                  <CardDescription>
                    Discover high-performance laptops for work and play.
                  </CardDescription>
                  <Link className='mt-auto' href='/products/laptops'>
                    <Button>Shop Now</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className='pt-4'>
                <CardContent className='flex flex-col items-center gap-4'>
                  <ConsoleIcon className='h-12 w-12' />
                  <CardTitle>Gaming Consoles</CardTitle>
                  <CardDescription>
                    Score the hottest gaming gear in our collection and level up
                    your play
                  </CardDescription>
                  <Link className='mt-auto' href='/products/consoles'>
                    <Button>Shop Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <FeaturedProducts />
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Stay Updated
              </h2>
              <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Subscribe to our newsletter to receive the latest news and
                exclusive offers.
              </p>
            </div>
            <div className='mx-auto w-full max-w-sm space-y-2'>
              <form className='flex space-x-2'>
                <Input
                  className='max-w-lg flex-1'
                  placeholder='Enter your email'
                  type='email'
                />
                <Button type='submit'>Subscribe</Button>
              </form>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                By subscribing, you agree to our{' '}
                <Link className='underline underline-offset-2' href='#'>
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © TechShop. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ConsoleIcon(props: any) {
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
      <rect x='2' y='7' width='20' height='14' rx='2' ry='2' />
      <path d='M12 2L12 7' />
      <path d='M5 12L19 12' />
    </svg>
  );
}

function LaptopIcon(props: any) {
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
      <path d='M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16' />
    </svg>
  );
}

function SmartphoneIcon(props: any) {
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
      <rect width='14' height='20' x='5' y='2' rx='2' ry='2' />
      <path d='M12 18h.01' />
    </svg>
  );
}
