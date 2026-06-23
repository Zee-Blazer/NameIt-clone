import React, { useState } from 'react';

// MUI component
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const FakeDisplayComp = () => {

    const data = [ // data[3].letter
        {
            letter: "A",
            data: {
                name: "Amina",
                animal: "Ant",
                place: "Anambra",
                thing: "Antenna"
            }
        },
        {
            letter: "F",
            data: {
                name: "Francis",
                animal: "Fish",
                place: "France",
                thing: "Fork"
            }
        },
        {
            letter: "M",
            data: {
                name: "Mariam",
                animal: "Monkey",
                place: "Mabushi",
                thing: "Money"
            }
        },
        {
            letter: "T",
            data: {
                name: "Tolu",
                animal: "Tortoise",
                place: "Taraba",
                thing: "Table"
            }
        }
    ];

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(data[0]);

    // setInterval( () => {
    //     if(count < 3) {
    //         let added = count + 1;
    //         setCount(added);
    //         setValue(data[count]);
    //     }
    //     else{
    //         setCount(0);
    //         setValue(data[count]);
    //     }
    // }, 5000 );

    return (
        <div className='w-4/12 border mx-auto rounded-2xl py-6 px-8 my-8 text-center'>
            <p>HOW IT WORKS</p>

            <Avatar className='mx-auto'>{ value.letter }</Avatar>

            <div className='grid grid-cols-2 gap-7 mx-auto'>
                <div>
                    <p>Name</p>
                    <p>{ value.data.name }</p>
                </div>
                <div>
                    <p>Animal</p>
                    <p>{ value.data.animal }</p>
                </div>
                <div>
                    <p>Place</p>
                    <p>{ value.data.place }</p>
                </div>
                <div>
                    <p>Thing</p>
                    <p>{ value.data.thing }</p>
                </div>
            </div>
        </div>
    )
}

export default FakeDisplayComp;
