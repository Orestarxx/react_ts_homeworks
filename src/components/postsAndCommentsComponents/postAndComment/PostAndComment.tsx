import React, {FC, memo} from 'react';
import {IPost} from "../../../models/IPost";
import {IComment} from "../../../models/IComment";
import Comment from "../../commentsComponets/comment/Comment";
type PostsAndCommentsProps = {
    post:IPost
}
const PostAndComment:FC<PostsAndCommentsProps> = memo(({post:{commentsOfPost,title,id}}) =>{
    let arrayOfComments:IComment[]| undefined = commentsOfPost;
    return (
        <div>
            <div>{id}-{title}</div>

            <ul>
                <li>{arrayOfComments && arrayOfComments.map((comment: IComment) => <Comment comment={comment}/>)}</li>
            </ul>

        </div>
    )
})
export default PostAndComment;