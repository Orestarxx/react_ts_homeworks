import React, {FC, useEffect, useState} from 'react';
import IUser from "../../interfaces/IUser";
import {getUsers} from "../../service/user.service";
import User from "../User/User";

const Users:FC = () => {
    const [users,setUsers] =  useState<IUser[]>([]);
    useEffect(()=>{getUsers().then((users:IUser[]) => {setUsers(users)})},[]);
    return (
        <div>
            {users.map((value:IUser) =><User />)}
        </div>
    );
};

export default Users;