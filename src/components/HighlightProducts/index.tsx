'use client'
import { ProductsContext } from '@/utils/context/productsContext'
import Product from './Product'
import { useContext } from 'react'

export default function HighlightProducts() {
  const productContext = useContext(ProductsContext)

  return (
    <section className="mx-6 tablet:m-0">
      {productContext.productsToShow.length != 0 ? (
        <>
          <h2 className="mb-6 text-center text-[32px] font-medium text-subTitle tablet:text-[32px] ">
            Highlight Products 🔥
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-6 tablet:grid-cols-2 xl:flex xl:grid-cols-3 xl:flex-wrap xl:justify-between">
            {productContext.productsToShow?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <h2 className="mb-6 text-center text-[32px] font-medium text-subTitle tablet:text-[32px] ">
          Product not found 🔎
        </h2>
      )}
    </section>
  )
}
