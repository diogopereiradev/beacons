import React, { ButtonHTMLAttributes } from 'react';

type LinkVariants = 'text' | 'outlined' | 'filled';

// cstyles = custom styles and receive tailwind classes
type ButtonProps<T> = {
  children: T,
  variant: LinkVariants,
  cstyles?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: LinkVariants) {
  const variants = {
    text: `
      flex
      justify-center
      items-center
      text-primary-300
      font-default
      font-[500]
      duration-200
      hover:text-secondary-300
      active:text-secondary-500
    `,

    outlined: `
      flex
      justify-center
      items-center
      w-40
      h-10
      text-primary-300
      text-[0.96rem]
      font-default
      font-[500]
      border-2
      border-primary-500
      rounded-full
      duration-200
      hover:bg-primary-500
      hover:text-primary-300
      active:bg-primary-700
      active:text-primary-700
      px-[10px]
    `,

    filled: `
      flex
      justify-center
      items-center
      w-40
      h-10
      text-primary-100
      text-[0.96rem]
      font-default
      font-[500]
      bg-primary-500
      rounded-full
      duration-200
      hover:bg-primary-700
      active:text-primary-700
      px-[10px]
    `
  };
  return variants[variant];
}

export function Button<T>(props: ButtonProps<T>): JSX.Element {
  return (
    <button
      {...props}
      className={`
        ${getVariant(props.variant)}
        ${props.cstyles}
      `}
    >
      {props.children}
    </button>
  );
}