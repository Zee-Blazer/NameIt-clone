import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./reducers/room";

export const store = configureStore({
    reducer: {
        room: roomReducer
    }
})
