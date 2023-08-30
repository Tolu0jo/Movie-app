import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice"

export const store = configureStore({
    reducer:{movies:moviesReducer}
})
export type AppDispatch = typeof store.dispatch