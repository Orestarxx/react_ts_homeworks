import React, { useEffect, useState} from 'react';
import {useStore} from "../../../store/store";
import {IComment} from "../../../models/IComment";
import {IPost} from "../../../models/IPost";
import PostAndComment from "../postAndComment/PostAndComment";
import {jsonPlaceholderService} from "../../../services/api.JsonPlaceholder.service";


const PostsAndComments = () => {
    const {commentsPart:{allComments,getAllComments},postsPart:{allPosts,getAllPosts}} = useStore();
    const [postsOfComments, setPostsOfComments] = useState<IPost[] | null>(null)
    useEffect(() => {
        if(!allComments.length){
            jsonPlaceholderService.comments.getAllComments().then((response:IComment[]) =>getAllComments(response))
        }
        if(!allPosts.length){
            jsonPlaceholderService.posts.getAllPosts().then((response:IPost[]) =>getAllPosts(response));
        }
    }, [getAllComments,getAllPosts,allComments.length,allPosts.length]);
    useEffect(() => {
        const addCommentsToPosts  =  (allComments:IComment[],allPosts:IPost[]):IPost[] =>{
            console.log('work')

            return allPosts.map((post:IPost) =>
                ({...post,commentsOfPost:allComments.filter((comment:IComment) => comment.postId === post.id)}))


    }
    setPostsOfComments(addCommentsToPosts(allComments,allPosts))
    },[allPosts,allComments])
    return (
        <div>
            {postsOfComments?.length && postsOfComments.map((post:IPost) =><PostAndComment key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsAndComments;