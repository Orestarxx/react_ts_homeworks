import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";
type UserProps = {
    user:IUser,
    getId:(id:number) => void
}
const User:FC<UserProps> = ({user,getId}) => {
    return (
        <Link to={''} onClick={() =>{
            getId(user.id)
        }}>
            <div>{user.id}</div>
        </Link>
    );
};

export default User;