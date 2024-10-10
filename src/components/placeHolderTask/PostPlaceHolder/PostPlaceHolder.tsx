import React, {FC} from 'react';
import {IPostPlaceHolder} from "../../../interfaces/IPostPlaceHolder";
type PostProps = {
    post:IPostPlaceHolder;
}
const PostPlaceHolder:FC<PostProps> = ({post:{id,userId,title,body}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default PostPlaceHolder;