import React from 'react';
import {useForm} from "react-hook-form";
import {IUser} from "../../models/IUser";
import {userService} from "../../service/users.service";

const UserForm = () => {
    const {handleSubmit,register} = useForm<IUser>();
 const userHandler = async (user:IUser) =>{
     console.log(user);
    await userService.users.createUser(user)
 }
    return (
        <form onSubmit={handleSubmit(userHandler)}>
            <input type="text" placeholder={"userName"} {...register('userName')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export default UserForm;