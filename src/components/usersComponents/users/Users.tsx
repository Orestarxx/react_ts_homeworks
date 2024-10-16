import React, {useEffect, useState} from 'react';
import {userService} from "../../../services/jsonPlaceHolder.service";
import {IUser} from "../../../models/IUser";
import User from "../user/User";

const Users = () => {
    const [users,setUsers] = useState<IUser[]>([])
    useEffect(() =>{
        userService.getUsers().then((response:IUser[]) =>{setUsers(response)})
    },[])

    return (
        <div>
            {users.map((user:IUser) =><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;