
// Icons
import { BsThreeDotsVertical } from "react-icons/bs";

// MUI Component
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const NavBarComp = () => {

    return (
        <div className="flex justify-between items-center py-4 px-16 border-b border-red-200">
            <h2 className="text-red-500 text-2xl font-bold">NameIt!</h2>
            <div className="flex items-center gap-4 ">
                <BsThreeDotsVertical />

                <div className="flex gap-4 border py-1.5 px-3 rounded">
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 24, height: 24, fontSize: 16 }}>N</Avatar>
                    <p>0</p>
                </div>
            </div>
        </div>
    )
}

export default NavBarComp;
