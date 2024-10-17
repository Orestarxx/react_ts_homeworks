import React, {useEffect, useState} from 'react';
import {userService} from "../../../services/jsonPlaceHolder.service";
import {IUser} from "../../../models/IUser";
import User from "../user/User";
import './usersStyle.css'

const Users = () => {
    const [users,setUsers] = useState<IUser[]>([])
    useEffect(() =>{
        userService.getUsers().then((response:IUser[]) =>{setUsers(response)})
    },[])
    return (
        <div id={'usersHolder'}>
            {users.map((user:IUser) =><User key={user.id} user={user}/>)}
        </div>
    );
};
export default Users;