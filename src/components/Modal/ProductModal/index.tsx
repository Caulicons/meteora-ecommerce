'use client'
import Image from 'next/image'
import ProductDetails from '../../HighlightProducts/Product/ProductDetails'
import { useForm } from 'react-hook-form'
import Button from '@/components/Basic/Inputs/Button'
import ProductType from '@/utils/types/productType'
import { useState } from 'react'

type formProductCheck = {
  colors: string
  sizes: string
}

export default function ProductModal({ product }: { product: ProductType }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProductCheck>()
  const [addToBag, setAddToBag] = useState(false)

  function onSubmitButton(data: any) {
    console.log({ ...product, options: data })
    setAddToBag(true)
  }

  return (
    <div className="flex flex-wrap bg-white p-4 pb-8 shadow-md sm:flex-nowrap sm:pb-8">
      {addToBag ? (
        <p className="font-bold">{product.name} already added to bag 🛒.</p>
      ) : (
        <>
          <Image
            src={product?.image?.desktop}
            alt="product"
            className="h-[422px] w-full sm:h-[350px]"
            width={200}
            height={200}
            style={{ objectFit: 'cover', width: '100%' }}
          />
          <form
            className="grid w-full gap-4 border border-t-0 border-[#DEE2E6] p-4 pt-6 tablet:border-0 tablet:py-0"
            onSubmit={handleSubmit(onSubmitButton)}
          >
            <div className="grid gap-6 ">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-[13px]  leading-5 ">{product.description}</p>
              <span className="h-[1px] w-full bg-black" />
              <p className="self-stretch text-xl font-medium text-subTitle">
                {product.price}
              </p>
              <p className="text-[13px] text-[#ADB5BD]">
                Vendido e entregue por Riachuelo
              </p>
              {product.options?.map((option) => {
                return (
                  <ProductDetails
                    key={option.id}
                    register={register}
                    error={errors}
                    options={option}
                  />
                )
              })}
            </div>
            <Button className="w-fit" type="submit">
              Add to bag
            </Button>
          </form>
        </>
      )}
    </div>
  )
}
