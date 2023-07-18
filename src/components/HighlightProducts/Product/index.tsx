'use client'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import Image, { StaticImageData } from 'next/image'

type ProductType = {
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

export default function Product({ product }: { product: ProductType }) {
  const whichScreen = useWhichScreen()
  return (
    <div className="w-auto max-w-[323px] bg-white ">
      <Image
        src={product.image[whichScreen]}
        alt="product"
        className="max-h-[389px]"
      />
      <div className="px-4 py-3 space-y-4 border border-solid border-x-black/10 border-b-black/10 border-t-0 rounded-lg">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-xs font-normal leading-5">{product.description}</p>
        <p className="font-bold">{product.price}</p>
        <button className="rounded-md bg-violet-400 px-4 py-2 text-white">
          See more
        </button>
      </div>
    </div>
  )
}
