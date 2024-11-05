import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
type PostProps ={
    post:IPost
}
const Post:FC<PostProps> = ({post:{id,userId,title,body}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
            <div>{userId}</div>
        </div>
    );
};

export default Post;