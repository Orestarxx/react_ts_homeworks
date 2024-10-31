import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";
import './postStyle.css'
type PostProps ={
    post:IPost
}
const Post:FC<PostProps> = ({post:{id,userId,body,title}}) => {
    return (
        <div className={'post'}>
            <div>{id}</div>
            <div>{userId}</div>
            <div>{body}</div>
            <div>{title}</div>
        </div>
    );
};

export default Post;