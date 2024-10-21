import React, {useEffect, useState} from 'react';
import {userService} from "../../../service/users.service";
import {IUser} from "../../../models/IUser";
import User from "../user/User";

const Users = () => {
    const  [users,setUsers] =useState<IUser[]>([]);
    useEffect(()=>{
        userService.users.getAllUsers().then((response:IUser[]) =>{setUsers(response)})
    },[users])
    return (
        <div>
            {users.map((user:IUser,index) =><User key={index} user={user}/>)}
        </div>
    );
};

export default Users;