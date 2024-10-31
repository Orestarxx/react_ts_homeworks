import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
import './userStyle.css'
type UserProps = {
    user:IUser
}
const User:FC<UserProps> = ({user:{id,name,username,email}}) => {
    return (
        <div className={'user'}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export default User;