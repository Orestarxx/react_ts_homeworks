import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../../interfaces/IUser";
import {IPost} from "../../../interfaces/IPost"
import {getPostsOfUsers, getUsers} from "../../../services/user.service";
import User from "../../lessonTwo/User/User";
import Post from "../../lessonTwo/Post/Post";
import './usersStyle.css';

const Users:FC = () => {
    const [users,setUsers] =  useState<IUser[]>([]);
    const [posts,setPosts] = useState<IPost[]>([]);
    useEffect(()=>{getUsers().then((response:IUser[]):void => {setUsers(response)})},[]);
    const getIdOfUser =(userId:number):void=>{
     getPostsOfUsers(userId).then((response:IPost[]) =>{setPosts(response)})

    }

    return (
        <div>
            <div className={'users'}>{users.map((user:IUser) => <User key={user.id} user={user} getIdOfUser={getIdOfUser} />)}</div>
            <hr/>
            <div>{posts.map((post:IPost)=><Post post={post} key={post.id}/>)}</div>
        </div>
    );
};

export default Users;