import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";
type IPostProps = {
    post:IPost
}
const Post:FC<IPostProps> = ({post}) => {
    return (
        <div>
            {post.id}
        </div>
    );
};

export default Post;