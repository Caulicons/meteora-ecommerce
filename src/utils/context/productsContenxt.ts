/* import { useState, createContext } from 'react'
import axios from 'axios'

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
const getData =  () =>
   axios
    .get('http://localhost:3001/products')
    .then((res) => res.data as ProductType[])

const productaData = await getData()

const ProductsContext = createContext<ProductType[]>(getData())
 */