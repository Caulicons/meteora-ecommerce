import Banner from '@/components/Banner'
import HighlightProducts from '@/components/HighlightProducts'
import FindCategory from '@/components/FindCategory'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="mx-auto w-auto max-w-[1110px] flex flex-col items-center">
        <div className="my-6 tablet:my-10 desktop:my-14 grid gap-6">
          <FindCategory />
          <HighlightProducts />
          <></>
        </div>
      </div>
    </main>
  )
}
