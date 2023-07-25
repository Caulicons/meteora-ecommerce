import HighlightProducts from '@/components/HighlightProducts'
import Facilities from '@/components/Facilities'
import Carousel from '@/components/Carousel'
import FindCategory from '@/components/FindCategory'
import NewLettersRegister from '@/components/NewLettersRegister'

export default function Home() {
  return (
    <main>
      <Carousel />
      <div className="mx-auto flex w-auto flex-col items-center">
        <div className="my-6 grid max-w-[1110px] gap-6 tablet:my-10 desktop:my-14">
          <FindCategory />
          <HighlightProducts />
        </div>
        <Facilities />
        <NewLettersRegister />
      </div>
    </main>
  )
}
