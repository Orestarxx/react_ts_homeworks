import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";

type UserProps = {
    user: IUser,
    setID:(obj:IUser) => void
}
const User: FC<UserProps> = ({user,setID}) => {
    return (
        <div onClick={() =>{
            setID(user)
        }}>
            {user.username}
        </div>
    );
};

export default User;