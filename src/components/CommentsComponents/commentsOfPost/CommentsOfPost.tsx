import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentService} from "../../../services/jsonPlaceHolder.service";
import {IComment} from "../../../models/IComment";
import CommentOfPost from "../commentOfPost/CommentOfPost";
import './commentsOfPost.css'

const CommentsOfPost = () => {
    const {id} = useParams();
    const [commentsOfPost,setCommentsOfPost] = useState<IComment[]>([]);
    useEffect(() =>{
        if(id){
            commentService.getCommentsOfPost(id).then((response:IComment[]) =>{setCommentsOfPost(response)})
        }
    },[id]);
    return (
        <div>
            <div></div>
            <div id={'commentsHolder'}>
                {commentsOfPost.map((comment:IComment) =><CommentOfPost key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default CommentsOfPost;