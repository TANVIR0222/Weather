import { FaCircle } from "react-icons/fa";
import {  UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
// UilArrowUp, UilArrowDown,
const TemperatureDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl to-cyan-300" >
                <h1>Cloudy or whatever</h1>
            </div>
            <div className="flex flex-row items-center justify-between py-3 text-white">
                <FaCircle className="text-5xl text-orange-500 w-20"></FaCircle>
                <p className="text-5xl">34°</p>
                {/* {1} */}
                <div className="flex flex-col space-y-2">
                    <div className="flex text-sm items-center justify-center font-light ">
                        <UilTemperature size={18} className='ml-1' />
                        Real fill :
                        <span className="font-medium ml-1" >32°</span>
                    </div>
                    {/* {2} */}
                    <div className="flex text-sm items-center justify-center font-light ">
                        <UilTear size={18} className='ml-1' />
                        Humidity :
                        <span className="font-medium ml-1" >65%</span>
                    </div>
                    {/* {3} */}
                    <div className="flex text-sm items-center justify-center font-light ">
                        <UilWind size={18} className='ml-1' />
                        Wind :
                        <span className="font-medium ml-1" >11 km/h</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-white text-sm space-x-2 py-3">
                <UilSun/>
                <p className="font-light">
                    Rise : <span className="font-medium mi-1" >06 : 45 AM</span>
                </p>
                <p className="font-light">|</p>

                <UilSunset/>
                <p className="font-light">
                    Set : <span className="font-medium mi-1" >07 : 45 AM</span>
                </p>
                <p className="font-light">|</p>

                <UilSun/>
                <p className="font-light">
                    Hight : <span className="font-medium mi-1" >50°</span>
                </p>
                <p className="font-light">|</p>

                <UilSun/>
                <p className="font-light">
                    Low : <span className="font-medium mi-1" >30°</span>
                </p>
            </div>
        </div>
    );
};

export default TemperatureDetails;