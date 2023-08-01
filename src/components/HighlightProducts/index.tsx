'use client'
import Product from './Product'
import axios from 'axios'
import { useEffect, useState } from 'react'
type ProductType = {
  id: `${string}-${string}-${string}-${string}-${string}`
  name: string
  description: string
  price: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
}
export default function HighlightProducts() {
  const [products, setProducts] = useState<ProductType[]>()
  useEffect(() => {
    axios.get('http://localhost:3001/products').then((res) => {
      setProducts(res.data)
    })
  }, [])
  return (
    <section className="">
      <h2 className="mb-6 text-center text-[32px] font-medium text-subTitle tablet:text-[32px] ">
        Highlight Products 🔥
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-6 tablet:grid-cols-2 xl:flex xl:grid-cols-3 xl:flex-wrap xl:justify-between">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
