import React, {useCallback} from 'react';
import {useStore} from "../../../store/store";
import {IComment} from "../../../models/IComment";
import {IPost} from "../../../models/IPost";
import PostAndComment from "../postAndComment/PostAndComment";

const PostsAndComments = () => {
    const {commentsPart:{allComments},postsPart:{allPosts}} = useStore();
    const addCommentsToPosts  = useCallback(
        (allComments:IComment[],allPosts:IPost[]):IPost[] =>{
        return allPosts.map((post:IPost) =>
            ({...post,commentsOfPost:allComments.filter((comment:IComment) => comment.postId === post.id)}))
    },[])
    const newArrOfPosts = addCommentsToPosts(allComments,allPosts);
    console.log(newArrOfPosts);
    return (
        <div>
            {newArrOfPosts && newArrOfPosts.map((post:IPost) =><PostAndComment key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsAndComments;