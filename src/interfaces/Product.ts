import { StaticImageData } from 'next/image'

export default interface ProductInterface {
  id: string
  name: string
  description: string
  price: string
  image: {
    mobile: StaticImageData
    tablet: StaticImageData
    desktop: StaticImageData
  }
  options?: [
    {
      id:  'sizes' | 'colors'
      legend: string
      details: {
        id: string
        name: string
        description: string
        value: string
        colorBackground?: string
      }[]
    },
  ]
}
