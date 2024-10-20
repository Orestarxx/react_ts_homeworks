import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";
import './postStyle.css'
type IPostProps = {
    post:IPost
}
const Post:FC<IPostProps> = ({post:{id,title}}) => {
    return (
        <div className={'post'}>
            <div>{id}--</div>
            <div>{title}</div>

        </div>
    );
};

export default Post;