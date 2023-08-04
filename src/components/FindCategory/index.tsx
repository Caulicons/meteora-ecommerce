'use client'
import { ProductsContext } from '@/utils/context/productsContext'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import axios from 'axios'
import Image from 'next/image'
import {
  ChangeEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CategoryItem {
  image: string
  name: string
}

interface CategoryData {
  mobile: CategoryItem[]
  tablet: CategoryItem[]
  desktop: CategoryItem[]
}

export default function FindCategory() {
  const whichScreen = useWhichScreen()
  const [categories, setCategories] = useState<CategoryData>()

  useEffect(() => {
    axios
      .get<CategoryData>('http://localhost:3001/categories')
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const productContext = useContext(ProductsContext)

  const handleCategoryClick = (category: string) => {
    const searchedProducts = productContext.allProducts.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase()),
    )
    productContext.setProductsToShow(
      searchedProducts /* (products) =>
      products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase()),
      ),
     */,
    )
  }

  // Handle search
  return (
    <section className="mx-6 space-y-9 text-center tablet:mx-0">
      <h2 className="text-[32px] font-medium text-subTitle tablet:text-[32px]">
        Search for category:
      </h2>
      <div className="grid grid-cols-2 justify-items-center gap-6 tablet:grid-cols-3 xl:grid-cols-6">
        {categories?.[whichScreen]?.map((category, i) => {
          return (
            <div
              className="cursor-pointer"
              key={i}
              onClick={() => handleCategoryClick(category.name)}
            >
              <Image
                src={category.image}
                width={200}
                height={200}
                alt="category"
              />
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
