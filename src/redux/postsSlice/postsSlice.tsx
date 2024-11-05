import {IPost} from "../../models/IPost";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type PostType = {
    posts:IPost[],
    post:IPost|null
}

const postInitState:PostType = {
    posts:[],
    post:null
}

export const postsSlice = createSlice({
    name:'postsSlice',
    initialState:postInitState,
    reducers:{
        getAllPosts:(state,action:PayloadAction<IPost[]>) =>{
            state.posts = action.payload;
        },
        getSinglePost:(state,action:PayloadAction<number>) =>{
            let id = action.payload;
            state.posts.forEach((post:IPost)=>{
                if(post.id === id){
                    state.post = post;
                }
            })
        }
    }
})
export const {getAllPosts,getSinglePost} = postsSlice.actions;