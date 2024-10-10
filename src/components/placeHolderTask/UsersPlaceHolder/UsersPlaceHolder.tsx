import React, {useEffect, useState} from 'react';
import {usersPostsJsonPlaceHolderService} from "../../../services/user.placeHolder.service";
import {IUserPlaceHolder} from "../../../interfaces/IUserPlaceHolder";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";
import {IPostPlaceHolder} from "../../../interfaces/IPostPlaceHolder";
import PostPlaceHolder from "../PostPlaceHolder/PostPlaceHolder";

const UsersPlaceHolder = () => {
    const [users,setUsers] = useState<IUserPlaceHolder[]>([])
    const [postsOfUser,setPostsOfUsers] = useState<IPostPlaceHolder[]>([])
    useEffect(()=>{
        usersPostsJsonPlaceHolderService.getUsers().then((response:IUserPlaceHolder[]) =>{setUsers(response)})
    },[]);
    const getId = async  (userId:number) =>{
        setPostsOfUsers(await usersPostsJsonPlaceHolderService.getUserPosts(userId));
    }
    return (
        <div>
            <div>{users.map((user:IUserPlaceHolder)=><UserPlaceHolder user={user} key={user.id} getId={getId}/>)}</div>
            <hr/>
            <div>{postsOfUser.map((post:IPostPlaceHolder) =><PostPlaceHolder post={post}/>)}</div>
        </div>
    );
};

export default UsersPlaceHolder;