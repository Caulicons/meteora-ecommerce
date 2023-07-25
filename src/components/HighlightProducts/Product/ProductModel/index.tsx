'use client'
import Image, { StaticImageData } from 'next/image'

import { useWhichScreen } from '@/utils/hooks/useHandleResize'

type ProductModelProps = {
  id: `${string}-${string}-${string}-${string}-${string}`
  name: string
  description: string
  price: string
  image: {
    mobile: StaticImageData
    tablet: StaticImageData
    desktop: StaticImageData
  }
}

export default function ProductModel({
  product,
}: {
  product: ProductModelProps
}) {
  const whichScreen = useWhichScreen()

  return (
    <div className="flex flex-wrap justify-center bg-white p-4 sm:flex-nowrap sm:pb-8">
      <Image
        src={product.image.desktop}
        alt="product"
        className="h-[311px] w-[422px] max-w-[312px] sm:h-[350px]"
        style={{ objectFit: 'cover' }}
      />
      <form className="grid gap-4">
        <div className="grid gap-6">
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-xs font-normal leading-5">{product.description}</p>
          <span className="h-[1px] w-full bg-black" />
          <p>{product.price}</p>
          <p>Vendido e entregue por Riachuelo</p>
        </div>
        <fieldset id={'colors'}>
          <span className="h-[1px] w-full bg-[#D8D8D8]" />
          <legend className="text-[13px] font-bold">Cores :</legend>
          <div>
            <div>
              <input type="radio" id={'blue'} value={'Blue'} name="colors" />
              <label htmlFor={'blue'}>{'Blue'}</label>
            </div>
            <div>
              <input
                type="radio"
                id={'offWhite'}
                value={'offWhite'}
                name="colors"
              />
              <label htmlFor={'offWhite'}>{'offWhite'}</label>
            </div>
            <div>
              <input type="radio" id={'black'} value={'black'} name="colors" />
              <label htmlFor={'black'}>{'black'}</label>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
