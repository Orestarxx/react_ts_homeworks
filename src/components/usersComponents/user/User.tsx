import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
type UserProps = {
    user:IUser
}
const User:FC<UserProps> = ({user:{email,userName,name}}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{userName}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;