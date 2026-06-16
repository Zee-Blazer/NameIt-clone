
// MUI component
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };

const PlayWithFriendComp = () => {

    return (
        <div>
            <input 
                className="py-4 px-8 text-center mx-auto w-full my-4 outline-none rounded-xl border" 
                type="name" 
                placeholder="What's your name?" 
            />

            <div className='flex justify-between items-center'>
                <p className='font-bold'>Make room public</p>
                <Switch {...label} />
            </div>

            <Button 
                variant="contained"
                sx={{ width: "100%", paddingY: 2, background: "red", marginY: 2.5 }}
            >Create Room</Button>

            <p 
                className='text-sm text-center text-gray-500'
            >Private room — share the link with friends</p>
            <p
                className='text-sm text-center text-gray-500'
            >or join with a code</p>

            <Button 
                variant="outlined"
                sx={{ width: "100%", color: "red", paddingY: 1, marginY: 2.5, borderColor: "red" }}
            >Join a Room</Button>
        </div>
    )
}

export default PlayWithFriendComp;
