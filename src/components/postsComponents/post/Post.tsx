import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";
import '../postOfUser/userPost.css'
import {Link} from "react-router-dom";
import './postStyle.css'

type IPostProps = {
    post:IPost
}
const Post:FC<IPostProps> = ({post}) => {
    return (
       <Link to={post.id.toString()}>
           <div className={'post'}>
               <div>
                   <b>{post.id}.{post.title}</b>
               </div>
               <div>{post.body}</div>
           </div>
       </Link>
    );
};

export default Post;