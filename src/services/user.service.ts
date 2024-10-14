import axios, {AxiosInstance, AxiosResponse} from "axios";
import { IDataUser, IUser} from "../interfaces/IUser";
import {IDataPost,IPost} from "../interfaces/IPost"

const axiosInstance:AxiosInstance = axios.create(
    {
        baseURL:'https://dummyjson.com',
        headers:{"content-type":"application/json"}
    }
);
export const getUsers = async ():Promise<IUser[]> =>{
    return (await axiosInstance.get<IDataUser>('/users')).data.users;
};
export  const getPostsOfUsers = async (userId:number):Promise<IPost[]>=>{
    return  (await axiosInstance.get<IDataPost>(`/users/${userId}/posts`)).data.posts;
}
export const userService = {
    getUsers: async ():Promise<IUser[]> =>{return (await axiosInstance.get<IDataUser>('/users')).data.users},
    getPostsOfUsers: async (userId:number):Promise<IPost[]> =>{return (await axiosInstance.get<IDataPost>(`/users/${userId}/posts`)).data.posts}
}
