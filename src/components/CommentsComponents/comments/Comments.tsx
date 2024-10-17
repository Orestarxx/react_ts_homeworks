import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../../models/IComment";
import {commentService} from "../../../services/jsonPlaceHolder.service";
import Comment from "../comment/Comment";

const Comments:FC = () => {
    const [comments,setComments] =  useState<IComment[]>([]);
    useEffect(() =>{
        commentService.getComments().then((comment:IComment[]) =>{setComments(comment)})
    },[]);
    return (
        <div>
            {comments.map((comment:IComment) =><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;