'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import leftArrow from '@images/icon/carousel/icon-arrow-left.png'
import rightArrow from '@images/icon/carousel/icon-arrow-right.png'

import bannerMobile01 from '@images/Mobile/Banner_carousel 1 _ 375.png'
import bannerMobile02 from '@images/Mobile/Banner carousel 2 _ 375.png'
import bannerMobile03 from '@images/Mobile/Banner carousel 3 _ 375.png'

import bannerTablet01 from '@images/Tablet/Banner carousel 1 _ 768.png'
import bannerTablet02 from '@images/Tablet/Banner carousel 2 _ 768.png'
import bannerTablet03 from '@images/Tablet/Banner carousel 3 _ 768.png'

import bannerDesktop01 from '@images/Desktop/Banner carousel 1 _ 1440.png'
import bannerDesktop02 from '@images/Desktop/Banner carousel 2 _ 1440.png'
import bannerDesktop03 from '@images/Desktop/Banner carousel 3 _ 1440.png'

const banners = {
  mobile: [
    {
      id: 1,
      image: bannerMobile01,
      vitrine: 0,
      info: { slug: '', description: '' },
    },
    {
      id: 2,
      image: bannerMobile02,
      vitrine: 1,
      info: {
        position: 'right',
        slug: 'COLEÇÃO ATEMPORAL',
        description: 'Estilo e qualidade para durar.',
      },
    },
    {
      id: 3,
      image: bannerMobile03,
      vitrine: 2,
      info: {
        position: 'left',
        slug: 'COLEÇÃO ATEMPORAL',
        description: 'Alto impacto visual, baixo impacto ambiental!',
      },
    },
  ],
  tablet: [
    {
      id: 4,
      image: bannerTablet01,
      vitrine: 0,
      info: { slug: '', description: '' },
    },
    {
      id: 5,
      image: bannerTablet02,
      vitrine: 1,
      info: {
        position: 'right',
        slug: 'COLEÇÃO ATEMPORAL',
        description: 'Estilo e qualidade para durar.',
      },
    },
    {
      id: 6,
      image: bannerTablet03,
      vitrine: 2,
      info: {
        position: 'left',
        slug: 'COLEÇÃO ATEMPORAL',
        description: 'Alto impacto visual, baixo impacto ambiental!',
      },
    },
  ],
  desktop: [
    {
      id: 7,
      image: bannerDesktop01,
      vitrine: 0,
      info: { slug: '', description: '' },
    },
    {
      id: 8,
      image: bannerDesktop02,
      vitrine: 1,
      info: {
        position: 'right',
        slug: 'COLEÇÃO ATEMPORAL',
        description: 'Estilo e qualidade para durar',
      },
    },
    {
      id: 9,
      image: bannerDesktop03,
      vitrine: 2,
      info: {
        position: 'left',
        slug: 'COLEÇÃO ATEMPORAL',
        description: 'Alto impacto visual, baixo impacto ambiental!',
      },
    },
  ],
  quantity: 3,
}

const handleResize = () => {
  const isMobile = window.innerWidth <= 375
  const isTablet = window.innerWidth > 375 && window.innerWidth <= 768
  return isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
}

export default function Banner() {
  const [show, setShow] = useState(0)
  const [whichScreen, setWhichScreen] = useState<
    'mobile' | 'tablet' | 'desktop'
  >(handleResize())
  const carouselRef = useRef<HTMLDivElement>(null)

  window.addEventListener('resize', () => {
    setWhichScreen(handleResize())
  })

  const scrollToSlide = (
    direction: 'right' | 'left' | 'centralize',
    number?: number,
  ) => {
    let toShow = show
    switch (direction) {
      case 'right': {
        const result = show + 1 > banners.quantity - 1 ? 0 : show + 1
        setShow(result)
        toShow = result
        break
      }
      case 'left':
        const result = show - 1 < 0 ? banners.quantity : show - 1
        setShow(result)
        toShow = result
        break
      case 'centralize':
        if (typeof number === 'number') {
          setShow(number)
          toShow = number
        }
    }

    const slides = carouselRef.current?.getElementsByClassName('slide')

    if (slides && slides[toShow]) {
      slides[toShow].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      })
    }
  }

  return (
    <div className="relative m-auto my-0 w-full ">
      <div
        className="no-display-scrollbar flex snap-x snap-mandatory overflow-auto"
        ref={carouselRef}
      >
        {banners[whichScreen].map((banner) => {
          return (
            <div
              key={banner.id}
              className="relative flex w-full flex-none snap-start\ items-center justify-center"
            >
              <Image
                src={banner.image}
                alt="banner"
                className={`slide shrink-0 transition-all duration-700 ease-in-out w-full`}
                style={{ objectFit: 'cover' }}
              />
              <div
                className={`absolute mt-[45%] w-9/12 text-center phone:mt-auto ${
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
              className={`min-w-[33px] cursor-pointer rounded-xl p-[3px] duration-700 ease-in-out ${
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
