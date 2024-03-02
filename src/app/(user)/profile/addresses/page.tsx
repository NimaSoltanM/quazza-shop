/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hwf0aISCOSq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center space-y-0'>
        <CardTitle>My Addresses</CardTitle>
        <Button className='ml-auto' variant='secondary'>
          Add new address
        </Button>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardHeader className='pb-4'>
              <CardTitle>Home</CardTitle>
              <CardDescription>
                1234 Main St, Anytown, CA 12345, USA
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button size='sm'>Edit</Button>
              <Button size='sm' variant='outline'>
                Delete
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className='pb-4'>
              <CardTitle>Office</CardTitle>
              <CardDescription>
                5678 Elm St, Metro City, NY 10001, USA
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button size='sm'>Edit</Button>
              <Button size='sm' variant='outline'>
                Delete
              </Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
