import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugifyString = (value: string) => {
  return value.replace(/ /g, '-');
};

export const deSlugifyString = (value: string) => {
  return value.replace(/-/g, ' ');
};

export const formatPrice = (price: number) => {
  return (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const generatePriceRanges = (prices: number[]) => {
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const mid = min + (max - min) / 2;

  return [
    {
      label: `${formatPrice(min)} - ${formatPrice(mid)}`,
      min,
      max: mid,
    },
    {
      label: `${formatPrice(mid)} - ${formatPrice(max)}`,
      min: mid,
      max,
    },
  ];
};

export const calculatePrice = (subTotal: number) => {
  const tax = (5 / 100) * subTotal;
  const shipping = 2000;

  const res = subTotal + tax + shipping;

  return formatPrice(res);
};
