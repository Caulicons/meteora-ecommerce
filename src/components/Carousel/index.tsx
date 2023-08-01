'use client'
import {  useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import leftArrow from '@images/icon/carousel/icon-arrow-left.png'
import rightArrow from '@images/icon/carousel/icon-arrow-right.png'
import { useWhichScreen } from '@/utils/hooks/useHandleResize'
import Banner from './Banner'
import axios from 'axios'

interface BannerItem {
  id: number
  image: string
  vitrine: number
  info: {
    position: string
    slug: string
    description: string
  }
}

interface BannerData {
  mobile: BannerItem[],
  tablet: BannerItem[],
  desktop: BannerItem[],
  quantity: number
}

function Carousel() {
  const [show, setShow] = useState(0)
  const whichScreen = useWhichScreen()
  const carouselRef = useRef<HTMLDivElement>(null)
  const [banners, setBanners] = useState<BannerData>()

  useEffect(() => {
    axios.get<BannerData>('http://localhost:3001/banners').then((res) => {
      setBanners(res.data)
    })
  }, [])

  const handleCarouselEvents = (
    direction: 'right' | 'left' | 'centralize' | 'auto' | 'scroll',
    number?: number,
  ) => {
    const carousel = carouselRef.current
    const slideWidth = carousel?.clientWidth || 0
    const quantity = banners?.quantity as number

    let toShow = show
    switch (direction) {
      case 'right': {
        const nextBanner = show + 1 > quantity - 1 ? 0 : show + 1
        setShow(nextBanner)
        toShow = nextBanner
        break
      }
      case 'left':
        const previousBanner = show - 1 < 0 ? quantity - 1 : show - 1
        setShow(previousBanner)
        toShow = previousBanner
        break
      case 'centralize':
        if (typeof number === 'number') {
          setShow(number)
          toShow = number
        }
        break
      case 'scroll': {
        if (carousel) {
          const scrollPosition = carousel.scrollLeft
          const toShow = Math.round(scrollPosition / slideWidth)
          setShow(toShow)
        }

        return
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
        onScroll={() => handleCarouselEvents('scroll')}
      >
        {banners?.[whichScreen].map((banner) => (
          <Banner
            banner={banner}
            key={banner.id}
            onScroll={(e) => e.isPropagationStopped()}
          />
        ))}
      </div>
      <span className="absolute bottom-3 flex w-full justify-center gap-2">
        {banners?.[whichScreen].map((_, i) => {
          return (
            <span
              key={i}
              className={`min-w-[33px] cursor-pointer rounded-xl p-[2px] duration-700 ease-in-out ${
                i === show ? 'bg-white' : 'bg-slate-300 opacity-60 '
              } `}
              onClick={() => handleCarouselEvents('centralize', i)}
            />
          )
        })}
      </span>
      <span
        className="hidden-highlight absolute top-0 h-full w-1/6 cursor-pointer"
        onClick={() => handleCarouselEvents('left')}
      >
        <Image
          src={leftArrow}
          alt="preview banner"
          className="absolute left-6 top-1/2 "
        />
      </span>
      <span
        className="hidden-highlight absolute right-0 top-0 h-full w-1/6 cursor-pointer"
        onClick={() => handleCarouselEvents('right')}
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

export default Carousel