import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {genresSlice} from "./genresSlice/genresSlice";
import {moviesSlice} from "./moviesSlice/moviesSlice";

export const store = configureStore({
    reducer:{
       genresReducer:genresSlice.reducer,
        moviesReducer: moviesSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
