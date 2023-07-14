'use client'
import { categories } from '@/data/category'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import Image from 'next/image'

export default function FindCategory() {
  const whichScreen = useWhichScreen()

  return (
    <section className="space-y-9 text-center">
      <h2 className="text-subTitle text-[32px] font-medium tablet:text-[32px]">
        Search for category:
      </h2>
      <div className="grid grid-cols-2 gap-6 justify-items-center tablet:grid-cols-3 xl:grid-cols-6">
        {categories[whichScreen].map((category, i) => {
          return (
            <div className="h-[192px] min-w-[146px]" key={i}>
              <Image src={category.image} alt="category"  />
              <p className="bg-black text-center text-white h-[35px] grid place-content-center ">{category.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
