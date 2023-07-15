'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import leftArrow from '@images/icon/carousel/icon-arrow-left.png'
import rightArrow from '@images/icon/carousel/icon-arrow-right.png'
import { banners } from '@/data/banner'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import Banner from './Banner'

export default function Carousel() {
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
        {banners[whichScreen].map((banner) => (
          <Banner banner={banner} key={banner.id} />
        ))}
      </div>
      <span className="absolute bottom-3 flex w-full justify-center gap-2 ">
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
        className="hidden-highlight absolute top-0 h-full w-1/6 cursor-pointer"
        onClick={() => scrollToSlide('left')}
      >
        <Image
          src={leftArrow}
          alt="preview banner"
          className="absolute left-6 top-1/2 "
        />
      </span>
      <span
        className="hidden-highlight absolute right-0 top-0 h-full w-1/6 cursor-pointer"
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
