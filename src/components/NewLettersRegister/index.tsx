'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../Modal'
import NewsletterModal from '../Modal/NewsletterModal'

type emailInput = {
  email: string
}
export default function NewLettersRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<emailInput>()
  const [showNewsletterModel, setShowNewsletterModel] = useState(false)

  const handleClick = () => {+
    setShowNewsletterModel((state) => !state)
  }

  const onSubmit = (data: emailInput) => {
    console.log(data)

    if(data){
      handleClick()
      reset()
    }
  }
  // create a shuffle function 
  
  return (
    <div className="m-6 flex w-11/12 max-w-[729px] shrink-0 flex-col justify-center gap-6 border p-6 text-center tablet:p-10">
      <p className="text-xl leading-5 text-subTitle ">
        Do you want receive our news, exclusive promotions and 10% OFF on your
        first purchase? Register!
      </p>
      <form
        className=" flex w-full justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder={errors.email ? errors.email?.message : 'Type your email'}
          type="email"
          className=" w-4/5 max-w-[422px] border border-r-0 border-black px-4 py-2 leading-6 text-[#6C757D] "
          {...register('email', { required: 'Typing your mail here...' })}
        />
        <button
          type="submit"
          className="spacing borde w-auto border border-purple bg-purple p-2 px-4 font-medium tracking-wider text-white"
        >
          Send
        </button>
        {showNewsletterModel && (
          <Modal
            show={showNewsletterModel}
            title="mail register success!"
            onClose={() => setShowNewsletterModel(false)}
            className="items-center"
          >
            <NewsletterModal />
          </Modal>
        )}
      </form>
    </div>
  )
}
