import { useCallback, useEffect } from 'react'
import checkIcon from '@images/icon/checkIconModelProduct.svg'
import closeIcon from '@images/icon/closeIconProductModel.svg'
import Image from 'next/image'

interface modalProps {
  show: boolean
  children: React.ReactNode
  onClose: () => void
  title: string
}

export default function Modal({ children, show, onClose, title }: modalProps) {
  const closeOnEscapeKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', (e) => {})
    }
  }, [closeOnEscapeKeyDown])

  return (
    <div
      onClick={onClose}
      className={`fixed bottom-0 left-0 right-0 top-0 flex justify-center overflow-y-auto bg-slate-500/70 sm:items-center ${
        show
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none hidden opacity-0 transition-all duration-300 ease-in-out'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        ${
          show
            ? 'translate-y-0'
            : 'duration-600 hidden -translate-y-52 transition-all ease-in-out'
        }
        `}
      >
        <div className="flex w-full max-w-[700px] flex-col ">
          <div className="flex w-full items-center justify-between gap-5 bg-black p-4 text-left">
            <div className="flex items-center gap-5">
              <Image src={checkIcon} alt="check Icon" width={32} height={32} />
              <p className="text-xl font-medium leading-5 text-white">
                {title}
              </p>
            </div>
            <Image src={closeIcon} alt="close icon" width={16} height={16} className='' onClick={onClose}/>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
