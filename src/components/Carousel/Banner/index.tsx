import Image from 'next/image';
import { ComponentProps } from 'react';

interface BannerProps extends ComponentProps<'div'> {
  banner: {
    id: number
    image: string
    vitrine: number
    info: {
      position: string
      slug: string
      description: string
    }
  }
}

export default function Banner({ banner }: BannerProps) {
  return (
    <div
      key={banner.id}
      className="relative flex w-full flex-none snap-start items-center justify-center"
    >
      <Image
        src={banner.image}
        alt="banner"
        className={`slide max-h-[415px] w-full`}
        style={{ objectFit: 'cover' }}
        width={1440}
        height={1440}
        priority
      />
      <div
        className={`absolute mt-[45%] w-9/12 text-center phone:mt-[25%] tablet:mt-auto ${
          banner.info.position === 'right'
            ? 'phone:text-right'
            : 'phone:text-left'
        }`}
      >
        <h1 className="text-4xl font-medium text-white tablet:text-5xl">
          {banner.info.slug}
        </h1>
        <p className="text-white">{banner.info.description}</p>
      </div>
    </div>
  )
}
