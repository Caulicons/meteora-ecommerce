import { ComponentProps } from "react";
import {twMerge} from 'tailwind-merge' 

interface ButtonProps extends ComponentProps<'button'> {

}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={twMerge(`rounded-md bg-violet-400 px-4 py-2 text-white w-auto`, className)}  {...props}>
      {children}
    </button>
  )
}