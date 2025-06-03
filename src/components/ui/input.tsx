import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({
  className,
  leftElement,
  rightElement,
  containerClassName,
  rightElementClassName,
  leftElementClassName,
  type,
  ...props
}: React.ComponentProps<'input'> & {
  containerClassName?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  leftElementClassName?: string;
  rightElementClassName?: string;
  type?: string;
}) {
  return (
    <div className={cn('relative flex justify-center items-stretch', containerClassName)}>
      {leftElement && <div className={cn('absolute left-[0.2rem] top-1/2 transform -translate-y-1/2', leftElementClassName)}>{leftElement}</div>}
      <input
        type={type}
        data-slot='input'
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-5 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          leftElement && 'pl-10',
          rightElement && 'pr-10',
          className
        )}
        {...props}
      />
      {rightElement && <div className={cn('absolute right-[0.2rem] top-1/2 transform -translate-y-1/2', rightElementClassName)}>{rightElement}</div>}
    </div>
  );
}

export { Input };
