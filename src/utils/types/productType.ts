export interface ProductOptionType {
  id: 'sizes' | 'colors'
  legend: string
  details: {
    id: string
    name: string
    value: string
    colorBackground?: string | undefined
  }[]
}

export default interface ProductType {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
  options: ProductOptionType[]
}
