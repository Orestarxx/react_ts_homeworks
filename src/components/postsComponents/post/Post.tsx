import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";
type PostProps ={
    post:IPost
}
const Post:FC<PostProps> = ({post:{id,userId,body,title}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{body}</div>
            <div>{title}</div>
        </div>
    );
};

export default Post;