
import Fieldset from '@/components/Basic/Inputs/Fieldset'
import InputRadio from '@/components/Basic/Inputs/Radio'
import ProductInterface from '@/interfaces/Product'
import React, { ChangeEvent } from 'react'
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form/dist/types'

type formProductCheck = {
  colors: string
  sizes: string
}

interface ProductDetailsProps {
  option: {
    id:  'sizes' | 'colors'
    legend: string
    details: {
      id: string
      name: string
      description: string
      value: string
      colorBackground?: string | undefined
    }[]
  }
  register: UseFormRegister<formProductCheck>
  error: FieldErrors<formProductCheck>
}

export default function ProductDetails({ option, register, error }: ProductDetailsProps) {
  return (
    <>
      <span className="h-[1px] w-full bg-[#D8D8D8]" />
      {error[option.id] && <p className="text-red-400">{error[option.id]?.message}</p>}
      <Fieldset className='flex flex-col' legend={option.legend} id={option.id}>
        {option.details.map((detail) => {
          return (
            <div key={detail.id} className="flex flex-col items-center gap-2">
              <InputRadio
                id={detail.id}
                value={detail.value}
                description={detail.name}
                colorBg={detail?.colorBackground}
                option={option.id}
                register={register}
                error={error}
              />
            </div>
          )
        })}
      </Fieldset>
    </>
  )
}

