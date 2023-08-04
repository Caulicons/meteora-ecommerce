'use client'
import axios from 'axios'
import ProductType from '@/utils/types/productType'
import { products as productsData } from '@/data/product'
import { useState, createContext, useEffect } from 'react'

interface ProductContextProp {
  allProducts: ProductType[]
  productsToShow: ProductType[]
  setProductsToShow: React.Dispatch<React.SetStateAction<ProductType[]>>
}

export const ProductsContext = createContext<ProductContextProp>({
  allProducts: [],
  productsToShow: [],
  setProductsToShow: () => {},
})

const ProductContext = ({ children }: { children: React.ReactNode }) => {
  const [allProducts, setAllProducts] = useState<ProductType[]>([])
  const [productsToShow, setProductsToShow] = useState<ProductType[]>([])
  useEffect(() => {
    // Fetch products from API and update state
  console.log('render ProductContext')

    const fetchProducts = async () => {
      const data = await axios
        .get('http://localhost:3001/products')
        .then((res) => res.data as ProductType[])
        .catch((err) => console.log(err))
    if (typeof data === 'undefined') {
        setAllProducts(productsData)
        setProductsToShow(productsData)
        return
      }

      setAllProducts(data)
      setProductsToShow(data)

      return
    }

    fetchProducts()
  }, [])
  return (
    <ProductsContext.Provider
      value={{ productsToShow, setProductsToShow, allProducts }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductContext
