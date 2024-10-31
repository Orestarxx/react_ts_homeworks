import React, {FC} from 'react';
import {IComment} from "../../../models/IComment";
import './commentStyle.css'
type CommentProps = {
    comment:IComment
}
const Comment:FC<CommentProps> = ({comment:{postId,id,body}}) => {
    return (
        <div className={'comment'}>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{body}</div>
            </div>
    );
};

export default Comment;