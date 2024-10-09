import React, {FC, useEffect, useState} from 'react';
import {IPost, IUser} from "../../interfaces/IUser";
import {getPostsOfUsers, getUsers} from "../../service/user.service";
import User from "../User/User";
import Post from "../Post";

const Users:FC = () => {
    const [users,setUsers] =  useState<IUser[]>([]);
    const [posts,setPosts] = useState<IPost[]>([]);
    useEffect(()=>{getUsers().then((response:IUser[]):void => {setUsers(response)})},[]);
    const getIdOfUser =(userId:number):void=>{
     getPostsOfUsers(userId).then((response:IPost[]) =>{setPosts(response)})

    }
    console.log(posts);

    return (
        <div>
            <div>{users.map((user:IUser) => <User key={user.id} user={user} getIdOfUser={getIdOfUser} />)}</div>
            <hr/>
            <div>{posts.map((post:IPost)=><Post post={post}/>)}</div>
        </div>
    );
};

export default Users;