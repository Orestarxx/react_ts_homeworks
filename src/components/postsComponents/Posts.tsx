import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsService} from "../../services/postsService/postsService";
import {IPost} from "../../models/IPost";
import {getAllPosts} from "../../redux/postsSlice/postsSlice";
import Post from "./Post";

const Posts = () => {
     const postsSliceState = useAppSelector(state => state.postsSlice);
     const dispatch = useAppDispatch()
    useEffect(() => {
        postsService.posts.getAllPosts().then((post:IPost[])=>{
            dispatch(getAllPosts(post))
        })
    }, [dispatch]);
    return (
        <div>
            {postsSliceState.posts && postsSliceState.posts.map((post:IPost)=>
                <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;