import React, {FC} from 'react';
import {IPost} from "../interfaces/IUser";
type IPostProps = {
    post:IPost;
}
const Post:FC<IPostProps> = ({post}) => {
    return (
        <div>

        </div>
    );
};

export default Post;