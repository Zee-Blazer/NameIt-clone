
const CreateRoomHeaderComp = () => {

    return (
        <div className="flex w-7/12 mx-auto my-4 justify-between items-center">
            <h2 className="text-red-500 text-2xl font-bold">NameIt!</h2>
            <p 
                className="bg-red-200 py-1 px-3.5 cursor-pointer hover:bg-red-400 transition rounded font-medium text-sm"
            >Game Rules</p>
        </div>
    )
}

export default CreateRoomHeaderComp;
