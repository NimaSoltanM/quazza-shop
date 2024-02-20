'use client';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z7QMwLdCXTE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Component() {
  return (
    <div className='flex flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='border shadow-sm rounded-lg p-4'>
          <h1 className='text-2xl font-semibold'>
            Welcome to the Admin Portal
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Number of Products</h2>
              <p className='text-gray-500'>500</p>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Number of Orders</h2>
              <p className='text-gray-500'>120</p>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Number of Customers</h2>
              <p className='text-gray-500'>250</p>
            </div>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Revenue for Today</h2>
              <p className='text-gray-500'>$1500</p>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Orders Trend</h2>
              <TimeseriesChart className='w-full aspect-[4/3]' />
            </div>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Revenue Trend</h2>
              <BarChart className='w-full aspect-[4/3]' />
            </div>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Traffic Trend</h2>
              <BarChart className='w-full aspect-[4/3]' />
            </div>
            <div className='bg-white rounded-lg p-4 shadow-md'>
              <h2 className='text-lg font-semibold'>Popular Products</h2>
              <BarChart className='w-full aspect-[4/3]' />
            </div>
          </div>
          <div className='mt-8'>
            <h2 className='text-lg font-semibold'>Recent Activity</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
              <div className='bg-white rounded-lg p-4 shadow-md'>
                <h3 className='text-lg font-semibold'>Recent Orders</h3>
                <p className='text-gray-500'>Click to view details</p>
              </div>
              <div className='bg-white rounded-lg p-4 shadow-md'>
                <h3 className='text-lg font-semibold'>Recent Customers</h3>
                <p className='text-gray-500'>Click to view profile</p>
              </div>
              <div className='bg-white rounded-lg p-4 shadow-md'>
                <h3 className='text-lg font-semibold'>
                  Recent Reviews/Feedback
                </h3>
                <p className='text-gray-500'>Check latest feedback</p>
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <h2 className='text-lg font-semibold'>Quick Actions</h2>
            <div className='flex gap-4 mt-4'>
              <Button>Add New Product</Button>
              <Button>Add New Order</Button>
              <Button>Add New Customer</Button>
            </div>
          </div>
          <div className='mt-8'>
            <h2 className='text-lg font-semibold'>Search Bar</h2>
            <Input
              className='w-full mt-2'
              placeholder='Search...'
              type='search'
            />
          </div>
          <div className='mt-8'>
            <h2 className='text-lg font-semibold'>Links</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
              <Link href='#'>View All Products</Link>
              <Link href='#'>View All Orders</Link>
              <Link href='#'>View All Customers</Link>
            </div>
          </div>
          <div className='mt-8'>
            <h2 className='text-lg font-semibold'>Announcements</h2>
            <div className='bg-white rounded-lg p-4 shadow-md mt-4'>
              <p className='text-gray-500'>
                No new announcements at the moment.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: 'Jan', count: 111 },
          { name: 'Feb', count: 157 },
          { name: 'Mar', count: 129 },
          { name: 'Apr', count: 150 },
          { name: 'May', count: 119 },
          { name: 'Jun', count: 72 },
        ]}
        keys={['count']}
        indexBy='name'
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={['#2563eb']}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role='application'
        ariaLabel='A bar chart showing data'
      />
    </div>
  );
}

function HomeIcon(props: any) {
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
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}

function Package2Icon(props: any) {
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
      <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
      <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
      <path d='M12 3v6' />
    </svg>
  );
}

function PackageIcon(props: any) {
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
      <path d='m7.5 4.27 9 5.15' />
      <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
      <path d='m3.3 7 8.7 5 8.7-5' />
      <path d='M12 22V12' />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
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
      <circle cx='8' cy='21' r='1' />
      <circle cx='19' cy='21' r='1' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </svg>
  );
}

function TimeseriesChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: 'Desktop',
            data: [
              { x: '2018-01-01', y: 7 },
              { x: '2018-01-02', y: 5 },
              { x: '2018-01-03', y: 11 },
              { x: '2018-01-04', y: 9 },
              { x: '2018-01-05', y: 12 },
              { x: '2018-01-06', y: 16 },
              { x: '2018-01-07', y: 13 },
            ],
          },
          {
            id: 'Mobile',
            data: [
              { x: '2018-01-01', y: 9 },
              { x: '2018-01-02', y: 8 },
              { x: '2018-01-03', y: 13 },
              { x: '2018-01-04', y: 6 },
              { x: '2018-01-05', y: 8 },
              { x: '2018-01-06', y: 14 },
              { x: '2018-01-07', y: 11 },
            ],
          },
        ]}
        margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          useUTC: false,
          precision: 'day',
        }}
        xFormat='time:%Y-%m-%d'
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          format: '%d',
          tickValues: 'every 1 day',
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={['#2563eb', '#e11d48']}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        role='application'
      />
    </div>
  );
}

function UsersIcon(props: any) {
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
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}
