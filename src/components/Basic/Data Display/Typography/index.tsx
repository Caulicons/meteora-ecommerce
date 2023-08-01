import { createElement } from 'react'
import { ClassNameValue } from 'tailwind-merge'

interface TypographyProps extends React.HTMLProps<HTMLDivElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' // Typography variant// Content to be displayed inside the typography component
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' // Typography variant// Content to be displayed inside the typography component
}

// Define an interface for the class names mapping

const classesNames  = {
  success: ``
}

const variantClassesMapping = {
  p: 'text-base font-bold ',
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base ',
  default: '',
}



export default function Typography({
  variant = 'p',
  children,
  component = 'p',
  className,
}: TypographyProps) {
  const classNameMap = `${variantClassesMapping[variant]} ${className}`

  return createElement(component, { className: classNameMap }, children)
}
