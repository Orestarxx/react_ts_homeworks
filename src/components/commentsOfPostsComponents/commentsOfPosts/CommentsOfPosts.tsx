import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {commentsActions} from "../../../redux/commentsSlice/commentsSlice";
import {postsActions} from "../../../redux/postsSlice/postsSlice";
import Post from "../../postsComponents/post/Post";
import {IPost} from "../../../models/IPost";
import '../../../index.css'


const CommentsOfPosts = () => {
    const {commentsOfPosts} = useAppSelector(state => state.postsReducer);
    let dispatch = useAppDispatch()
    useEffect(() => {
        if (!commentsOfPosts) {
            dispatch(postsActions.getAllPosts())
            dispatch(commentsActions.getAllComments())
        }

    }, [dispatch, commentsOfPosts]);
    return (
        <div className={'mainHolder'}>
            {commentsOfPosts && commentsOfPosts.map((post: IPost) => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default CommentsOfPosts;