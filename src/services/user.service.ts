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
    let users:AxiosResponse<IDataUser> = await axiosInstance.get<IDataUser>('/users');
    console.log(users.data);
    return users.data.users;
};
export  const getPostsOfUsers = async (userId:number):Promise<IPost[]>=>{
    let postsOfUser = await axiosInstance.get<IDataPost>(`/users/${userId}/posts`);
    console.log(postsOfUser);
    return postsOfUser.data.posts;
}
