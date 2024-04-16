import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Input } from '@/components/ui/input';
import BreadCrumpComp from '../shared/bread-crump-comp';
import { getCurrentUser, getCurrentUserId } from '@/lib/auth';
import Image from 'next/image';

interface NavLink {
  name: string;
  href: string;
  icon?: ReactNode;
}

interface HeaderProps {
  links: NavLink[];
  rightContent?: ReactNode;
  title: string;
}

export default async function Header({ links }: HeaderProps) {
  const user = await getCurrentUser();

  const userImageUrl = user?.image;

  return (
    <header className='flex justify-around items-center h-14 lg:h-[60px]  gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
      <BreadCrumpComp />
      <div className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
        <Sheet>
          <SheetTrigger asChild>
            <Button className='lg:hidden' size='icon' variant='outline'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <Link href='/'>
              <Package2 className='h-6 w-6' />
              <span className='sr-only'>TechShop</span>
            </Link>
            <div className='grid gap-2 py-6'>
              {links.map((link, index) => (
                <Link
                  key={index}
                  className='flex w-full items-center py-2 text-lg font-semibold'
                  href={link.href}>
                  {link.icon && <span className='mr-2'>{link.icon}</span>}
                  {link.name}
                </Link>
              ))}
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold mt-10'
                href='/profile/orders'>
                Logout
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className='gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='overflow-hidden rounded-full'>
              <Image
                src={userImageUrl || ''}
                width={36}
                height={36}
                alt='Avatar'
                className='overflow-hidden rounded-full'
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
