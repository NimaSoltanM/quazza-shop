import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800'>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                  About TechEcomm
                </h1>
                <p className='max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  TechEcomm is a leading provider of high-quality tech products.
                  Our mission is to empower people with the latest technology to
                  make their lives easier and more productive.
                </p>
                <p className='max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Founded in 2005, we have been committed to providing our
                  customers with top-notch tech products. Our team of experts
                  carefully selects each product to ensure it meets our high
                  standards of quality and innovation.
                </p>
              </div>
              <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
                <Image
                  alt='TechEcomm products'
                  className='object-cover'
                  height='500'
                  src='/assests/images/about/meeting.jpg'
                  style={{
                    aspectRatio: '900/500',
                    objectFit: 'cover',
                  }}
                  width='900'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl'>
              Meet Our Team
            </h2>
            <div className='grid gap-6 mt-12 lg:grid-cols-3 lg:gap-12'>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <Avatar className='h-24 w-24 mb-4'>
                    <AvatarImage alt='John Doe' src='/placeholder-avatar.jpg' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className='text-xl font-bold'>John Doe</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    CEO
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
                    John is a tech enthusiast with over 20 years of experience
                    in the industry. He is passionate about bringing the latest
                    tech products to our customers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <Avatar className='h-24 w-24 mb-4'>
                    <AvatarImage alt='Jane Doe' src='/placeholder-avatar.jpg' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className='text-xl font-bold'>Jane Doe</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    CTO
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
                    Jane is an expert in tech product development and ensures
                    that all our products are of the highest quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <Avatar className='h-24 w-24 mb-4'>
                    <AvatarImage
                      alt='Bob Smith'
                      src='/placeholder-avatar.jpg'
                    />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <h3 className='text-xl font-bold'>Bob Smith</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    CFO
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
                    Bob manages the financial aspects of our company and ensures
                    that we continue to provide affordable tech products to our
                    customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl'>
              Contact Us
            </h2>
            <form className='grid gap-6 mt-12 max-w-md mx-auto'>
              <div className='space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' required />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' required type='email' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='message'>Message</Label>
                <Textarea id='message' required />
              </div>
              <Button className='w-full' type='submit'>
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className='h-20 flex items-center px-4 md:px-6 border-t'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          © 2024 TechEcomm. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
