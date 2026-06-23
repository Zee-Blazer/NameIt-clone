
// Components
import NavBarComp from "../component/utilsComp/nav.comp";
import DescripComp from "../component/homeScreenComp/descrip.comp";
import PlayConsoleComp from "../component/homeScreenComp/play-console.comp";
import FakeDisplayComp from "../component/homeScreenComp/fake-display.comp";

const HomeScreen = () => {

    return (
        <>
            <NavBarComp />
            <DescripComp />
            <PlayConsoleComp />
            <FakeDisplayComp />
        </>
    )
}

export default HomeScreen;
