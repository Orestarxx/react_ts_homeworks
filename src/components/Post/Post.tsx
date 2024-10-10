import React, {FC} from 'react';
import {IPost} from "../../interfaces/IPost";
type IPostProps = {
    post:IPost;
}
const Post:FC<IPostProps> = ({post:{body,id,title,views}}) => {
    return (
        <div>
            <div><b>body:</b>{body}</div>
            <div><b>title:</b>{title}</div>
            <div><b>views:</b>{views}</div>
            <div><b>ID:</b>{id}</div>
        </div>
    );
};

export default Post;