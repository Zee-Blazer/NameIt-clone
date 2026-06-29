import React, { useState, useEffect } from 'react';

// Firebase
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';

// Redux
import { useSelector } from 'react-redux';

// MUI component
import Button from '@mui/material/Button';

// Components
import PlayerDetailComp from './player-detail.comp';

const PlayersComp = () => {

    const roomId = useSelector( state => state.room.roomId.payload );

    const [users, setUsers] = useState();

    const handleReadDB = async () => {
        
    }

    useEffect(() => {
        const people = onSnapshot(doc(db, `rooms`, roomId), (docSnapshot) => {
            if (docSnapshot.exists()) {
                const roomData = { ...docSnapshot.data() };
                // console.log([ roomData.members ]);
                setUsers([ roomData.members ]);
            } else {
                console.log("This room does not exist!");
            }
        })
    }, []);

    console.log(users);

    return (
        <div className="rounded shadow w-7/12 mx-auto my-8 py-6 px-8 text-center">
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Players <span className='text-red-600'>(1/3)</span></p>
                <Button 
                    variant="contained" sx={{ backgroundColor: "grey" }}
                >Leave Room</Button>
            </div>

            <div>
                {
                    users.map( (items, i) => {
                        
                        return (
                            <PlayerDetailComp type={items.host ? "host" : "player"} name={items.name} num={i+1} />
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default PlayersComp;
