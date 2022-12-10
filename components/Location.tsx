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
          <h1 className="text-orange-400 font-bold text-3xl mb-5">
            Қостанайда:
          </h1>
          <div className="flex flex-col">
            <a className="hover:text-orange-400" href="https://kk.wikipedia.org/wiki/%D2%9A%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B9_%D1%82%D0%B5%D0%BC%D1%96%D1%80_%D0%BA%D0%B5%D0%BD%D0%B4%D1%96_%D0%B0%D0%BB%D0%B0%D0%B1%D1%8B">
              1. Қостанай темір кенді алабы
            </a>
            <a className="hover:text-orange-400" href="https://kk.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D1%88%D0%B8%D0%BD_%D1%82%D0%B5%D0%BC%D1%96%D1%80_%D0%BA%D0%B5%D0%BD_%D0%BE%D1%80%D0%BD%D1%8B">
              2. Алешин темір кен орны
            </a>
            <a className="hover:text-orange-400" href="https://kk.wikipedia.org/wiki/%D0%9B%D0%B8%D1%81%D0%B0%D0%BA%D0%BE%D0%B2_%D1%82%D0%B5%D0%BC%D1%96%D1%80_%D0%BA%D0%B5%D0%BD_%D0%BE%D1%80%D0%BD%D1%8B">
              3. Лисаков темір кен орны
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
