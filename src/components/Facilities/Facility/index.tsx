'use client'
import { useWhichDevice } from '@/utils/hooks/useHandleResize'
import Image, { StaticImageData } from 'next/image'
type TypeFacility = {
  id: `${string}-${string}-${string}-${string}-${string}`
  name: string
  description: string
  image: {
    mobile: StaticImageData
    other: StaticImageData
  }
}

export default function Facility({ facility }: { facility: TypeFacility }) {
  const whichScreen = useWhichDevice()

  return (
    <div className='flex gap-6 '>
      <Image
        src={facility.image[`${whichScreen != 'mobile' ? 'other' : 'mobile'}`]}
        alt={facility.name}
      />
      <div className="flex justify-between flex-col x:flex-row">
        <h3 className="font-bold leading-6 text-[#DAFF01] ">{facility.name}</h3>
        <p className="text-xs leading-5 text-white">{facility.description}</p>
      </div>
    </div>
  )
}
