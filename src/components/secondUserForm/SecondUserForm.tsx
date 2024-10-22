import React from "react";

import './secondUserStyle.css';
import {useForm} from "react-hook-form";

export const SecondUserForm = () => {
    const {handleSubmit,register} = useForm()
    const userHandler = async (user:{}) =>{
        console.log(user);
    }
    return (

           <div id={'holder'}>
               <form className="form" onSubmit={handleSubmit(userHandler)}>
                   <p className="title">Register new user</p>
                   <p className="message">Signup now and get full access to our app. </p>
                   <div className="flex">
                       <label>
                           <input className="input" type="text" placeholder="firstName" {...register('firstname')} />
                           <span>Firstname</span>
                       </label>

                       <label>
                           <input className="input" type="text" placeholder="lastName" {...register('Lastname')}/>
                           <span>Lastname</span>
                       </label>
                   </div>

                   <label>
                       <input className="input" type="email" placeholder="email" {...register('email')}/>
                       <span>Email</span>
                   </label>

                   <label>
                       <input className="input" type="password" placeholder="password" {...register('password')}/>
                       <span>Password</span>
                   </label>
                   <label>
                       <input className="input" type="password" placeholder="confirm password" {...register('confirm')}/>
                       <span>Confirm password</span>
                   </label>
                   <button className="submit">Submit</button>
                   <p className="signin">Already have an account ? <a href="#">Sign</a> </p>
               </form>

           </div>
    );
};