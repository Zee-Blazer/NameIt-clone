
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screens
import HomeScreen from "./screens/home.screen";
import CreateRoomScreen from "./screens/create-room.screen";
import JoinRoomScreen from "./screens/join-room.screen";
import PlayGameScreen from "./screens/play-game.screen";

const RouterComp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeScreen /> } />
                <Route path="/create-room" element={ <CreateRoomScreen /> } />
                <Route path="/join-room" element={ <JoinRoomScreen /> } />
                <Route path="/play-game" element={ <PlayGameScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComp;
