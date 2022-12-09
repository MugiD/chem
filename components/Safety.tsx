const Safety = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center bg-gray-100">
    <h1 className="font-bold text-4xl border-b-orange-400 border-b-4 max-w-max mb-5">
      ӨНДІРІСТЕГІ ЕРЕЖЕЛЕР
    </h1>
    <div className="flex justify-center gap-10 items-start text-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://media.tproger.ru/uploads/2021/09/710465_security_protection_shield_icon-cover-icon-original.png"
        alt="Shouin"
        className="w-[10%]"
      />
      <div className="">
        <p>1. Аспаптар құрғақ болуы қажет</p>
        <p>2. Жұмысшылар көзілдірік, халат, қолғап киюі міндетті</p>
        <p>3. Май мен қышқылдар тиіп кетпеуін қадағалау</p>
        <p>4. Шойынның пеште қалып, кейін қатып қалуын болдырмау</p>
      </div>
    </div>
  </div>
  )
}

export default Safety