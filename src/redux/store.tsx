import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {usersSlice} from "./usersSlice/usersSlice";

export const store = configureStore({
    reducer:{
        usersReducer:usersSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export  const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();