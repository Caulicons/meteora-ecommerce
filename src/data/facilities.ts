import mobileDiamond from '@images/Mobile/Ícones/x-diamond.png'
import mobileArrowRepeat from '@images/Mobile/Ícones/arrow-repeat.png'
import mobileFlower from '@images/Mobile/Ícones/flower.png'

import otherDiamond from '@images/Desktop/Ícones/x-diamond.png'
import otherArrowRepeat from '@images/Desktop/Ícones/arrow-repeat.png'
import otherFlower from '@images/Desktop/Ícones/flower.png'
import { randomUUID } from 'crypto'

export const facilities = [
  {
    id: randomUUID(),
    name: 'PAY BY PIX',
    description: 'Gain 5% OFF payment via pix.',
    image: {
      mobile: mobileDiamond,
      other: otherDiamond
    },
  },
  {
    id: randomUUID(),
    name: 'FREE EXCHANGE',
    description: 'Free to exchange within 30 days',
    image: {
      mobile: mobileArrowRepeat,
      other: otherArrowRepeat
    },
  },
  {
    id: randomUUID(),
    name: 'SUSTAINABILITY',
    description: 'Responsible fashion that respects the environment.',
    image: {
      mobile: mobileFlower,
      other: otherFlower
    },
  }
]