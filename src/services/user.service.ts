import axios, {AxiosInstance} from "axios";
import { IDataUser, IUser} from "../interfaces/IUser";
import {IDataPost,IPost} from "../interfaces/IPost"


const axiosInstance:AxiosInstance = axios.create(
    {
        baseURL:'https://dummyjson.com',
        headers:{"content-type":"application/json"}
    }
);
axiosInstance.interceptors.request.use((x) =>{
    console.log(x);
    return x;
})

export const userService = {
    getUsers: async ():Promise<IUser[]> =>{return (await axiosInstance.get<IDataUser>('/users')).data.users},
    getPostsOfUsers: async (userId:number):Promise<IPost[]> =>{return (await axiosInstance.get<IDataPost>(`/users/${userId}/posts`)).data.posts},
}
