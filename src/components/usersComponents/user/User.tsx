import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
import './userStyle.css';
import {Link} from "react-router-dom";
type IProps = {
    user:IUser
}
const User:FC<IProps> = ({user}) => {
    return (
       <Link state={user} to={user.id.toString()} className={'linkUser'}>
           <div className={'user'}>
               <div>{user.name}</div>
               <div>{user.phone}</div>
               <div>{user.website}</div>
           </div>
       </Link>
    );
};

export default User;