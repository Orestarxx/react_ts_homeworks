import React, {useEffect, useState} from 'react';
import {IPost} from "../../../models/IPost";
import {postService} from "../../../services/jsonPlaceHolder.service";
import Post from "../post/Post";

const Posts = () => {
    const [posts,setPosts] = useState<IPost[]>([]);
    useEffect(() =>{
        postService.getPosts().then((response:IPost[]) =>{setPosts(response)})
    },[]);
    return (
        <div>
            {posts.map((post:IPost) =><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;