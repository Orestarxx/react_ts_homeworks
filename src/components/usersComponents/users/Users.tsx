import React, {useEffect} from 'react';
import {useStore} from "../../../store/store";
import {jsonPlaceholderService} from "../../../services/api.JsonPlaceholder.service";
import {IUser} from "../../../models/IUser";
import User from "../user/User";

const Users = () => {
    const {usersPart:{getAllUsers,allUsers}} = useStore();
    useEffect(() => {
        jsonPlaceholderService.users.getAllUsers().then((response:IUser[]) =>getAllUsers(response))
    }, [getAllUsers]);

    return (
        <div>
            {allUsers.length && allUsers.map((user:IUser) =><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;