'use client'
import { ProductsContext } from '@/utils/context/productsContext'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import axios from 'axios'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

interface CategoryData {
  name: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
}

let categoryClicked: string
export default function FindCategory() {
  const whichScreen = useWhichScreen()
  const productContext = useContext(ProductsContext)
  const [categories, setCategories] = useState<CategoryData[]>()

  useEffect(() => {
    axios
      //change url name later
      .get<CategoryData[]>('http://localhost:3001/categories')
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleCategoryClick = (category: string) => {
    if (categoryClicked === category) {
      productContext.setProductsToShow(productContext.allProducts)
      categoryClicked = ''
      return
    }

    const searchedProducts = productContext.allProducts.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase()),
    )
    productContext.setProductsToShow(searchedProducts)
    categoryClicked = category
  }

  if (
    productContext.productsToShow != productContext.allProducts &&
    categoryClicked === ''
  )
    return

  return (
    <section className="mx-6 space-y-9 text-center tablet:mx-0">
      {productContext.productsToShow != productContext.allProducts &&
      categoryClicked === '' ? (
        ''
      ) : (
        <>
          <h2 className="text-[32px] font-medium text-subTitle tablet:text-[32px]">
            Search for category:
          </h2>
          <div className="grid cursor-pointer grid-cols-2 gap-6 tablet:grid-cols-3 xl:grid-cols-6">
            {categories?.map((category, i) => {
              return (
                <div key={i} onClick={() => handleCategoryClick(category.name)}>
                  <Image
                    src={category.image[whichScreen]}
                    width={210}
                    height={157}
                    sizes="(100vw)"
                    style={{ width: '100%'}}
                    alt="category"
                  />
                  <p className="grid h-[35px] place-content-center bg-black text-white">
                    {category.name}
                  </p>
                </div>
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}
