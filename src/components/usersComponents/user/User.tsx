import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
type UserProps = {
    user:IUser
}
const User:FC<UserProps> = ({user:{id,name,username,email}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;