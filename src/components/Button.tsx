import { cva, VariantProps } from 'class-variance-authority'
import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const getButtonStyle = cva('rounded px-2 py-1', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-white',
      danger: 'bg-red-500 text-white',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'small',
      className: 'font-bold uppercase',
    },
    {
      intent: 'secondary',
      size: 'large',
      className: 'font-bold',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type Props = JSX.IntrinsicElements['button'] & VariantProps<typeof getButtonStyle>

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({className, intent, size, children, ...props}, ref) => (
    <button 
        ref={ref}
        className={twMerge(getButtonStyle({intent, size, className}))} 
        {...props}>
      {children}
    </button>
  ))

export default Button