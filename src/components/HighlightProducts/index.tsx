import { products } from '@/data/products'
import Product from './Produtc'

export default function HighlightProducts() {
  return (
    <section className="">
      <h2 className="text-subTitle mb-6 text-center text-[32px] font-medium tablet:text-[32px] ">
        Highlight Products 🔥
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-6 tablet:grid-cols-2 xl:flex xl:grid-cols-3 xl:flex-wrap xl:justify-between">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
