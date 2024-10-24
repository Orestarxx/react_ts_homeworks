import React, {FC} from "react";

import './secondUserStyle.css';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {secondUserValidator} from "../../validators/secondUser.joi.validator";
import {ISecondUser} from "../../models/ISecondUser";
import {userService} from "../../service/users.service";

export const SecondUserForm:FC = () => {
    const {
        handleSubmit,
        register ,
        formState:{
            isValid,
            errors
        }} = useForm<ISecondUser>(
        {mode:'all',resolver:joiResolver(secondUserValidator)});
    const userHandler = async (user:ISecondUser):Promise<void> =>{
        console.log(user);
        await userService.users.createSecondUser(user)
    }
    return (

           <div id={'holder'}>
               <form className="form" onSubmit={handleSubmit(userHandler)}>
                   <p className="title">Register new user</p>
                   <p className="message">Signup now and get full access to our app. </p>
                   <div className="flex">
                           {errors.name && <span>{errors.name.message}</span>}
                       <label>
                           <input className="input" type="text" placeholder="name" {...register('name')} />
                           <span>Name</span>
                       </label>

                       <label>
                           <input className="input" type="text" placeholder="username" {...register('username')}/>
                           <span>User name</span>
                       </label>
                   </div>

                   <label>
                       <input className="input" type="email" placeholder="email" {...register('email')}/>
                       <span>Email</span>
                   </label>

                   <label>
                       <input className="input" type="text" placeholder="phone number" {...register('phone')}/>
                       <span>Phone number</span>
                   </label>
                   <label>
                       <input className="input" type="text" placeholder="your website" {...register('website')}/>
                       <span>website</span>
                   </label>
                   <button className="submit" disabled={!isValid}>Submit</button>
                   <p className="signin">Already have an account ? <a href="#">Sign</a> </p>
               </form>

           </div>
    );
};