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
      <div className="grid grid-cols-2 justify-items-center gap-6 tablet:grid-cols-3 xl:grid-cols-6">
        {categories[whichScreen].map((category, i) => {
          return (
            <div className='cursor-pointer' key={i}>
              <Image src={category.image} alt="category" />
              <p className="grid h-[35px] place-content-center bg-black text-center text-white">
                {category.name}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
