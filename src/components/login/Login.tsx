import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IDataUserLogin} from "../../models/ILoginUser";
import {dummyService} from "../../servises/api.dummyService";

const Login = () => {
    const [catchError, setCatchError] = useState<string>('')
    const {handleSubmit,register} = useForm<IDataUserLogin>();
    const loginUser = async (user:IDataUserLogin) =>{
       await dummyService.auth.login(user).catch(reason => {
           console.log(reason);
           if(reason?.status === 400){
              setCatchError('wrong password or login');
           }
           dummyService.auth.refresh()
       });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(loginUser)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
            <div>{catchError}</div>
        </div>
    );
};

export default Login;