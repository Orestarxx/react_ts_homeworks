import React, {FC} from 'react';
import {IComment} from "../../../models/IComment";
import './commentOfPost.css';
type ICommentProps = {
    comment:IComment
}
const CommentOfPost:FC<ICommentProps> = ({comment:{id,name,email,body}}) => {
    return (
        <div className={'comment'}>
            <div>{id}.<b>{name}</b></div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export default CommentOfPost;