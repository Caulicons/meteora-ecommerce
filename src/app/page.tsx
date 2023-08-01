import Carousel from '@/components/Carousel'
import Facilities from '@/components/Facilities'
import FindCategory from '@/components/FindCategory'
import HighlightProducts from '@/components/HighlightProducts'
import NewLettersRegister from '@/components/NewLettersRegister'
import ProductsGallery from '@/components/ProductsGallery'

export default function Home() {
  return (
    <main>
      <Carousel />
      <div className="mx-auto flex w-auto flex-col items-center">
        <div className="my-6 grid max-w-[1110px] gap-6 tablet:my-10 desktop:my-14">
          <ProductsGallery />
        </div>
        <Facilities />
        <NewLettersRegister />
      </div>
    </main>
  )
}
