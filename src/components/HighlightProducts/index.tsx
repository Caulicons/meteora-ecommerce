import { products } from '@/data/products'
import Product from './Produtc'

export default function HighlightProducts() {
  return (
    <section className="">
      <h2 className="text-subTitle text-center text-[32px] font-medium tablet:text-[32px] mb-6 ">
        Highlight Products 🔥
      </h2>
      <div className='grid grid-cols-1 gap-6 justify-items-center tablet:grid-cols-2 xl:grid-cols-3'>

        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
