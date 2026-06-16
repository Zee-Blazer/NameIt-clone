
// Icons
import { DiGhostSmall } from "react-icons/di";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaCircleUp } from "react-icons/fa6";

const PlayerDetailComp = ({ type, name, num }) => {

    return (
        <div className="flex justify-between py-3 px-4 my-3.5 bg-red-50 rounded-md border border-yellow-200">
            <div className="flex gap-4">
                <p className="font-semibold text-red-600">{ num }</p>
                <p>{ name }</p>
            </div>
            <div>
                {
                    type == "host" ? 
                        <p className="flex items-center gap-2 text-red-600 font-medium">
                            <DiGhostSmall />
                            Host
                        </p>
                        :
                        <p className="flex gap-3 items-center">
                            <RiDeleteBinFill className="text-xl cursor-pointer text-gray-500" />
                            <FaCircleUp className="text-xl cursor-pointer text-gray-500" />
                        </p>
                }
            </div>
        </div>
    )
}

export default PlayerDetailComp;
