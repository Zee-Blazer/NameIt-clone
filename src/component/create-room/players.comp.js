
// MUI component
import Button from '@mui/material/Button';

// Components
import PlayerDetailComp from './player-detail.comp';

const PlayersComp = () => {

    return (
        <div className="rounded shadow w-7/12 mx-auto my-8 py-6 px-8 text-center">
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Players <span className='text-red-600'>(1/3)</span></p>
                <Button 
                    variant="contained" sx={{ backgroundColor: "grey" }}
                >Leave Room</Button>
            </div>

            <div>
                <PlayerDetailComp type="host" name="Glyte" num={1} />
                <PlayerDetailComp type="player" name="Bolaji" num={2} />
            </div>
        </div>
    )
}

export default PlayersComp;
