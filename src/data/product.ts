import ProductType from '@/utils/types/productType'

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Comfort shirt',
    description:
      'Multicolor and sizes. 100% cotton fabric, fresh for summer. Unisex modeling.',
    price: 'R$ 70,00',
    category: 'shirts',
    image: {
      mobile: 'assets/imgs/Mobile/Imagens cards/camiseta.png',
      tablet: 'assets/imgs/Tablet/Imagens cards/camiseta.png',
      desktop: 'assets/imgs/Desktop/Imagens cards/camiseta.png',
    },
    options: [
      {
        id: 'colors',
        legend: 'Colors',
        details: [
          {
            id: 'a014e912-4b7c-11ec-9621-0242ac130002',
            name: 'Light blue',
            value: 'light blue',
            colorBackground: '#75D7F0',
          },
          {
            id: 'a014e9ca-4b7c-11ec-9621-0242ac130002',
            name: 'OffWhite',
            value: 'off white',
            colorBackground: '#F3F6F7',
          },
          {
            id: 'a014eab6-4b7c-11ec-9621-0242ac130002',
            name: 'Black',
            value: 'black',
            colorBackground: '#000000',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Tailor Pants',
    description: 'Wide Leg tailoring model in linen. A piece for life!',
    price: 'R$ 180,00',
    category: 'pants',
    image: {
      mobile: 'assets/imgs/Mobile/Imagens cards/calça.png',
      tablet: 'assets/imgs/Tablet/Imagens cards/calça.png',
      desktop: 'assets/imgs/Desktop/Imagens cards/calça.png',
    },
    options: [
      {
        id: 'colors',
        legend: 'Colors',
        details: [
          {
            id: 'a014e912-4b7c-11ec-9621-0242ac130002',
            name: 'Light blue',
            value: 'light blue',
            colorBackground: '#75D7F0',
          },
          {
            id: 'a014e9ca-4b7c-11ec-9621-0242ac130002',
            name: 'OffWhite',
            value: 'off white',
            colorBackground: '#F3F6F7',
          },
          {
            id: 'a014eab6-4b7c-11ec-9621-0242ac130002',
            name: 'Black',
            value: 'black',
            colorBackground: '#000000',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Chuncky tennis',
    description:
      'casual Snicker with a higher sole and a chunky fit. Unisex model.',
    price: 'R$ 250,00',
    category: 'tennis',
    image: {
      mobile: 'assets/imgs/Mobile/Imagens cards/tenis.png',
      tablet: 'assets/imgs/Tablet/Imagens cards/tenis.png',
      desktop: 'assets/imgs/Desktop/Imagens cards/tenis.png',
    },
    options: [
      {
        id: 'colors',
        legend: 'Colors',
        details: [
          {
            id: 'a014e912-4b7c-11ec-9621-0242ac130002',
            name: 'Light blue',
            value: 'light blue',
            colorBackground: '#75D7F0',
          },
          {
            id: 'a014e9ca-4b7c-11ec-9621-0242ac130002',
            name: 'OffWhite',
            value: 'off white',
            colorBackground: '#F3F6F7',
          },
          {
            id: 'a014eab6-4b7c-11ec-9621-0242ac130002',
            name: 'Black',
            value: 'black',
            colorBackground: '#000000',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Denim jacket',
    description:
      'Oversized unisex model with a suede collar. Timeless and authentic.',
    price: 'R$ 150,00',
    category: 'jackets',
    image: {
      mobile: 'assets/imgs/Mobile/Imagens cards/jaqueta jeans.png',
      tablet: 'assets/imgs/Tablet/Imagens cards/jaqueta jeans.png',
      desktop: 'assets/imgs/Desktop/Imagens cards/jaqueta jeans.png',
    },
    options: [
      {
        id: 'colors',
        legend: 'Colors',
        details: [
          {
            id: 'a014e912-4b7c-11ec-9621-0242ac130002',
            name: 'Light blue',
            value: 'light blue',
            colorBackground: '#75D7F0',
          },
          {
            id: 'a014e9ca-4b7c-11ec-9621-0242ac130002',
            name: 'OffWhite',
            value: 'off white',
            colorBackground: '#F3F6F7',
          },
          {
            id: 'a014eab6-4b7c-11ec-9621-0242ac130002',
            name: 'Black',
            value: 'black',
            colorBackground: '#000000',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Round Glasses',
    description: 'Graphite metal frame with rounded lenses. No mistake! ',
    price: 'R$ 120,00',
    category: 'glasses',
    image: {
      mobile: 'assets/imgs/Mobile/Imagens cards/Oculos.png',
      tablet: 'assets/imgs/Tablet/Imagens cards/Oculos.png',
      desktop: 'assets/imgs/Desktop/Imagens cards/Oculos.png',
    },
    options: [
      {
        id: 'colors',
        legend: 'Colors',
        details: [
          {
            id: 'a014e912-4b7c-11ec-9621-0242ac130002',
            name: 'Light blue',
            value: 'light blue',
            colorBackground: '#75D7F0',
          },
          {
            id: 'a014e9ca-4b7c-11ec-9621-0242ac130002',
            name: 'OffWhite',
            value: 'off white',
            colorBackground: '#F3F6F7',
          },
          {
            id: 'a014eab6-4b7c-11ec-9621-0242ac130002',
            name: 'Black',
            value: 'black',
            colorBackground: '#000000',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Joker bag',
    description:
      'Camel bag in high-quality synthetic leather. Ideal to accompany for a lifetime!',
    price: 'R$ 120,00',
    category: 'bags',
    image: {
      mobile: 'assets/imgs/Mobile/Imagens cards/bolsa.png',
      tablet: 'assets/imgs/Tablet/Imagens cards/bolsa.png',
      desktop: 'assets/imgs/Desktop/Imagens cards/bolsa.png',
    },
    options: [
      {
        id: 'colors',
        legend: 'Colors',
        details: [
          {
            id: 'a014e912-4b7c-11ec-9621-0242ac130002',
            name: 'Light blue',
            value: 'light blue',
            colorBackground: '#75D7F0',
          },
          {
            id: 'a014e9ca-4b7c-11ec-9621-0242ac130002',
            name: 'OffWhite',
            value: 'off white',
            colorBackground: '#F3F6F7',
          },
          {
            id: 'a014eab6-4b7c-11ec-9621-0242ac130002',
            name: 'Black',
            value: 'black',
            colorBackground: '#000000',
          },
        ],
      },
    ],
  },
]
