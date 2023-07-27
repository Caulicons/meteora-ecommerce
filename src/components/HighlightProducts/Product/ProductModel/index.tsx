'use client'
import Image from 'next/image'
import Button from '@/components/Inputs/Button'
import ProductInterface from '@/interfaces/Product'
import ProductDetails from '../ProductDetails'
import { useForm } from 'react-hook-form'

type formProductCheck = {
  colors: string
  sizes: string
}

export default function ProductModel({
  product,
}: {
  product: ProductInterface
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProductCheck>()

  function onSubmitButton(data: any) {
    console.log({...product, options: data})
  }
  return (
    <div className="flex flex-wrap bg-white p-4 pb-8 shadow-md sm:flex-nowrap sm:pb-8">
      <Image
        src={product.image.desktop}
        alt="product"
        className="h-[422px] w-full sm:h-[350px]"
        style={{ objectFit: 'cover' }}
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
                option={option}
              />
            )
          })}
        </div>
        <Button className="w-fit" type="submit">
          Add to bag
        </Button>
      </form>
    </div>
  )
}
