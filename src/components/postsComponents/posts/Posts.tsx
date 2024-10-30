import React, {useEffect} from 'react';
import {jsonPlaceholderService} from "../../../services/api.JsonPlaceholder.service";
import {IPost} from "../../../models/IPost";
import {useStore} from "../../../store/store";
import Post from "../post/Post";

const Posts = () => {
    const {postsPart:{getAllPosts,allPosts}} = useStore()
    useEffect(() => {
        jsonPlaceholderService.posts.getAllPosts().then((response:IPost[]) =>getAllPosts(response))
    }, [getAllPosts]);
    return (
        <div>
            {allPosts.length && allPosts.map((post:IPost) =><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;