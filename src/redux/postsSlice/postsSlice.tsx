import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {placeHolderService} from "../../services/api.jsonPlaceholder.service";
import {IComment} from "../../models/IComment";

type PostsInitType = {
    posts: IPost[] | null,
    commentsOfPosts: IPost[] | null
}

const postsInitState: PostsInitType = {
    posts: null,
    commentsOfPosts: null
}
const getAllPosts = createAsyncThunk('postsSlice/getAllPosts',
    async (_, thunkAPI) => {
        try {
            const posts: IPost[] = await placeHolderService.posts.getAllPosts()
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    })
export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: postsInitState,
    reducers: {
        fillCommentsOfPosts: (state, action: PayloadAction<IComment[]>) => {
            const comments: IComment[] = action.payload;
            state.commentsOfPosts = state.posts && state.posts.map(
                (post: IPost) => ({
                    ...post, comments: comments.filter(
                        (comment: IComment) => post.id === comment.postId)
                }))
        }
    },
    extraReducers: builder => builder
        .addCase(getAllPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })

})

export const postsActions = {
    ...postsSlice.actions,
    getAllPosts
}