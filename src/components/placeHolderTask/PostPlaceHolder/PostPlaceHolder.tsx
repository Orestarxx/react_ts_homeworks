import React, {FC} from 'react';
import {IPostPlaceHolder} from "../../../interfaces/IPostPlaceHolder";
type PostProps = {
    post:IPostPlaceHolder;
    getPostId: (postId:number)=>void;
}
const PostPlaceHolder:FC<PostProps> = ({post:{id,userId,title,body},getPostId}) => {
    return (
        <div onClick={() =>{
            getPostId(id)
        }}>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default PostPlaceHolder;