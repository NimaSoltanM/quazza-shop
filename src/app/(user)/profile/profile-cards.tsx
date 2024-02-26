import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function ProfileCards() {
  return <HoverEffect items={cards} className='bg-neutral-50 text-black' />;
}

const cards = [
  {
    title: 'Orders',
    description:
      'View all your previous orders and track upcoming deliveries in one convenient place',
    link: '/profile/orders',
  },
  {
    title: 'Wishlist',
    description:
      "See all the products you've added to your wishlist so you can easily find them again when you're ready to buy",
    link: '/profile/wishlist',
  },
  {
    title: 'Comments',
    description:
      "Look back on conversations you've had by checking the comments you've left on products across the site",
    link: '/profile/comments',
  },
  {
    title: 'Addresses',
    description:
      'Manage all your shipping addresses to make checkout faster on your future orders',
    link: '/profile/addresses',
  },
  {
    title: 'Settings',
    description:
      'Customize your account settings and preferences so your experience is tailored to your needs',
    link: '/profile/settings',
  },
];
