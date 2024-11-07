import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";
import {IComment} from "../../../models/IComment";
import Comment from "../../commentsComponents/comment/Comment";

type PostProps = {
    post: IPost
}
const Post: FC<PostProps> = ({post}) => {
    return (
        <div>
            <div>{post.id}_{post.title}</div>
            <ul>
                {post.comments && post.comments.map((comment: IComment) => <li key={comment.id}><Comment
                    comment={comment}/></li>)}
            </ul>
        </div>
    );
};

export default Post;