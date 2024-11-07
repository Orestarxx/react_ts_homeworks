import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import Post from "../post/Post";
import {IPost} from "../../../models/IPost";
import {postsActions} from "../../../redux/postsSlice/postsSlice";
import '../../../index.css'

const Posts = () => {
    const {posts} = useAppSelector(state => state.postsReducer);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postsActions.getAllPosts())
    }, [dispatch]);
    return (
        <div className={'mainHolder'}>
            {posts && posts.map((post: IPost) => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;