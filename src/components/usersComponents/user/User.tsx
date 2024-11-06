import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
type UserProps = {
    user:IUser
}
const User:FC<UserProps> = ({user}) => {
    //todo нормально вивести обєкт
    return (
        <div>
            {user.username}
        </div>
    );
};

export default User;