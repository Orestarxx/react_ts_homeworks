import React, {FC, useEffect, useState} from 'react';
import {usersPostsJsonPlaceHolderService} from "../../../services/user.placeHolder.service";
import {IUserPlaceHolder} from "../../../interfaces/IUserPlaceHolder";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";
import {IPostPlaceHolder} from "../../../interfaces/IPostPlaceHolder";
import PostPlaceHolder from "../PostPlaceHolder/PostPlaceHolder";
import {IComment} from "../../../interfaces/IComment";
import CommentsPlaceHolder from "../CommentsPlaceHolder/CommentsPlaceHolder";

const UsersPlaceHolder:FC = () => {
    const [users,setUsers] = useState<IUserPlaceHolder[]>([]);
    const [postsOfUser,setPostsOfUsers] = useState<IPostPlaceHolder[]>([]);
    const [commentsOfPost,setCommentsOfPost] = useState<IComment[]>([])

    useEffect(()=>{
        usersPostsJsonPlaceHolderService.getUsers().then((response:IUserPlaceHolder[]) =>{setUsers(response)})
    },[]);
    const getId = async  (userId:number):Promise<void> =>{
        setPostsOfUsers(await usersPostsJsonPlaceHolderService.getUserPosts(userId));
    }
    const getPostId = async (postId:number):Promise<void> =>{
     setCommentsOfPost(await usersPostsJsonPlaceHolderService.getCommentsOfPost(postId));
    }
    console.log(commentsOfPost);
    return (
        <div>
            <div>{users.map((user:IUserPlaceHolder)=><UserPlaceHolder user={user} key={user.id} getId={getId}/>)}</div>
            <hr/>
            <div>{postsOfUser.map((post:IPostPlaceHolder) =><PostPlaceHolder key={post.id} post={post} getPostId={getPostId}/>)}</div>
            <hr/>
            <div>{commentsOfPost.map((comment:IComment) =><CommentsPlaceHolder key={comment.id} comment={comment}/>)}</div>
        </div>
    );
};

export default UsersPlaceHolder;