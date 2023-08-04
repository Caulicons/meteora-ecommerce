import Fieldset from '@/components/Basic/Inputs/Fieldset'
import InputRadio from '@/components/Basic/Inputs/Radio'
import { ProductOptionType } from '@/utils/types/productType'
import React from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types'

type formProductCheck = {
  colors: string
  sizes: string
}
interface ProductDetailsProps {
  options: ProductOptionType
  register: UseFormRegister<formProductCheck>
  error: FieldErrors<formProductCheck>
}
export default function ProductDetails({
  options,
  register,
  error,
}: ProductDetailsProps) {
  return (
    <>
      <span className="h-[1px] w-full bg-[#D8D8D8]" />
      {error[options.id] && (
        <p className="text-red-400">{error[options.id]?.message}</p>
      )}
      <Fieldset
        className="flex flex-col"
        legend={options.legend}
        id={options.id}
      >
        {options.details.map((detail) => {
          return (
            <div key={detail.id} className="flex flex-col items-center gap-2">
              <InputRadio
                id={detail.id}
                value={detail.value}
                description={detail.name}
                colorBg={detail?.colorBackground}
                option={options.id}
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
