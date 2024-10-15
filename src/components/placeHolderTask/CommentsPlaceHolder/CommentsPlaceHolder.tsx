import React, {FC} from 'react';
import {IComment} from "../../../interfaces/IComment";
type commentProps = {
    comment:IComment
}
const CommentsPlaceHolder:FC<commentProps> = ({comment:{postId,id,body,name}}) => {
    return (
        <div>
            <div>{postId}</div>
            <div>{body}</div>
            <div>{name}</div>
            <div>{id}</div>
        </div>
    );
};

export default CommentsPlaceHolder;