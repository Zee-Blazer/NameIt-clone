
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Screens
import HomeScreen from "./screens/home.screen";

const RouterComp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomeScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComp;
