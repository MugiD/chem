const Home = () => {
  return (
    <div>
      <div className="flex justify-start items-center bg-no-repeat bg-cover bg-[url(https://ixbt.online/live/images/original/27/49/59/2022/08/20/83e6e1480d.jpg)] h-[60vh]">
        <h1 className="text-5xl font-bold text-white py-5 px-10 bg-blue-900">
          ШОЙЫН ӨНДІРІСІ <br /> ЖҮЗЕГЕ АСУЫ
        </h1>
      </div>
      <div className="py-10 flex flex-col items-center bg-gray-100">
        <h1 className="font-bold text-4xl mb-5 border-b-orange-400 border-b-4 max-w-max">
          ХИМИЗМ
        </h1>
        <div className="flex">
          <div className="border-r-2 border-r-black p-3">
            <h1 className="font-bold text-2xl">Кокс жануы</h1>
            <div className="flex flex-col">
              <div className="font-bold text-xl flex gap-5 text-orange-400">
                <h1>C</h1>+<h1>O2</h1>=<h1>CO2</h1>+<h1>402 кДЖ</h1>
              </div>
              <div className="font-bold text-xl flex gap-5 text-orange-400">
                <h1>CO2</h1>+<h1>C</h1>=<h1>CO</h1>-<h1>160 кДЖ</h1>
              </div>
            </div>
          </div>
          <div className="border-r-2 border-r-black p-3">
          <h1 className="font-bold text-2xl">Fe тотықсыздануы</h1>
            <div className="flex flex-col">
              <div className="font-bold text-xl flex gap-5 text-orange-400">
                <h1>Fe2O3</h1>+<h1>CO</h1>=<h1>Fe3O4</h1>+<h1>CO2</h1>+<h1>Q</h1>
              </div>
              <div className="font-bold text-xl flex gap-5 text-orange-400">
                <h1>Fe3O4</h1>+<h1>CO</h1>=<h1>FeO</h1>+<h1>CO2</h1>-<h1>Q</h1>
              </div>
              <div className="font-bold text-xl flex gap-5 text-orange-400">
                <h1>FeO</h1>+<h1>CO</h1>=<h1>Fe</h1>+<h1>CO2</h1>+<h1>Q</h1>
              </div>
            </div>
          </div>
          <div className="border-r-2 p-3">
          <h1 className="font-bold text-2xl">Шлак түзілуі</h1>
            <div className="flex flex-col">
              <div className="font-bold text-xl flex gap-5 text-orange-400">
                <h1>CaCO3</h1>=<h1>CaO</h1>+<h1>CO2</h1>-<h1>Q</h1>
              </div>
              <div className="font-bold text-xl flex gap-5 text-orange-400">
                <h1>CaO</h1>+<h1>SiO2</h1>=<h1>CaSiO3</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-5 border-b-orange-400 border-b-4 max-w-max">
          ДОМНА ПЕШІ
        </h1>
        <div className="flex justify-around items-center text-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://de-ussr.com/uploads/images/iskop/isk_034.jpg"
            alt="domna"
          />
          <div className="font-semibold w-[50%]">
            <p>
              <span>1. </span> Домна пешіне темір кенін, флюс, кокс пен
              известнякты салады
            </p>
            <p>
              <span>2. </span> Фурмадан ыстық ауа келіп, температура 1900С қа
              дейін көтіреліп кокс пен известняк жанады
            </p>
            <p>
              <span>3. </span> Өндірістен кейін горннан шлак және шойын бөлініп
              шығарылады
            </p>
            <hr className="my-4" />
            <p>
              Жанғанда кокс CO2 газы мен CO газын шығарады. Кейін CO2 үлкен
              температура әсерінен CO мен O2 газдарына ыдырайды. Нәтижесінде CO
              темір кенімен реакцияға түсіп, оттегін өзіңе қосып алады
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
