import { useState } from 'react'

export const useWhichScreen = () => {
  const [whichScreen, setWhichScreen] = useState<
    'mobile' | 'tablet' | 'desktop'
  >(handleResize())

  window.addEventListener('resize', () => {
    setWhichScreen(handleResize())
  })

  return whichScreen
}

const handleResize = () => {
  const isMobile = window.innerWidth < 768
  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1440
  return isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
}
