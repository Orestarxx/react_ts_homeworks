import React from 'react';
import {useForm} from "react-hook-form";
import {IUser} from "../../models/IUser";
import {userService} from "../../service/users.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.joi.validator";
import './userFormStyle.css'

const UserForm = () => {
    const {
        handleSubmit,
        register,
        formState:{
            errors,
            isValid
        }
    } = useForm<IUser>({mode:'all',resolver:joiResolver(userValidator)});
 const userHandler = async (user:IUser) =>{
    await userService.users.createUser(user)
 }
    return (
       <div id={'wrap'}>
           <form onSubmit={handleSubmit(userHandler)} id={'userForm'}>
               <div className={'inputHolderDiv'}>
                   <label>User name</label>
                   <input type="text" placeholder={"userName"} {...register('userName')}/>
                   {errors.userName && <div>{errors.userName.message}</div>}
               </div>
               <div className={'inputHolderDiv'}>
                   <label>Name</label>
                   <input type="text" placeholder={'name'} {...register('name')}/>
                   {errors.name && <div>{errors.name.message}</div>}
               </div>
               <div className={'inputHolderDiv'}>
                   <label>example: <b>json322@gmail.com</b></label>
                   <input type="text" placeholder={'email'} {...register('email')}/>
                   {errors.email && <div>{errors.email.message}</div>}
               </div>
               <div className={'inputHolderDiv'}>
                   <label>City</label>
                   <input type="text" placeholder={'city'} {...register('city')}/>
                   {errors.city && <div>{errors.city.message}</div>}
               </div>
               <div className={'inputHolderDiv'}>
                   <label>Street</label>
                   <input type="text" placeholder={'street'} {...register('street')}/>
                   {errors.street && <div>{errors.street.message}</div>}
               </div>
               <div className={'inputHolderDiv'}>
                   <label>Phone Number</label>
                   <input type="text" placeholder={'phone'} {...register('phone')}/>
                   {errors.phone && <div>{errors.phone.message}</div>}
               </div>
               <button disabled={!isValid}>save</button>
           </form>
       </div>
    );
};

export default UserForm;