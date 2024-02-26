'use client';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export function MainTitle() {
  const words = [
    {
      text: 'Discover',
    },
    {
      text: 'Latest',
    },
    {
      text: 'Tech',
    },
    {
      text: 'With',
    },
    {
      text: 'QUAZZA.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];
  return <TypewriterEffect words={words} />;
}
