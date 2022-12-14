import Transport from "../components/Transport";
import Location from "../components/Location";
import Importance from '../components/Importance'
import Funds from "../components/Funds";

const General = () => {
  return (
    <div>
      <div className="flex justify-start items-center bg-no-repeat bg-cover bg-[url(https://ixbt.online/live/images/original/27/49/59/2022/08/20/83e6e1480d.jpg)] h-[60vh]">
        <h1 className="text-5xl font-bold text-white py-5 px-10 bg-blue-900">
          ШОЙЫН ӨНДІРІСІ <br /> ТУРАЛЫ
        </h1>
      </div>
      <Importance />
      <Location />
      <Transport />
      <Funds />
    </div>
  );
};

export default General;
