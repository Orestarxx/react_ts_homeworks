import React, {useEffect, useState} from 'react';
import {placeHolderService} from "../../../services/api.jsonPlaceHolder.service";
import {IDataPost,IPost} from "../../../models/IPost";
import Post from "../post/Post";
import PaginationComponent from "../../paginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const Posts = () => {
    const [posts,setPosts] =useState<IPost[]>([]);
    const [query,setQuery] =  useSearchParams({skip:'1'});

    useEffect(() =>{
        const page = query.get('skip');
        console.log(page);
        if(page){
        placeHolderService.postsService.getPosts(+page).then((response:IDataPost & {posts:IPost[]}) =>setPosts(response.posts))
        }

    },[query]);

    return (
        <div>
            {posts.map((post:IPost) =><Post post={post} key={post.id}/>)}
            <PaginationComponent/>
        </div>
    );
};

export default Posts;