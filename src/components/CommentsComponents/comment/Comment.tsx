import React, {FC} from 'react';
import {IComment} from "../../../models/IComment";
import './commentStyle.css'
type ICommentProps = {
    comment:IComment
}
const Comment:FC<ICommentProps> = ({comment:{name,id,body}}) => {
    return (
        <div className={'comment'}>
            <div>{id}.<b>{name}</b></div>
            <div>{body}</div>
        </div>
    );
};

export default Comment;