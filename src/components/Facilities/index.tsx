import { facilities } from '@/data/facilities'
import Facility from './Facility'

export default function Facilities() {
  return (
    <div className="flex w-screen flex-col justify-center gap-8 bg-black  py-8 xl:gap-10 xl:py-10">
      <h2 className="text-center text-[32px] font-medium text-white ">
        Discover all our facilities.
      </h2>
      <div className="desktop mx-auto flex flex-col gap-8 desktop:gap-9 desktop:flex-row">
        {facilities.map((item) => {
          return <Facility key={item.id} facility={item} />
        })}
      </div>
    </div>
  )
}
