import React, { useState } from 'react';

// Firebase firestore
// import { collection, addDoc } from "firebase/firestore";
// import { db } from '../../firebase.config';

// Components
import PlaySoloComp from "./playsolo.comp";
import PlayWithFriendComp from "./playwithfriend.comp";

const PlayConsoleComp = () => {

    const [name, useName] = useState("");

    const [withFriend, setWithFriend] = useState(true);

    // const addUser = async () => {
    //     try {
    //         const doAddRecord = await addDoc(collection(db, "users"), { name: "Josh" });
    //     }
    //     catch(err) {
    //         console.log(`Got error: ${err}`);
    //     }
    // }

    console.log({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

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

            {/* <button onClick={ addUser }>Send Request</button> */}

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
