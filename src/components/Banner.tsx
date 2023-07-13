'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import leftArrow from '@images/icon/carousel/icon-arrow-left.png'
import rightArrow from '@images/icon/carousel/icon-arrow-right.png'
import { banners } from '@/data/banner'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'

export default function Banner() {
  const [show, setShow] = useState(0)
  const whichScreen = useWhichScreen()
  const carouselRef = useRef<HTMLDivElement>(null)
  const scrollToSlide = (
    direction: 'right' | 'left' | 'centralize',
    number?: number,
  ) => {
    const carousel = carouselRef.current
    const slideWidth = carousel?.clientWidth || 0

    let toShow = show
    switch (direction) {
      case 'right': {
        const result = show + 1 > banners.quantity - 1 ? 0 : show + 1
        setShow(result)
        toShow = result
        break
      }
      case 'left':
        const result = show - 1 < 0 ? banners.quantity - 1 : show - 1
        setShow(result)
        toShow = result
        break
      case 'centralize':
        if (typeof number === 'number') {
          setShow(number)
          toShow = number
        }
    }

    if (carousel) {
      const scrollPosition = toShow * slideWidth
      carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative m-auto my-0 w-full">
      <div
        className="no-display-scrollbar flex snap-x snap-mandatory overflow-auto"
        ref={carouselRef}
      >
        {banners[whichScreen].map((banner) => {
          return (
            <div
              key={banner.id}
              className="relative flex w-full flex-none snap-start items-center justify-center "
            >
              <Image
                src={banner.image}
                alt="banner"
                height={415}
                className={`slide w-full shrink-0 transition-all duration-700 ease-in-out h-auto max-h-[415px]`}
                style={{ objectFit: 'cover' }}
              />
              <div
                className={`absolute mt-[45%]  phone:mt-[25%] w-9/12 text-center tablet:mt-auto  ${
                  banner.info.position === 'right'
                    ? 'phone:text-right '
                    : 'phone:text-left'
                }`}
              >
                <h1 className="text-[32px] font-medium text-white tablet:text-[48px]">
                  {banner.info.slug}
                </h1>
                <p className="text-white">{banner.info.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <span className="absolute bottom-3 flex w-full justify-center gap-2">
        {banners[whichScreen].map((_, i) => {
          return (
            <span
              key={i}
              className={`min-w-[33px] cursor-pointer rounded-xl p-[2px] duration-700 ease-in-out ${
                i === show ? 'bg-white' : 'bg-slate-300 opacity-60 '
              } `}
              onClick={() => scrollToSlide('centralize', i)}
            />
          )
        })}
      </span>
      <span
        className="absolute top-0 h-full w-1/6 cursor-pointer "
        onClick={() => scrollToSlide('left')}
      >
        <Image
          src={leftArrow}
          alt="preview banner"
          className="absolute left-6 top-1/2"
        />
      </span>
      <span
        className="absolute right-0 top-0 h-full w-1/6 cursor-pointer"
        onClick={() => scrollToSlide('right')}
      >
        <Image
          src={rightArrow}
          alt="preview banner"
          className="absolute right-6 top-1/2 "
        />
      </span>
    </div>
  )
}
