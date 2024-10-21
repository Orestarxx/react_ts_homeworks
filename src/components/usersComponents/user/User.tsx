import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
import './userStyle.css'
type UserProps = {
    user:IUser;
}
const User:FC<UserProps> = ({user}) => {
    return (
        <div className={'user'}>
            <div>{user.id} -- </div>
            <div>{user.firstName}_</div>
            <div>{user.lastName}</div>
        </div>
    );
};

export default User;