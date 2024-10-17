import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {commentService} from "../../../services/jsonPlaceHolder.service";
import {IComment} from "../../../models/IComment";
import CommentOfPost from "../commentOfPost/CommentOfPost";
import './commentsOfPost.css'

const CommentsOfPost:FC = () => {
    const {id} = useParams();
    const {state:{body,id:postID,title,userId}} = useLocation();
    const [commentsOfPost,setCommentsOfPost] = useState<IComment[]>([]);
    useEffect(() =>{
        if(id){
            commentService.getCommentsOfPost(id).then((response:IComment[]) =>{setCommentsOfPost(response)})
        }
    },[id]);
    return (
        <div>
            <div className={'infoPost'}>
                <div>{body}</div>
                <div>{postID}</div>
                <div>{title}</div>
                <div>{userId}</div>
            </div>
            <div id={'commentsHolder'}>
                {commentsOfPost.map((comment:IComment) =><CommentOfPost key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default CommentsOfPost;