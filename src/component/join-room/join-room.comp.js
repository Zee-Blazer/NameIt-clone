
// MUI component
import Button from '@mui/material/Button';

const JoinRoomComp = () => {

    return (
        <div className='text-center top-50 left'>
            <h1>NameIt!</h1>
            <p>Enter your room code to join a game</p>

            <div className='w-4/12 border mx-auto rounded-2xl py-6 px-8'>
                <p>Room Code</p>
                <div>
                    <input 
                        className="py-4 px-8 text-center mx-auto w-full my-4 outline-none rounded-xl border" 
                        type="name" 
                        placeholder="What's your name?" 
                    />
                </div>

                <Button 
                    variant="contained" sx={{ backgroundColor: "grey" }}
                >Join Room</Button>

                <p className='underline mt-3 text-xs cursor-pointer'>Create a room instead</p>
            </div>
            
        </div>
    )
}

export default JoinRoomComp;
