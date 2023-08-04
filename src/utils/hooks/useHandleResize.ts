import { useState } from 'react'

export const useWhichScreen = () => {
  const [whichScreen, setWhichScreen] = useState<
    'mobile' | 'tablet' | 'desktop'
  >(handleResize())

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setWhichScreen(handleResize())
    })
  }

  return whichScreen
}

const handleResize = () => {
  if (typeof window !== 'undefined') {
    const windowWidth = window.innerWidth
    const isMobile = windowWidth < 500
    const isTablet = windowWidth >= 500 && windowWidth <= 1280
    return isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  }

  return 'mobile'
}
