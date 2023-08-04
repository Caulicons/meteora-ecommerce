'use client'
import Image from 'next/image'
import { useState } from 'react'
import ProductModel from '../../Modal/ProductModal'
import Modal from '@/components/Modal'
import Button from '@/components/Basic/Inputs/Button'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import ProductType from '@/utils/types/productType'

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
          src={product?.image?.[whichScreen]}
          alt="product"
          className="max-h-[389px]"
          width={600}
          height={600}
        />
        <div className="space-y-4 rounded-lg border border-t-0 border-solid border-x-black/10 border-b-black/10 px-4 py-3">
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-xs font-normal leading-5">{product.description}</p>
          <p className="font-bold">{product.price}</p>
          <Button onClick={handleClick}>See more</Button>
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
