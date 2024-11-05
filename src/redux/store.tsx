import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {usersSlice} from "./usersSlice/usersSlice";
import {postsSlice} from "./postsSlice/postsSlice";
import {commentsSlice} from "./commentsSlice/commentsSlice";

export const store = configureStore({
    reducer:{
       usersSlice:usersSlice.reducer,
        postsSlice:postsSlice.reducer,
        commentsSlice:commentsSlice.reducer
    }
});
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
