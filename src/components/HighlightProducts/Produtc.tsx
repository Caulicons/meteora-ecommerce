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
  return (
    <div className="bg-white w-[323px] ">
      <Image src={product.image['mobile']} alt="product" className="max-h-[389px]" />
      <div className='mx-4 my-3 space-y-4'>
        <h3 className='font-bold'>{product.name}</h3>
        <p>{product.description}</p>
        <p className='font-bold'>{product.price}</p>
        <button className='text-white bg-violet-400 px-4 py-2 rounded-md'>See more</button>
      </div>
    </div>
  )
}
