import {IComment} from "../../models/IComment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CommentsTYpe = {
    comments:IComment[]
}
const commentsInitState:CommentsTYpe = {
    comments:[]
};
export const commentsSlice = createSlice({
    name:'postsSlice',
    initialState:commentsInitState,
    reducers:{
        getAllComments:(state,action:PayloadAction<IComment[]>) =>{
            state.comments = action.payload
        }
    }
});
export const {getAllComments} =  commentsSlice.actions;
