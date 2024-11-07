import {IComment} from "../../models/IComment";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {placeHolderService} from "../../services/api.jsonPlaceholder.service";
import {postsActions} from "../postsSlice/postsSlice";

type CommentsInitType = {
    comments: IComment[] | null;
}
const commentsInitState: CommentsInitType = {
    comments: null
}
const getAllComments = createAsyncThunk('commentsSlice/getAllComments', async (_, thunkAPI) => {
    try {
        const comments: IComment[] = await placeHolderService.comments.getAllComments()
        thunkAPI.dispatch(postsActions.fillCommentsOfPosts(comments));
        return thunkAPI.fulfillWithValue(comments)
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})
export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: commentsInitState,
    reducers: {
        helloWorld: () => {
            console.log('hello world')
        }
    },
    extraReducers: builder => builder
        .addCase(getAllComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
});
export const commentsActions = {
    ...commentsSlice.actions,
    getAllComments

}