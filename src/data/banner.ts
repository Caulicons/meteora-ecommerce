import bannerMobile01 from '@images/Mobile/Banner_carousel 1 _ 375.png'
import bannerMobile02 from '@images/Mobile/Banner carousel 2 _ 375.png'
import bannerMobile03 from '@images/Mobile/Banner carousel 3 _ 375.png'

import bannerTablet01 from '@images/Tablet/Banner carousel 1 _ 768.png'
import bannerTablet02 from '@images/Tablet/Banner carousel 2 _ 768.png'
import bannerTablet03 from '@images/Tablet/Banner carousel 3 _ 768.png'

import bannerDesktop01 from '@images/Desktop/Banner carousel 1 _ 1440.png'
import bannerDesktop02 from '@images/Desktop/Banner carousel 2 _ 1440.png'
import bannerDesktop03 from '@images/Desktop/Banner carousel 3 _ 1440.png'

export const banners = {
  mobile: [
    {
      id: 1,
      image: bannerMobile01,
      vitrine: 0,
      info: { position: '', slug: '', description: '' },
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
      info: { position: '', slug: '', description: '' },
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
      info: { position: '', slug: '', description: '' },
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
