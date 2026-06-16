import React, { useState } from 'react';

// Components
import PlaySoloComp from "./playsolo.comp";
import PlayWithFriendComp from "./playwithfriend.comp";

const PlayConsoleComp = () => {

    const [withFriend, setWithFriend] = useState(true);

    return (
        <div className='w-4/12 border mx-auto rounded-2xl py-6 px-8'>
            <div className='flex justify-evenly p-2 bg-gray-200 rounded-md items-center'>
                <p 
                    className={ withFriend ? "bg-white text-red-500 font-bold rounded py-2 px-[52px] cursor-pointer" : "cursor-pointer font-bold" }
                    onClick={ () => setWithFriend(true) }
                >Play with friends</p>
                <p 
                    className={ !withFriend ? "bg-white text-red-500 font-bold rounded py-2 px-[52px] cursor-pointer" : "cursor-pointer font-bold" }
                    onClick={ () => setWithFriend(false) }
                >Play solo</p>
            </div>

            {
                withFriend ?
                    <PlayWithFriendComp /> 
                    :
                    <PlaySoloComp />
            }

        </div>
    )
}

export default PlayConsoleComp;
