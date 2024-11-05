import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";
type UserProps = {
    user:IUser,

}
const User:FC<UserProps> = ({user}) => {
    return (
        <Link to={`/users/${user.id}`}>
            <div>{user.id}</div>
        </Link>
    );
};

export default User;