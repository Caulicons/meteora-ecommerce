export const handleResize = () => {
  const isMobile = window.innerWidth <= 375
  const isTablet = window.innerWidth > 375 && window.innerWidth <= 768
  return isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
}