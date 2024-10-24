import React from 'react';
import UserForm from "../components/userForm/UserForm";
import {SecondUserForm} from "../components/secondUserForm/SecondUserForm";
import CreditCardForm from "../components/creditCardForm/CreditCardForm";


const MainLayOut = () => {
    return (
        <div>
            {/*<UserForm/>*/}
            {/*<SecondUserForm/>*/}
            <CreditCardForm/>
        </div>
    );
};

export default MainLayOut;