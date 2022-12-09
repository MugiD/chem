const Transport = () => {
  return (
    <div className="mb-5 flex flex-col justify-center items-center gap-y-5">
    <h1 className="font-bold text-4xl mt-4 border-b-orange-400 border-b-4 max-w-max">
      ЛОГИСТИКА
    </h1>
    <div className="flex justify-center gap-20 items-center text-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://img-fotki.yandex.ru/get/95493/68146596.8b/0_108ca4_fc510656_XXXL.jpg"
        alt="Shouin"
        className="w-[30%]"
      />
      <p className="w-[30%]">
        <span className="text-orange-400 font-bold">Шойын тасушы</span> – сұйық шойынды (соның ішінде зауыттар мен өнеркәсіптік
        кәсіпорындар аумағында) араластырғыш пен домна пешіне тасымалдауға
        арналған жүк вагонының түрі. Технологиялық көлік ретінде
        пайдаланылады. КСРО-да шығарылған темір тасығыштардың максималды
        сыйымдылығы 100-140 тонна болды.
      </p>
    </div>
  </div>
  )
}

export default Transport