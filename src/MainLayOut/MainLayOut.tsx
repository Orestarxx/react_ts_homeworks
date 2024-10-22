import React from 'react';
import UserForm from "../components/userForm/UserForm";
import {SecondUserForm} from "../components/secondUserForm/SecondUserForm";


const MainLayOut = () => {
    return (
        <div>
            {/*<UserForm/>*/}
            <SecondUserForm/>
        </div>
    );
};

export default MainLayOut;