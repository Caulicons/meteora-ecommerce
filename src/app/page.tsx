import HighlightProducts from '@/components/HighlightProducts'
import FindCategory from '@/components/FindCategory'
import Facilities from '@/components/Facilities'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
    <main>
      <Carousel />
      <div className="mx-auto flex w-auto flex-col items-center">
        <div className="my-6 grid gap-6 tablet:my-10 desktop:my-14 max-w-[1110px]">
          <FindCategory />
          <HighlightProducts />
        </div>
        <Facilities />
      </div>
    </main>
  )
}
