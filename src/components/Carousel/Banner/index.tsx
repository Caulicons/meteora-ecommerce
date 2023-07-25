import Image, { StaticImageData } from 'next/image'

interface BannerProps {
  banner: {
    id: number
    image: StaticImageData
    vitrine: number
    info: {
      position: string
      slug: string
      description: string
    }
  },
}

export default function Banner ({ banner }: BannerProps  ) {
 
  return (
    <div
      key={banner.id}
      className="relative flex w-full flex-none snap-start items-center justify-center "
    >
      <Image
        src={banner.image}
        alt="banner"
        className={`slide h-auto max-h-[415px] w-full shrink-0 transition-all duration-700 ease-in-out `}
        style={{ objectFit: 'cover' }}
        priority
      />
      <div
        className={`absolute mt-[45%]  w-9/12 text-center phone:mt-[25%] tablet:mt-auto  ${
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
}

/* import Image, { StaticImageData } from 'next/image';
import { forwardRef, Ref, RefAttributes } from 'react';

interface BannerProps {
  banner: {
    id: number;
    image: StaticImageData;
    vitrine: number;
    info: {
      position: string;
      slug: string;
      description: string;
    };
  };
}

// Define a separate interface for props that includes the 'ref' prop
interface BannerWithRefProps extends BannerProps, RefAttributes<HTMLDivElement> {}

const Banner = forwardRef<HTMLDivElement, BannerWithRefProps>((props, ref) => {
  const { banner } = props;

  return (
    <div
      key={banner.id}
      className="relative flex w-full flex-none snap-start items-center justify-center "
      ref={ref}
    >
      <Image
        src={banner.image}
        alt="banner"
        className={`slide h-auto max-h-[415px] w-full shrink-0 transition-all duration-700 ease-in-out `}
        style={{ objectFit: 'cover' }}
        priority
      />
      <div
        className={`absolute mt-[45%]  w-9/12 text-center phone:mt-[25%] tablet:mt-auto  ${
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
  );
});


Banner.displayName = 'Banner'

export default Banner
 */