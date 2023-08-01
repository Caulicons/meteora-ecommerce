'use client'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CategoryItem {
  image: string
  name: string
}

interface CategoryData {
  mobile: CategoryItem[],
  tablet: CategoryItem[],
  desktop: CategoryItem[]
}

export default function FindCategory() {
  const whichScreen = useWhichScreen()

  const [categories, setCategories] = useState<CategoryData>()

  useEffect(() => {
    axios.get<CategoryData>('http://localhost:3001/categories').then((res) =>{
      setCategories(res.data )}
    ).catch((err) => console.log(err))
  }, [])

  // Handle search
  return (
    <section className="space-y-9 text-center">
      <h2 className="text-[32px] font-medium text-subTitle tablet:text-[32px]">
        Search for category:
      </h2>
      <div className="grid grid-cols-2 justify-items-center gap-6 tablet:grid-cols-3 xl:grid-cols-6">
        {categories?.[whichScreen]?.map((category, i) => {
          return (
            <div className="cursor-pointer" key={i}>
              <Image src={category.image} width={200} height={200} alt="category" />
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
