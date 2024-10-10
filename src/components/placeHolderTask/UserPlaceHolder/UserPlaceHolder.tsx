import React, {FC} from 'react';
import {IUserPlaceHolder} from "../../../interfaces/IUserPlaceHolder";
type UserProps ={
    user:IUserPlaceHolder;
    getId:(userId:number)=>void;
}
const UserPlaceHolder:FC<UserProps> = ({user:{id,name,username,phone},getId}) => {
    return (
        <div onClick={()=>{
           getId(id)
        }}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{phone}</div>
        </div>
    );
};

export default UserPlaceHolder;