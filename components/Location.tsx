const Location = () => {
  return (
    <div className="py-10 flex justify-start items-center bg-gray-100 relative h-[400px]">
    <h1 className="font-bold text-4xl border-b-orange-400 border-b-4 max-w-max rotate-[-90deg]">
      ОРНАЛАСУ
    </h1>
    <div className="flex justify-center gap-20 items-start text-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="kostanay.png"
        alt="Shouin"
        className="w-[260px] h-[320px] drop-shadow-2xl"
      />
      <div className="">
        <h1 className="text-orange-400 font-bold text-3xl mb-5">Қостанайда:</h1>
        <p>1. Қостанай темір кенді алабы</p>
        <p>2. Алешин темір кен орны</p>
        <p>3. Лисаков темір кен орны</p>
      </div>
    </div>
  </div>
  )
}

export default Location