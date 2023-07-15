import { randomUUID } from 'crypto'

import mobileBolsa from '@images/Mobile/Imagens cards/bolsa.png'
import mobileCalça from '@images/Mobile/Imagens cards/calça.png'
import mobileCamiseta from '@images/Mobile/Imagens cards/camiseta.png'
import mobileJaquetaJeans from '@images/Mobile/Imagens cards/jaqueta jeans.png'
import mobileOculos from '@images/Mobile/Imagens cards/Oculos.png'
import mobileTenis from '@images/Mobile/Imagens cards/tenis.png'

import tabletBolsa from '@images/Tablet/Imagens cards/bolsa.png'
import tabletCalça from '@images/Tablet/Imagens cards/calça.png'
import tabletCamiseta from '@images/Tablet/Imagens cards/camiseta.png'
import tabletJaquetaJeans from '@images/Tablet/Imagens cards/jaqueta jeans.png'
import tabletOculos from '@images/Tablet/Imagens cards/Oculos.png'
import tabletTenis from '@images/Tablet/Imagens cards/tenis.png'

import desktopBolsa from '@images/Desktop/Imagens cards/bolsa.png'
import desktopCalça from '@images/Desktop/Imagens cards/calça.png'
import desktopCamiseta from '@images/Desktop/Imagens cards/camiseta.png'
import desktopJaquetaJeans from '@images/Desktop/Imagens cards/jaqueta jeans.png'
import desktopOculos from '@images/Desktop/Imagens cards/Oculos.png'
import desktopTenis from '@images/Desktop/Imagens cards/tenis.png'

export const products =  [
  {
    id: randomUUID(),
    name: 'Comfort shirt',
    description:
      'Multicolor and sizes. 100% cotton fabric, fresh for summer. Unisex modeling.',
    price: 'R$ 70,00',
    image: {
      mobile: mobileCamiseta,
      tablet: tabletCamiseta,
      desktop: desktopCamiseta,
    },
  },
  {
    id: randomUUID(),
    name: 'Tailor Paints',
    description: 'Wide Leg tailoring model in linen, unissex. A piece for life!',
    price: 'R$ 180,00',
    image: { mobile: mobileCalça, tablet: tabletCalça, desktop: desktopCalça },
  },
  {
    id: randomUUID(),
    name: 'Chuncky tennis',
    description:
      'casual Snicker with a higher sole and a chunky fit. Unisex model.',
    price: 'R$ 250,00',
    image: { mobile: mobileTenis, tablet: tabletTenis, desktop: desktopTenis },
  },
  {
    id: randomUUID(),
    name: 'Denim jacket',
    description:
      'Oversized unisex model with a suede collar. Timeless and authentic.',
    price: 'R$ 150,00',
    image: {
      mobile: mobileJaquetaJeans,
      tablet: tabletJaquetaJeans,
      desktop: desktopJaquetaJeans,
    },
  },
  {
    id: randomUUID(),
    name: 'Round Glasses',
    description: 'Graphite metal frame with rounded lenses. No mistake! ',
    price: 'R$ 120,00',
    image: {
      mobile: mobileOculos,
      tablet: tabletOculos,
      desktop: desktopOculos,
    },
  },
  {
    id: randomUUID(),
    name: 'Joker bag',
    description:
      'Camel bag in high-quality synthetic leather. Ideal to accompany for a lifetime!',
    price: 'R$ 120,00',
    image: { mobile: mobileBolsa, tablet: tabletBolsa, desktop: desktopBolsa },
  },
]
