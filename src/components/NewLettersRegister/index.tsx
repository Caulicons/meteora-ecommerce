export default function NewLettersRegister() {
  return (
    <div className="m-6 flex w-11/12 max-w-[729px] flex-col justify-center gap-6 border p-6 text-center tablet:p-10 shrink-0">
      <p className="text-xl leading-5 text-subTitle ">
        Do you want receive our news, exclusive promotions and 10% OFF on your
        first purchase? Register!
      </p>
      <form className=" flex w-full justify-center" action="#">
        <input
          placeholder="Type yor e-mail"
          type="email"
          className=" w-4/5 border border-r-0 border-black px-4 py-2 leading-6 text-[#6C757D] max-w-[422px]"
        />
        <button
          type="submit"
          className="spacing borde w-auto border border-purple bg-purple p-2 px-4 font-medium tracking-wider text-white"
        >
          Send
        </button>
      </form>
    </div>
  )
}
