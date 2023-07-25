'use client'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import ProductModel from './ProductModel'
import Modal from '@/components/Modal'

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
  const [showProductModel, setShowProductModel] = useState(false)
  const whichScreen = useWhichScreen()

  const handleClick = () => {
    setShowProductModel((state) => !state)
  }
  return (
    <>
      <div className="w-auto max-w-[323px] bg-white ">
        <Image
          src={product.image[whichScreen]}
          alt="product"
          className="max-h-[389px]"
        />
        <div className="space-y-4 rounded-lg border border-t-0 border-solid border-x-black/10 border-b-black/10 px-4 py-3">
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-xs font-normal leading-5">{product.description}</p>
          <p className="font-bold">{product.price}</p>
          <button
            className="rounded-md bg-violet-400 px-4 py-2 text-white"
            onClick={handleClick}
          >
            See more
          </button>
        </div>
      </div>
      <Modal
        show={showProductModel}
        onClose={() => setShowProductModel(false)}
        title="Check details about this product"
      >
        <ProductModel product={product} />
      </Modal>
    </>
  )
}
