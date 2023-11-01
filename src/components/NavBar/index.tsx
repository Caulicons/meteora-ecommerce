'use client'
import Image from 'next/image'
import logoDesktop from '@images/Desktop/Logo_desktop.png'
import logoMobile from '@images/Mobile/Logo_mobile.png'
import LogoTablet from '@images/Tablet/Logo_tablet.png'
import hamburger from '@images/icon/hamburger.png'
import { ChangeEvent, useContext, useState } from 'react'
import { useWhichDevice } from '@/utils/hooks/useHandleResize'
import { ProductsContext } from '@/utils/context/productsContext'

const links = [
  { name: 'Home', url: '', active: true },
  { name: 'Our Stores', url: '', active: false },
  { name: 'News', url: '', active: false },
  { name: 'Promotions', url: '', active: false },
]

export default function NavBar() {
  const widthScreen = useWhichDevice()
  const [showHamburger, setShowHamburger] = useState(false)
  const productContext = useContext(ProductsContext)

  const handleBurguerToggle = () => {
    setShowHamburger((show) => !show)
  }

  const handleSearchBar = (e: ChangeEvent<HTMLInputElement>) => {
    const searchedProducts = productContext.allProducts.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()),
    )

    if (e.target.value === '') {
      productContext.setProductsToShow(productContext.allProducts)
      return
    }
    productContext.setProductsToShow(searchedProducts)
  }

  return (
    <nav className="flex bg-black text-white  tablet:px-6 ">
      <div className="flex min-h-[58px] w-full items-center justify-between px-4 tablet:justify-start tablet:gap-4">
       { <Image
          src={
            widthScreen === 'mobile'
              ? logoMobile
              : widthScreen === 'tablet'
              ? LogoTablet
              : logoDesktop
          }
          alt="Logo"
        />}
        <ul className="hidden flex-row gap-6  tablet:flex ">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                className={`transition duration-700 ease-in-out ${
                  link.active ? 'text-green' : 'text-white '
                } hover:border-b-2 hover:border-green hover:text-green`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {showHamburger ? (
          <ul className="absolute right-0 top-0 z-10 flex flex-col bg-gray px-6 py-10 pt-1 tablet:hidden ">
            <span
              className=" cursor-pointer self-end p-2 pl-6 pr-0 text-2xl text-green "
              onClick={handleBurguerToggle}
            >
              X
            </span>
            {links.map((link) => (
              <li
                key={link.name}
                className="mb-2 border-b-2 border-[#6C757D] pb-2 hover:border-green tablet:mb-0 tablet:border-none"
              >
                <a
                  href={link.url}
                  className={` ${link.active ? 'text-green' : 'text-white'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <Image
            src={hamburger}
            alt="options"
            onClick={handleBurguerToggle}
            className=" cursor-pointer tablet:hidden"
            width={18}
            height={18}
          />
        )}
      </div>
      <div className="hidden items-center gap-3 tablet:flex">
        <input
          type="text"
          placeholder="Find products"
          className="w-full  px-3 py-2 text-black"
          onChange={(e) => {
            handleSearchBar(e)
          }}
        />
        <button className="border-2  p-2 hover:bg-zinc-500/50 active:bg-zinc-800 ">
          Search
        </button>
      </div>
    </nav>
  )
}
