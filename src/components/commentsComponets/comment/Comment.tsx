import React, {FC} from 'react';
import {IComment} from "../../../models/IComment";
type CommentProps = {
    comment:IComment
}
const Comment:FC<CommentProps> = ({comment:{postId,id,body}}) => {
    return (
        <div>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{body}</div>
            </div>
    );
};

export default Comment;