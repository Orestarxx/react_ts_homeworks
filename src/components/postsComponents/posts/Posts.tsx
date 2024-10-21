import React, {useEffect, useState} from 'react';
import {placeHolderService} from "../../../services/api.jsonPlaceHolder.service";
import {IDataPost,IPost} from "../../../models/IPost";
import Post from "../post/Post";
import PaginationComponent from "../../paginationComponent/PaginationComponent";
import {useSearchParams} from "react-router-dom";
import './postsStyle.css'

const Posts = () => {
    const [posts, setPosts] = useState<IDataPost & {posts:IPost[]}>({
        limit:0,
        skip:0,
        total:0,
        posts:[],
        next:false,
        prev:false
    });
    const [query] = useSearchParams({page: '1'});

    useEffect(() => {
        const page = query.get('page');
        console.log(page);
        if (page) {
            placeHolderService.postsService.getPosts(+page).then((response: IDataPost & {
                posts: IPost[]
            }) => setPosts(response))
        }

    }, [query]);

    return (
        <div id={'usersHolder'}>
            {posts.posts.map((post: IPost) => <Post post={post} key={post.id}/>)}
            <PaginationComponent posts={posts}/>
        </div>
    );
};

export default Posts;