import { useEffect, useState } from 'react'

export const useWhichDevice = () => {
  const [whichScreen, setWhichScreen] = useState<
    'mobile' | 'tablet' | 'desktop'
  >(findDeviceByWidth(window.innerWidth))

  useEffect(() => {
    const handleWindowResize = () => {
      setWhichScreen(findDeviceByWidth(window.innerWidth))
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  return whichScreen
}

function findDeviceByWidth(windowWidth: number) {
  const isMobile = windowWidth < 500
  const isTablet = windowWidth >= 500 && windowWidth <= 1280
  return isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
}
