import axios from "axios";
import {IUserPlaceHolder} from "../interfaces/IUserPlaceHolder";
import {IPostPlaceHolder} from "../interfaces/IPostPlaceHolder";
import {IComment} from "../interfaces/IComment";

const axiosInstanceUsersPlaceHolder = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export  const usersPostsJsonPlaceHolderService = {
    getUsers: async (): Promise<IUserPlaceHolder[]> => {
         return ( await axiosInstanceUsersPlaceHolder.get<IUserPlaceHolder[]>('/users')).data;
    },
    getUserPosts: async (userId: number):Promise<IPostPlaceHolder[]> => {
       return ( await axiosInstanceUsersPlaceHolder.get<IPostPlaceHolder[]>(`/posts?userId=${userId}`)).data;
    },
    getCommentsOfPost: async (PostId:number):Promise<IComment[]> =>{
        return (await axiosInstanceUsersPlaceHolder.get(`/posts/${PostId}/comments`)).data}
}