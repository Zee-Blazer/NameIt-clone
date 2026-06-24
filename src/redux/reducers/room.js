import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: "room",
    initialState: {
        roomId: "",
    },    
    reducers: {
        newRoomId: (state, action) => {
            console.log("This is working");
            state.roomId = action.payload;
        } // {type, payload}
    }
})

export const { newRoomId } = roomSlice.actions;

export default roomSlice.reducer;
