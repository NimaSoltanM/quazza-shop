'use client';

import { Button } from '../ui/button';

import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
} & ComponentProps<'button'>;

export default function SubmitButton({
  children,
  className,
  variant = 'default',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      size={size}
      className={className}
      variant={variant}
      type='submit'>
      {children}
    </Button>
  );
}
