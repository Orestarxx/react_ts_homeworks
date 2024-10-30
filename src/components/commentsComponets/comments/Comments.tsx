import React, {useEffect} from 'react';
import {useStore} from "../../../store/store";
import {jsonPlaceholderService} from "../../../services/api.JsonPlaceholder.service";
import {IComment} from "../../../models/IComment";
import Comment from "../comment/Comment";

const Comments = () => {
    const {commentsPart:{getAllComments,allComments}} = useStore();
    useEffect(() => {
        jsonPlaceholderService.comments.getAllComments().then((comments:IComment[]) =>getAllComments(comments))
    }, [getAllComments]);
    return (
        <div>
            {allComments.length && allComments.map((comment:IComment) =><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;