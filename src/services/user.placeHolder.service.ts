import axios from "axios";
import {IUserPlaceHolder} from "../interfaces/IUserPlaceHolder";
import {IPostPlaceHolder} from "../interfaces/IPostPlaceHolder";

const axiosInstanceUsersPlaceHolder = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export  const usersPostsJsonPlaceHolderService = {
    getUsers: async (): Promise<IUserPlaceHolder[]> => {
         return ( await axiosInstanceUsersPlaceHolder.get<IUserPlaceHolder[]>('/users')).data;
    },
    getUserPosts: async (userId: number):Promise<IPostPlaceHolder[]> => {
       return ( await axiosInstanceUsersPlaceHolder.get<IPostPlaceHolder[]>(`/posts?userId=${userId}`)).data;
    }
}