'use client'
import Image from 'next/image'
import logoDesktop from '@images/Desktop/Logo_desktop.png'
import logoMobile from '@images/Mobile/Logo_Mobile.png'
import LogoTablet from '@images/Tablet/Logo_tablet.png'
import hamburger from '@images/icon/hamburger.png'
import { useState } from 'react'

const links = [
  { name: 'Home', url: '', active: true },
  { name: 'Our Stores', url: '', active: false },
  { name: 'News', url: '', active: false },
  { name: 'Promotions', url: '', active: false },
]

export default function NavBar() {
  const pageWidth = window.innerWidth
  const isMobile = pageWidth < 768
  const isTablet = pageWidth < 1440
  const [showHamburger, setShowHamburger] = useState(false)

  return (
    <nav className="flex h-fit min-h-[58px] w-full flex-wrap bg-black text-white tablet:flex-nowrap tablet:px-6">
      <div className="flex min-h-[58px] w-full items-center justify-between px-4 tablet:justify-start tablet:gap-4">
        <Image
          src={isMobile ? logoMobile : isTablet ? LogoTablet : logoDesktop}
          alt="Logo"
          className={`${isMobile ? 'h-[18px] w-[125px]' : 'h-[24px] w-[99px]'}`}
        />
        <ul className=" hidden flex-row gap-6 bg-inherit tablet:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                className={`duration-12000 transition ease-in-out ${
                  link.active ? 'text-green' : 'text-white '
                } hover:border-b-2 hover:border-green hover:text-green`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {showHamburger ? (
          <ul className="absolute right-0 top-0 flex flex-col bg-gray px-6 py-4 tablet:hidden z-10">
            <span
              className="cursor-pointer self-end p-1 text-xl text-green tablet:hidden"
              onClick={() => {
                setShowHamburger((show) => !show)
              }}
            >
              X
            </span>
            {links.map((link) => (
              <li
                key={link.name}
                className="mb-3 border-b-2 border-[#6C757D] hover:border-green tablet:mb-0 tablet:border-none"
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
            onClick={() => {
              setShowHamburger((show) => !show)
            }}
            className="h-[18px] w-[18px] cursor-pointer tablet:hidden"
          />
        )}
      </div>
      <div className="flex h-auto w-full justify-center gap-3 bg-white px-7 py-6 tablet:my-2 tablet:w-auto tablet:min-w-[170px] tablet:bg-inherit tablet:px-0 tablet:py-0">
        <input
          type="text"
          placeholder="Find products"
          className="w-11/12 max-w-[225px] border-2 border-black px-3 py-2 text-black hover:border-gray"
        />
        <button className="w:auto transparent  border-2 border-black p-2 font-bold text-black hover:bg-black hover:text-white tablet:border-white tablet:font-normal tablet:text-white">
          Search
        </button>
      </div>
    </nav>
  )
}
