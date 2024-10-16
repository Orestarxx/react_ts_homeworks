import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";
import './userPost.css'
type IPostProps = {
    post:IPost
}
const PostOfUser:FC<IPostProps> = ({post:{id,userID,title,body}}) => {
    return (
        <div className={'userPost'}>
            <div>
                <b>{title}</b>
            </div>
            <div>{body}</div>
        </div>
    );
};

export default PostOfUser;