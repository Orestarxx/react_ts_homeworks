import React, {FC} from 'react';
import {IUser} from "../../../interfaces/IUser";
import './userStyle.css';
type IUserProps = {
    user:IUser,
    getIdOfUser: (userId:number)=>void;
}
const User:FC<IUserProps> = ({user:{id,lastName,firstName},getIdOfUser},) => {

    return (
        <div className={'user'}>
            <div>{id}-{lastName}-{firstName}</div>
            <button onClick={():void=>{
                getIdOfUser(id);
            }}>get posts of user {id}</button>
        </div>
    );
};

export default User;