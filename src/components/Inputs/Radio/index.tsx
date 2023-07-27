import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
  FieldErrors,
} from 'react-hook-form/dist/types'
import ProductInterface from '@/interfaces/Product'

type formProductCheck = {
  colors: string
  sizes: string
}

interface InputRadioProps extends ComponentProps<'input'> {
  id: string
  value: string
  description: string
  className?: string
  colorBg?: string
  option: 'sizes' | 'colors'

  register: UseFormRegister<formProductCheck>
  error: FieldErrors<formProductCheck>
}

export default function InputRadio({
  value,
  id,
  className,
  colorBg,
  description,
  option,
  register,
  error,
  ...props
}: InputRadioProps) {
  return (
    <>
      <input
        type="radio"
        id={id}
        value={value}
        data-color-bg={colorBg}
        style={{
          backgroundColor: colorBg ? colorBg : '',
        }}
        className={twMerge(
          `before:radius-full } m-0 grid h-[1.2em] w-[1.2em]  translate-y-[-0.075em] appearance-none place-content-center rounded-full border-[2px] border-[#DEE2E6] bg-[#F3F6F7] text-current duration-[120ms] before:h-[1.2em] before:w-[1.2em] before:scale-0 before:rounded-full before:border-4 before:border-[#9353FF] before:transition-all before:duration-300 before:ease-in-out 
        checked:before:scale-100 `,
          className,
        )}
        width={5}
        height={5}
        {...register(option, {
          required: 'Select some option',
        })}
        {...props}
      />
      <label htmlFor={value} className="text-[13px] font-normal text-[#212529]">
        {description}
      </label>
    </>
  )
}
