import React, { useState } from 'react';

// Firebase firestore
import { collection, addDoc } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { db, auth } from '../../firebase.config';

// Redux
import { useDispatch } from 'react-redux'; 
import { newRoomId } from '../../redux/reducers/room';

// Route 
import { useNavigate } from 'react-router-dom';

// Components
import PlaySoloComp from "./playsolo.comp";
import PlayWithFriendComp from "./playwithfriend.comp";

const PlayConsoleComp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [loading, setLoading] = useState(false); 

    const [withFriend, setWithFriend] = useState(true);

    const addUser = async () => {
        setLoading(true);
        try {
            if(name.length > 0) {
                const currentUser = await signInAnonymously(auth);
                const doAddRecord = await addDoc(collection(db, "users"), { name, userId: currentUser.user.uid });
                const createRoom = await addDoc(collection(db, "rooms"), { name, userId: currentUser.user.uid, host: true });
                dispatch(newRoomId({type: "", payload: createRoom.id}));

                setName("");
                setLoading(false);
                navigate("/create-room");
            }
        }
        catch(err) {
            console.log(`Got error: ${err}`);
            setLoading(false);
        }
    }

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
                    <PlayWithFriendComp name={ name } setName={ setName } send={ addUser } loading={ loading } /> 
                    :
                    <PlaySoloComp />
            }

        </div>
    )
}

export default PlayConsoleComp;
