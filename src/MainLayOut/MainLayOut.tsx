import React from 'react';
import UserForm from "../components/userForm/UserForm";
import Users from "../components/usersComponents/users/Users";

const MainLayOut = () => {
    return (
        <div>
            <UserForm/>
            <Users/>
        </div>
    );
};

export default MainLayOut;