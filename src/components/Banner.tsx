'use client'
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
      vitrine: 1,
      info: { slug: 'COLEÇÃO ATEMPORAL', descrption: '' },
    },
    {
      id: 2,
      image: bannerMobile02,
      vitrine: 2,
      info: {
        slug: 'COLEÇÃO ATEMPORAL',
        descrption: 'Estilo e qualidade para durar.',
      },
    },
    {
      id: 3,
      image: bannerMobile03,
      vitrine: 3,
      info: {
        slug: 'COLEÇÃO ATEMPORAL',
        descrption: 'Alto impacto visual, baixo impacto ambiental!',
      },
    },
  ],
  tablet: [
    {
      id: 4,
      image: bannerTablet01,
      vitrine: 1,
      info: { slug: 'COLEÇÃO ATEMPORAL', descrption: '' },
    },
    {
      id: 5,
      image: bannerTablet02,
      vitrine: 2,
      info: {
        slug: 'COLEÇÃO ATEMPORAL',
        descrption: 'Estilo e qualidade para durar.',
      },
    },
    {
      id: 6,
      image: bannerTablet03,
      vitrine: 3,
      info: {
        slug: 'COLEÇÃO ATEMPORAL',
        descrption: 'Alto impacto visual, baixo impacto ambiental!',
      },
    },
  ],
  desktop: [
    {
      id: 7,
      image: bannerDesktop01,
      vitrine: 1,
      info: { slug: 'COLEÇÃO ATEMPORAL', descrption: '' },
    },
    {
      id: 8,
      image: bannerDesktop02,
      vitrine: 2,
      info: {
        slug: 'COLEÇÃO ATEMPORAL',
        descrption: 'Estilo e qualidade para durar',
      },
    },
    {
      id: 9,
      image: bannerDesktop03,
      vitrine: 3,
      info: {
        slug: 'COLEÇÃO ATEMPORAL',
        descrption: 'Alto impacto visual, baixo impacto ambiental!',
      },
    },
  ],
  quantity: 3,
}

import { useState } from 'react'

const handleResize = () => {
  const isMobile = window.innerWidth <= 375
  const isTablet = window.innerWidth > 375 && window.innerWidth <= 768

  return isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
}
export default function Banner() {
  const [show, setShow] = useState(1)
  const [whichScreen, setWhichScreen] = useState<
    'mobile' | 'tablet' | 'desktop'
  >(handleResize())

  window.addEventListener('resize', () => {
    setWhichScreen(handleResize())
  })
  console.log('whichScreen', whichScreen)
  console.log('show', show)
  return (
    <div className="max-w-[1440px] ">
      <Image
        src={leftArrow}
        width={18}
        height={18}
        alt="preview banner"
        onClick={() => {
          setShow(show - 1 === 0 ? banners.quantity : show - 1)
        }}
      />
      <div className='translate-x-6 transform ease-out duration-700'>
        {banners[whichScreen].map((banner) => {
          const preview = show - 1 === 0 ? banners.quantity : show - 1
          const next = show + 1 > banners.quantity ? 1 : show + 1

          /* if (banner.vitrine === preview)
            return (
              <Image
                key={banner.id}
                src={banner.image}
                alt="banner"
                className="absolute left-[-3e3px] transition duration-1000 ease-out"
              />
            ) */

          if (banner.vitrine === show)
            return (
              <Image
                key={banner.id} 
                src={banner.image}
                alt="absolute transition duration-1000 ease-out"
                className=''
              />
            )

       /*    if (banner.vitrine === next)
            return (
              <Image
                key={banner.id}
                src={banner.image}
                alt="banner"
                className="absolute right-[-3e3px] transition duration-1000 ease-out"
              />
            ) */
        })}
      </div>

      <Image
        src={rightArrow}
        width={18}
        height={18}
        alt="preview banner"
        onClick={() => setShow(show + 1 > banners.quantity ? 1 : show + 1)}
      />
    </div>
  )
}
