import axios from "axios";
import {IUser} from "../models/IUser";
import {ISecondUser} from "../models/ISecondUser";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

export const userService = {
    users:{
        createUser: async (user:IUser) =>{
            await  axiosInstance.post('/users',user)
        },
        createSecondUser: async (user:ISecondUser) =>{
            await axiosInstance.post('/users',user)
        }
    }
}


