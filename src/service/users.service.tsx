import axios from "axios";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

export const userService = {
    users:{
        createUser: async (user:IUser) =>{
            console.log(user);
            await  axiosInstance.post('/users',{
                method:'POST',
                body: JSON.stringify(user)
            })
        },
        getAllUsers: async ():Promise<IUser[]> =>{
             return (await axiosInstance.get<IUser[]>('/users')).data
        }
    }
}