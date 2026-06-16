
// Components
import CreateRoomHeaderComp from "../component/create-room/header.comp";
import RoomDetailsComp from "../component/create-room/room-details.comp";
import PlayersComp from "../component/create-room/players.comp";

const CreateRoomScreen = () => {

    return (
        <div>
            <CreateRoomHeaderComp />
            <RoomDetailsComp />
            <PlayersComp />
        </div>
    )
}

export default CreateRoomScreen;
