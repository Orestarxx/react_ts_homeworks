import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {commentsActions} from "../../../redux/commentsSlice/commentsSlice";
import Comment from "../comment/Comment";
import {IComment} from "../../../models/IComment";
import '../../../index.css'

const Comments = () => {
    const {comments} = useAppSelector(state => state.commentsReducer);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(commentsActions.getAllComments())

    }, [dispatch]);

    console.log(comments);

    return (
        <div className={'mainHolder'}>
            {comments.length && comments.map((comment: IComment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;