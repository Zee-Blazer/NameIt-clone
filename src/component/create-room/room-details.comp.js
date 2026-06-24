
// Icons
import { FaRegCopy } from "react-icons/fa";

// Redux
import { useSelector } from "react-redux";

const RoomDetailsComp = () => {

    const roomId = useSelector( (state) => state.room.roomId );

    return (
        <div className="rounded shadow w-7/12 mx-auto my-8 py-6 px-8 text-center">
            <h2>Glyte Room</h2>

            <div className="bg-red-50 rounded py-4 px-6 my-4">
                <p>ROOM CODE</p>
                <div className="flex justify-self-center mx-auto text-center">
                    <h3 className="text-2xl capitalize text-red-700 font-bold">{ roomId ? roomId.payload : "Empty" }</h3>
                    <p className="flex items-center ml-3 cursor-pointer bg-white p-1 rounded hover:bg-red-200 transition">
                        <FaRegCopy />
                        Copy Code
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RoomDetailsComp;
