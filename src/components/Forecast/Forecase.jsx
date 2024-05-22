import { FaCircle } from "react-icons/fa";

const Forecase = ({title}) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6 ">
                <p className="text-white font-medium uppercase "> {title} </p>
            </div>
            <div className="divider divider-secondary my-1"></div>
            <div className="flex flex-row items-center justify-between text-white">

                <div className="flex flex-col items-center justify-center ">
                    <p className="font-light text-sm">4:30 PM</p>
                    <FaCircle className="text-2xl text-orange-500 w-12 my-1"></FaCircle>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <p className="font-light text-sm">4:30 PM</p>
                    <FaCircle className="text-2xl text-orange-500 w-12 my-1"></FaCircle>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <p className="font-light text-sm">4:30 PM</p>
                    <FaCircle className="text-2xl text-orange-500 w-12 my-1"></FaCircle>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <p className="font-light text-sm">4:30 PM</p>
                    <FaCircle className="text-2xl text-orange-500 w-12 my-1"></FaCircle>
                    <p className="font-medium">22°</p>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <p className="font-light text-sm">4:30 PM</p>
                    <FaCircle className="text-2xl text-orange-500 w-12 my-1"></FaCircle>
                    <p className="font-medium lowercase">22°</p>
                </div>

            </div>
        </div>
    );
};

export default Forecase;