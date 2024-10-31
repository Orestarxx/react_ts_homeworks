import React, {FC, memo} from 'react';
import {IPost} from "../../../models/IPost";
import {IComment} from "../../../models/IComment";
import Comment from "../../commentsComponets/comment/Comment";
import './postAndCommentStyle.css'
type PostsAndCommentsProps = {
    post:IPost
}
const PostAndComment:FC<PostsAndCommentsProps> = memo(({post:{commentsOfPost,title,id}}) =>{
    let arrayOfComments:IComment[]| undefined = commentsOfPost;
    return (
        <div className={'postHolder'}>
            <div>{id}-{title}</div>

                <div className={'commentsHolder'}>{arrayOfComments && arrayOfComments.map((comment: IComment) => <Comment comment={comment} key={comment.id}/>)}</div>

        </div>
    )
})
export default PostAndComment;